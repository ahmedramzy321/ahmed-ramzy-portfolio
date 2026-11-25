import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({executablePath:'/usr/bin/google-chrome-stable',args:['--no-sandbox','--disable-dev-shm-usage']});
for (const [lang,q] of [['en',''],['ar','?lang=ar']]) {
  const p = await b.newPage();
  await p.setViewport({width:320,height:800,isMobile:true});
  await p.goto('https://ahmedramzy321.github.io/ahmed-ramzy-portfolio/'+q,{waitUntil:'networkidle0',timeout:30000});
  await p.evaluate(()=>document.fonts.ready);
  await p.evaluate(async()=>{const h=document.body.scrollHeight;for(let y=0;y<h;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,50));}});
  await new Promise(r=>setTimeout(r,600));
  const res = await p.evaluate(()=>({cw:document.documentElement.clientWidth, sw:document.documentElement.scrollWidth}));
  console.log(`live ${lang} 320px: clientW=${res.cw} scrollW=${res.sw}`, res.cw===res.sw?'ok':'OVERFLOW');
  await p.close();
}
await b.close();
