@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Inter:wght@400;500;600;700;800&family=Press+Start+2P&display=swap');

:root {
  --bg: #f7f5ea;
  --paper: #fffdf6;
  --ink: #1d261f;
  --muted: #667168;
  --line: #253129;
  --green: #7db66a;
  --green-soft: #dcebd2;
  --blue: #a8d4e9;
  --yellow: #efd36b;
  --purple: #b7a6dc;
  --shadow: 7px 7px 0 #253129;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background:
    linear-gradient(rgba(37,49,41,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(37,49,41,.035) 1px, transparent 1px),
    var(--bg);
  background-size: 24px 24px;
  color: var(--ink);
  font-family: Inter, system-ui, sans-serif;
}
a { color: inherit; }
img { max-width: 100%; display: block; }
.container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
.pixel-label {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 7px 10px;
  border: 2px solid var(--line);
  background: var(--yellow);
  font-family: "Press Start 2P", monospace;
  font-size: 8px;
  letter-spacing: .04em;
}
.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 66px;
  padding: 0 max(20px, calc((100vw - 1120px)/2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--line);
  background: rgba(255,253,246,.92);
  backdrop-filter: blur(12px);
}
.brand {
  text-decoration: none;
  font-family: "Press Start 2P", monospace;
  font-size: 11px;
}
.topbar nav { display: flex; gap: 24px; }
.topbar nav a {
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}
.hero {
  min-height: calc(100vh - 66px);
  padding: 70px 0 90px;
  display: grid;
  grid-template-columns: 1.35fr .75fr;
  gap: 70px;
  align-items: center;
  position: relative;
}
.hero-kicker {
  margin: 22px 0 10px;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: .05em;
}
.hero h1 {
  margin: 0;
  font-family: "Press Start 2P", monospace;
  font-size: clamp(42px, 7vw, 88px);
  line-height: 1.16;
  letter-spacing: -.03em;
  text-shadow: 5px 5px 0 var(--green-soft);
}
.hero-description {
  max-width: 720px;
  margin: 26px 0;
  font-size: 19px;
  line-height: 1.9;
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 18px;
  color: var(--muted);
  font-weight: 700;
}
.hero-meta span { display: inline-flex; align-items: center; gap: 7px; }
.hero-actions, .contact-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
.button {
  min-height: 52px;
  padding: 0 18px;
  border: 3px solid var(--line);
  box-shadow: 4px 4px 0 var(--line);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  text-decoration: none;
  font-weight: 800;
  transition: transform .15s ease, box-shadow .15s ease;
}
.button:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--line); }
.button.primary { background: var(--green); }
.button.secondary { background: var(--paper); }
.button.light { background: white; }
.profile-panel {
  border: 4px solid var(--line);
  background: var(--paper);
  box-shadow: var(--shadow);
}
.window-bar {
  height: 42px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 3px solid var(--line);
  background: #e8ebdf;
}
.window-bar span {
  width: 13px; height: 13px; border: 2px solid var(--line); border-radius: 50%;
}
.window-bar span:nth-child(1) { background: #e8766f; }
.window-bar span:nth-child(2) { background: #e7c968; }
.window-bar span:nth-child(3) { background: #74b66f; }
.window-bar b { margin-left: auto; font-family: "Press Start 2P", monospace; font-size: 8px; }
.photo-frame { padding: 18px 18px 0; }
.photo-frame img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border: 3px solid var(--line);
  background: white;
}
.profile-stats { padding: 18px; display: grid; gap: 10px; }
.profile-stats div {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 2px dashed #aab2ab;
  padding-bottom: 8px;
}
.profile-stats span { color: var(--muted); font-size: 12px; font-weight: 800; }
.profile-stats b { font-size: 12px; }
.scroll-cue {
  position: absolute;
  left: 0;
  bottom: 24px;
  width: 42px; height: 42px;
  display: grid; place-items: center;
  border: 3px solid var(--line);
  background: var(--paper);
  box-shadow: 3px 3px 0 var(--line);
}
.section { padding: 100px 0; }
.section-heading { max-width: 800px; margin-bottom: 42px; }
.section-heading h2, .contact-section h2 {
  margin: 18px 0 14px;
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.2;
}
.section-heading p { color: var(--muted); font-size: 18px; line-height: 1.8; }
.about-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.story-card {
  min-height: 250px;
  padding: 24px;
  border: 3px solid var(--line);
  background: var(--paper);
  box-shadow: 5px 5px 0 var(--line);
}
.story-card:nth-child(1) { background: #e4f0da; }
.story-card:nth-child(2) { background: #fff2bd; }
.story-card:nth-child(3) { background: #dcecf5; }
.story-card h3 { margin: 24px 0 10px; font-size: 24px; }
.story-card p { margin: 0; color: #475248; line-height: 1.8; }
.timeline { margin-top: 58px; border-left: 4px solid var(--line); }
.timeline article {
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 24px;
  padding: 0 0 42px 30px;
}
.timeline article:before {
  content: "";
  position: absolute;
  left: -10px;
  top: 4px;
  width: 15px; height: 15px;
  border: 3px solid var(--line);
  background: var(--yellow);
}
.timeline-year { font-family: "Press Start 2P", monospace; font-size: 9px; padding-top: 4px; }
.timeline h3 { margin: 0 0 8px; font-size: 23px; }
.timeline p { margin: 0; color: var(--muted); line-height: 1.75; }
.experience-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
.experience-card {
  padding: 26px;
  border: 3px solid var(--line);
  box-shadow: 6px 6px 0 var(--line);
}
.accent-blue { background: #e1eff6; }
.accent-yellow { background: #fff1b9; }
.accent-green { background: #e2f0db; }
.accent-purple { background: #eee7fb; }
.experience-card h3 { margin: 20px 0 12px; font-size: 25px; }
.experience-card p, .experience-card li { line-height: 1.75; }
.experience-card ul { padding-left: 20px; }
.tag-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
.tag-list span {
  padding: 6px 9px;
  border: 2px solid var(--line);
  background: rgba(255,255,255,.7);
  font-size: 12px;
  font-weight: 800;
}
.project-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
.project-card {
  min-height: 320px;
  padding: 24px;
  border: 3px solid var(--line);
  box-shadow: 6px 6px 0 var(--line);
  background: var(--paper);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform .18s ease;
}
.project-card:hover { transform: translateY(-5px); }
.project-topline { display: flex; justify-content: space-between; align-items: center; }
.status { font-family: "Press Start 2P", monospace; font-size: 7px; }
.project-card h3 { margin: 32px 0 12px; font-size: 28px; }
.project-card p { color: var(--muted); line-height: 1.8; }
.project-card .tag-list { margin-top: auto; }
.skills-layout { display: grid; grid-template-columns: 1.35fr .65fr; gap: 30px; }
.skill-groups { display: grid; gap: 18px; }
.skill-groups article {
  padding: 24px;
  border: 3px solid var(--line);
  background: var(--paper);
}
.skill-groups h3 { display: flex; align-items: center; gap: 9px; margin: 0; }
.tag-list.large span { font-size: 13px; padding: 8px 11px; }
.badge-panel {
  padding: 24px;
  border: 3px solid var(--line);
  background: #fff2bd;
  box-shadow: 6px 6px 0 var(--line);
}
.badge-item {
  margin-top: 16px;
  padding: 16px;
  border: 3px solid var(--line);
  background: white;
}
.badge-item b {
  display: inline-block;
  min-width: 60px;
  margin-right: 12px;
  font-family: "Press Start 2P", monospace;
  font-size: 8px;
}
.contact-section {
  background: var(--green);
  border-top: 4px solid var(--line);
  border-bottom: 4px solid var(--line);
}
.contact-inner {
  padding: 90px 0;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 50px;
  align-items: center;
}
.contact-inner p { max-width: 700px; font-size: 18px; line-height: 1.8; }
.contact-actions { flex-direction: column; margin-top: 0; }
footer { background: var(--ink); color: white; }
.footer-inner {
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 13px;
}

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; gap: 44px; min-height: auto; }
  .hero-copy { padding-top: 20px; }
  .profile-panel { max-width: 520px; }
  .scroll-cue { display: none; }
  .about-grid, .project-grid { grid-template-columns: 1fr; }
  .experience-grid { grid-template-columns: 1fr; }
  .skills-layout, .contact-inner { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .container { width: min(100% - 26px, 1120px); }
  .topbar { height: 58px; padding: 0 13px; }
  .topbar nav { gap: 12px; }
  .topbar nav a { font-size: 11px; }
  .topbar nav a:nth-child(2), .topbar nav a:nth-child(3) { display: none; }
  .brand { font-size: 8px; }
  .hero { padding: 44px 0 70px; }
  .hero h1 { font-size: clamp(40px, 16vw, 63px); }
  .hero-description { font-size: 16px; line-height: 1.8; }
  .hero-meta { flex-direction: column; gap: 10px; }
  .hero-actions, .contact-actions { flex-direction: column; }
  .button { width: 100%; }
  .section { padding: 72px 0; }
  .section-heading h2, .contact-section h2 { font-size: 34px; }
  .section-heading p { font-size: 16px; }
  .timeline article { grid-template-columns: 1fr; gap: 8px; padding-left: 24px; }
  .experience-card, .project-card, .story-card { padding: 20px; }
  .project-card { min-height: 280px; }
  .contact-inner { padding: 72px 0; }
  .footer-inner { min-height: 110px; flex-direction: column; justify-content: center; text-align: center; }
}
