import puppeteer from "puppeteer-core";
const CHROME = "C:/Users/HP/AppData/Local/Google/Chrome/Application/chrome.exe";
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
await p.goto("http://localhost:8123/industries/crypto-seo/", { waitUntil:"networkidle0", timeout:120000 });

const read = () => p.evaluate(()=>{
  const btn=document.querySelector('button[aria-label="Back to top"]');
  const cs=getComputedStyle(btn);
  const ring=btn.querySelectorAll("circle")[1];
  const circ=2*Math.PI*20;
  const off=parseFloat(ring.getAttribute("stroke-dashoffset"));
  return { opacity:+cs.opacity, pe:cs.pointerEvents, tab:btn.tabIndex,
    hidden:btn.getAttribute("aria-hidden"),
    progress: Math.round((1-off/circ)*100) };
});

console.log("at top:            ", JSON.stringify(await read()));
await p.evaluate(()=>scrollTo({top:400,behavior:"instant"})); await new Promise(r=>setTimeout(r,400));
console.log("400px (half view): ", JSON.stringify(await read()));
await p.evaluate(()=>scrollTo({top:1200,behavior:"instant"})); await new Promise(r=>setTimeout(r,400));
console.log("1200px:            ", JSON.stringify(await read()));
await p.evaluate(()=>scrollTo({top:document.body.scrollHeight/2,behavior:"instant"})); await new Promise(r=>setTimeout(r,400));
console.log("mid page:          ", JSON.stringify(await read()));
await p.evaluate(()=>scrollTo({top:document.body.scrollHeight,behavior:"instant"})); await new Promise(r=>setTimeout(r,500));
console.log("bottom:            ", JSON.stringify(await read()));

// does it actually return to top?
await p.click('button[aria-label="Back to top"]');
await new Promise(r=>setTimeout(r,1600));
console.log("after click, scrollY =", await p.evaluate(()=>Math.round(scrollY)));

// collision with the theme toggle
const gap = await p.evaluate(()=>{
  const t=document.querySelector('button[aria-label*="Switch to"]').getBoundingClientRect();
  const u=document.querySelector('button[aria-label="Back to top"]').getBoundingClientRect();
  return { themeBottom:Math.round(t.bottom), backTop:Math.round(u.top), gap:Math.round(u.top-t.bottom),
           sameRight: Math.round(t.right)===Math.round(u.right) };
});
console.log("vs theme toggle:", JSON.stringify(gap));
await b.close();
