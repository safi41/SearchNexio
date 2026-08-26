import puppeteer from "puppeteer-core";
const CHROME = "C:/Users/HP/AppData/Local/Google/Chrome/Application/chrome.exe";
const DIR = "C:/Users/HP/AppData/Local/Temp/claude/d--SearchNexio/1e2d5078-bcc9-4a25-881d-d8b52c8ce689/scratchpad/";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
await p.goto("http://localhost:8123/industries/crypto-seo/", { waitUntil:"networkidle0", timeout:120000 });
await p.evaluate(()=>scrollTo({top:document.body.scrollHeight*0.55,behavior:"instant"}));
await new Promise(r=>setTimeout(r,900));
const box = await p.evaluate(()=>{
  const t=document.querySelector('button[aria-label*="Switch to"]').getBoundingClientRect();
  const u=document.querySelector('button[aria-label="Back to top"]').getBoundingClientRect();
  return { x: Math.round(Math.min(t.x,u.x))-24, y: Math.round(t.y)-24,
           w: 100, h: Math.round(u.bottom-t.y)+48 };
});
console.log(JSON.stringify(box));
await p.screenshot({ path: DIR+"btt2.png", clip: box });
await b.close();
