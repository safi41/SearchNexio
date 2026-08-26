import puppeteer from "puppeteer-core";
const CHROME = "C:/Users/HP/AppData/Local/Google/Chrome/Application/chrome.exe";
const DIR = "C:/Users/HP/AppData/Local/Temp/claude/d--SearchNexio/1e2d5078-bcc9-4a25-881d-d8b52c8ce689/scratchpad/";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
let fails=0;
for (const w of [320,390,430,768,1024,1280,1536,1920]) {
  await p.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
  await p.goto("http://localhost:8123/industries/crypto-seo/", { waitUntil:"networkidle0", timeout:120000 });
  const o = await p.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));
  if(o.sw>o.cw+1){fails++;console.log(`  ${w}px OVERFLOW +${o.sw-o.cw}`);}
}
console.log("overflow failures:", fails, "/ 8");
await p.setViewport({width:1280,height:950});
await p.goto("http://localhost:8123/industries/crypto-seo/", { waitUntil:"networkidle0", timeout:120000 });
const g = await p.evaluate(()=>{
  const sec=[...document.querySelectorAll("section")].find(s=>/Industries We Work With/.test(s.querySelector("h2")?.textContent||""));
  const grid=sec.querySelector("div.grid");
  const rows={}; [...grid.children].forEach(c=>{const k=Math.round(c.getBoundingClientRect().y); (rows[k]=rows[k]||[]).push(1);});
  return { cards: grid.children.length, rows: Object.values(rows).map(r=>r.length).join("+") };
});
console.log("industries grid:", g.cards, "cards, rows of", g.rows);
await p.evaluate(()=>{const s=[...document.querySelectorAll("section")].find(x=>/Industries We Work With/.test(x.querySelector("h2")?.textContent||"")); s.scrollIntoView({block:"start",behavior:"instant"});});
await new Promise(r=>setTimeout(r,1100));
await p.screenshot({ path: DIR+"crypto-ind.png" });
await b.close();
