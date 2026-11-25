// Generates code-made typographic cover art for projects without real screenshots.
// Renders an HTML template with headless Chrome at 1280x720 into public/projects/.
import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { siLaravel, siPhp, siMysql } from 'simple-icons';

const PALETTE = {
  bg: '#f6f2ea',
  ink: '#29241d',
  muted: '#7d7263',
  border: '#d9cfbc',
  accent: '#a86f4b',
  taupe: '#6b5d4d',
};

const logo = (icon, size = 34) =>
  `<span class="logo"><svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#${icon.hex}"><path d="${icon.path}"/></svg>${icon.title}</span>`;

function cover({ index, kicker, name, stackLine, logos }) {
  return `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1280px; height:720px; background:${PALETTE.bg}; font-family:Inter,sans-serif; color:${PALETTE.ink}; position:relative; overflow:hidden; }
  .edge { position:absolute; top:0; bottom:0; left:0; width:14px; background:${PALETTE.accent}; }
  .frame { position:absolute; inset:28px; border:1px dashed ${PALETTE.border}; }
  .ghost { position:absolute; right:40px; top:50%; transform:translateY(-50%); font-family:Fraunces,serif; font-weight:600; font-size:460px; line-height:1; color:transparent; -webkit-text-stroke:2px ${PALETTE.border}; }
  .inner { position:absolute; inset:0; padding:96px 110px; display:flex; flex-direction:column; }
  .kicker { display:flex; align-items:center; gap:18px; font-size:19px; font-weight:600; letter-spacing:5px; color:${PALETTE.muted}; text-transform:uppercase; }
  .kicker .idx { font-family:Fraunces,serif; font-size:22px; color:${PALETTE.accent}; letter-spacing:0; }
  .kicker .rule { width:120px; height:1px; background:${PALETTE.border}; }
  h1 { font-family:Fraunces,serif; font-weight:600; font-size:88px; line-height:1.04; letter-spacing:-2px; max-width:760px; margin-top:auto; }
  h1 em { font-style:italic; color:${PALETTE.accent}; }
  .stack { margin-top:26px; font-size:20px; font-weight:500; letter-spacing:3px; text-transform:uppercase; color:${PALETTE.taupe}; }
  .logos { margin-top:auto; display:flex; align-items:center; gap:34px; border-top:1px solid ${PALETTE.border}; padding-top:30px; }
  .logo { display:flex; align-items:center; gap:11px; font-size:19px; font-weight:600; color:${PALETTE.ink}; }
  .tag { margin-left:auto; font-size:15px; letter-spacing:2px; color:${PALETTE.muted}; text-transform:uppercase; }
</style></head>
<body>
  <div class="edge"></div>
  <div class="frame"></div>
  <div class="ghost">${index}</div>
  <div class="inner">
    <div class="kicker"><span class="idx">${index}</span><span class="rule"></span><span>${kicker}</span></div>
    <h1>${name}</h1>
    <div class="stack">${stackLine}</div>
    <div class="logos">${logos}<span class="tag">github.com/ahmedramzy321</span></div>
  </div>
</body></html>`;
}

const covers = [
  {
    file: 'ecommerce-cover',
    index: '01',
    kicker: 'Backend System',
    name: 'E-Commerce<br><em>Management</em> System',
    stackLine: 'Laravel · MVC · MySQL · PHP',
    logos: logo(siLaravel) + logo(siPhp) + logo(siMysql),
  },
  {
    file: 'school-cover',
    index: '02',
    kicker: 'Backend System',
    name: 'School<br><em>Management</em> System',
    stackLine: 'Laravel 12 · MySQL · SQL Server · Sanctum',
    logos: logo(siLaravel) + logo(siPhp) + logo(siMysql),
  },
];

for (const c of covers) {
  const html = `/tmp/${c.file}.html`;
  writeFileSync(html, cover(c));
  execFileSync('google-chrome-stable', [
    '--headless=new',
    '--no-sandbox',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1280,720',
    '--virtual-time-budget=6000',
    `--screenshot=public/projects/${c.file}.png`,
    `file://${html}`,
  ]);
  console.log('wrote public/projects/' + c.file + '.png');
}
