(() => {
  const startScreen = document.getElementById('startScreen');
  const app = document.getElementById('app');
  const startBtn = document.getElementById('startBtn');
  const map = document.getElementById('map');
  const player = document.getElementById('player');
  const mission = document.getElementById('mission');
  const modal = document.getElementById('modal');
  const dialogTitle = document.getElementById('dialogTitle');
  const dialogBody = document.getElementById('dialogBody');
  const closeBtn = document.getElementById('closeBtn');

  const state = { x:52, y:56, step:2.2, active:true, nearby:null };

  const sections = {
    about:{title:'HOME / ABOUT',tpl:'tpl-about'},
    career:{title:'CAREER CENTER',tpl:'tpl-career'},
    projects:{title:'PROJECT LAB',tpl:'tpl-projects'},
    skills:{title:'SKILL GYM',tpl:'tpl-skills'},
    contact:{title:'CONTACT CENTER',tpl:'tpl-contact'},
    guide:{title:'MAP GUIDE',html:'<article><h2>HOW TO PLAY</h2><p>方向キーまたはWASDで移動します。建物・看板・人物に近づき、EnterかSpaceを押してください。</p><p>下のクイックメニューから直接開くこともできます。</p></article>'},
    npc:{title:'NPC MESSAGE',html:'<article><h2>WELCOME!</h2><p>この町には、経歴・プロジェクト・スキルが記録されています。</p><p>まずは左上のHOMEから探索してみましょう。</p></article>'}
  };

  function start(){
    startScreen.classList.add('hidden');
    app.classList.remove('hidden');
    requestAnimationFrame(()=>map.focus());
  }

  function openSection(key){
    const s=sections[key]; if(!s)return;
    dialogTitle.textContent=s.title;
    dialogBody.innerHTML='';
    if(s.tpl){
      dialogBody.appendChild(document.getElementById(s.tpl).content.cloneNode(true));
    }else{
      dialogBody.innerHTML=s.html;
    }
    modal.classList.remove('hidden');
    state.active=false;
  }

  function close(){
    modal.classList.add('hidden');
    state.active=true;
    map.focus();
  }

  function move(dx,dy,dir){
    if(!state.active)return;
    state.x=Math.max(2,Math.min(96,state.x+dx));
    state.y=Math.max(3,Math.min(91,state.y+dy));
    player.style.left=state.x+'%';
    player.style.top=state.y+'%';
    player.className='player '+dir+' walk';
    clearTimeout(move.timer);
    move.timer=setTimeout(()=>player.classList.remove('walk'),130);
    checkNearby();
  }

  function centerPercent(el){
    const mr=map.getBoundingClientRect(),r=el.getBoundingClientRect();
    return {x:((r.left-mr.left+r.width/2)/mr.width)*100,y:((r.top-mr.top+r.height/2)/mr.height)*100};
  }

  function checkNearby(){
    const targets=[...map.querySelectorAll('[data-section]')];
    let best=null,bestD=Infinity;
    targets.forEach(el=>{
      const p=centerPercent(el);
      const d=Math.hypot(state.x-p.x,state.y-p.y);
      if(d<bestD){bestD=d;best=el;}
    });
    if(best&&bestD<12){
      state.nearby=best.dataset.section;
      mission.textContent='Enter: '+best.dataset.section.toUpperCase();
    }else{
      state.nearby=null;
      mission.textContent='町を探索しよう';
    }
  }

  function key(k){
    const v=k.toLowerCase();
    if(v==='arrowup'||v==='w')move(0,-state.step,'up');
    else if(v==='arrowdown'||v==='s')move(0,state.step,'down');
    else if(v==='arrowleft'||v==='a')move(-state.step,0,'left');
    else if(v==='arrowright'||v==='d')move(state.step,0,'right');
    else if(v==='enter'||v===' ') { if(state.nearby)openSection(state.nearby); }
    else if(v==='escape')close();
  }

  document.addEventListener('keydown',e=>{
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' ','Enter'].includes(e.key))e.preventDefault();
    key(e.key);
  });

  document.querySelectorAll('[data-section]').forEach(el=>{
    el.addEventListener('click',()=>openSection(el.dataset.section));
  });

  document.querySelectorAll('.mobile-pad button').forEach(btn=>{
    btn.addEventListener('pointerdown',e=>{e.preventDefault();key(btn.dataset.key);});
  });

  startBtn.addEventListener('click',start);
  closeBtn.addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.getElementById('helpBtn').addEventListener('click',()=>openSection('guide'));
  checkNearby();
})();