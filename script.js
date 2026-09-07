(() => {
  const boot = document.getElementById('boot');
  const desktop = document.getElementById('desktop');
  const enterBtn = document.getElementById('enterBtn');
  const layer = document.getElementById('windowLayer');
  const win = document.getElementById('appWindow');
  const title = document.getElementById('windowTitle');
  const body = document.getElementById('windowBody');
  const close = document.getElementById('closeWindow');
  const soundBtn = document.getElementById('soundBtn');
  const clock = document.getElementById('clock');

  let soundOn = false;
  const titles = {
    about:'ABOUT ME',
    career:'CAREER.LOG',
    projects:'PROJECTS.EXE',
    skills:'PLAYER STATS',
    contact:'NEW MESSAGE'
  };

  function beep(freq=440,duration=.05){
    if(!soundOn)return;
    const AudioCtx=window.AudioContext||window.webkitAudioContext;
    if(!AudioCtx)return;
    const ctx=new AudioCtx();
    const osc=ctx.createOscillator();
    const gain=ctx.createGain();
    osc.type='square';osc.frequency.value=freq;
    gain.gain.setValueAtTime(.035,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+duration);
    osc.connect(gain);gain.connect(ctx.destination);
    osc.start();osc.stop(ctx.currentTime+duration);
  }

  function start(){
    beep(620,.09);
    boot.classList.add('hidden');
    desktop.classList.remove('hidden');
  }

  function openApp(key){
    const tpl=document.getElementById(key);
    if(!tpl)return;
    title.textContent=titles[key]||key.toUpperCase();
    body.innerHTML='';
    body.appendChild(tpl.content.cloneNode(true));
    layer.classList.remove('hidden');
    beep(520,.06);
  }

  function closeApp(){
    layer.classList.add('hidden');
    beep(320,.05);
  }

  document.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click',()=>openApp(el.dataset.open));
  });
  enterBtn.addEventListener('click',start);
  close.addEventListener('click',closeApp);
  layer.addEventListener('click',e=>{if(e.target===layer)closeApp();});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!layer.classList.contains('hidden'))closeApp();
    if((e.key==='Enter'||e.key===' ')&&!boot.classList.contains('hidden'))start();
  });
  soundBtn.addEventListener('click',()=>{
    soundOn=!soundOn;
    soundBtn.textContent=soundOn?'♫':'♪';
    if(soundOn)beep(700,.08);
  });

  function tick(){
    const d=new Date();
    clock.textContent=d.toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'});
  }
  tick();setInterval(tick,10000);
})();