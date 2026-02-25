import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const pages = [
  { name: 'home', path: '/' },
  { name: 'menu', path: '/menu' },
  { name: 'about', path: '/about' },
  { name: 'gallery', path: '/gallery' },
  { name: 'contact', path: '/contact' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const dir = path.dirname(fileURLToPath(import.meta.url)) + path.sep;
const baseURL = process.env.MOCKUP_BASE_URL ?? 'http://localhost:3000';

async function toDataUri(pngPath) {
  const buf = await fs.readFile(pngPath);
  return `data:image/png;base64,${buf.toString('base64')}`;
}

function mockupHtml({ title, desktopSrc, mobileSrc }) {
  const safeTitle = title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeTitle} — Mockup</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
    <style>
      :root{
        --bg0:#07060a;
        --bg1:#0b0911;
        --ink:#efe7d4;
        --muted:rgba(239,231,212,.72);
        --line:rgba(239,231,212,.16);
        --shadow: 0 30px 80px rgba(0,0,0,.55);
        --glow: 0 0 0 1px rgba(239,231,212,.14), 0 18px 60px rgba(0,0,0,.55);
      }
      *{box-sizing:border-box}
      html,body{height:100%}
      body{
        margin:0;
        color:var(--ink);
        font-family:"IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
        background:
          radial-gradient(1200px 700px at 18% 12%, rgba(255,168,76,.18), transparent 58%),
          radial-gradient(900px 600px at 80% 30%, rgba(166,88,255,.14), transparent 60%),
          radial-gradient(600px 520px at 70% 86%, rgba(70,200,170,.12), transparent 62%),
          linear-gradient(180deg, var(--bg0), var(--bg1));
      }
      .grain{
        position:fixed; inset:0; pointer-events:none;
        background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='210' height='210'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='210' height='210' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
        mix-blend-mode:overlay; opacity:.35;
      }
      .wrap{max-width:1680px; margin:0 auto; padding:64px 56px 72px}
      header{
        display:flex; align-items:flex-end; justify-content:space-between;
        gap:24px; padding:4px 2px 28px;
        border-bottom:1px solid var(--line);
      }
      .kicker{letter-spacing:.18em; text-transform:uppercase; color:var(--muted); font-size:12px}
      h1{
        margin:10px 0 0;
        font-family:"Fraunces", ui-serif, Georgia, serif;
        font-weight:700;
        font-size:44px;
        line-height:1.04;
      }
      .meta{display:flex; flex-direction:column; align-items:flex-end; gap:10px}
      .pill{
        display:inline-flex; align-items:center; gap:10px;
        border:1px solid var(--line);
        border-radius:999px;
        padding:10px 14px;
        color:var(--muted);
        background:rgba(0,0,0,.18);
        box-shadow: 0 14px 40px rgba(0,0,0,.35);
        white-space:nowrap;
        font-size:13px;
      }
      .dot{width:8px; height:8px; border-radius:50%; background:rgba(255,168,76,.9); box-shadow:0 0 0 3px rgba(255,168,76,.18)}
      .grid{
        display:grid;
        grid-template-columns: 1.45fr .55fr;
        gap:44px;
        padding-top:42px;
        align-items:start;
      }
      .label{
        display:flex; align-items:baseline; justify-content:space-between;
        margin:0 0 12px;
        color:var(--muted);
        letter-spacing:.08em;
        text-transform:uppercase;
        font-size:12px;
      }
      .label strong{color:var(--ink); font-weight:600; letter-spacing:.06em}
      .card{
        border:1px solid var(--line);
        border-radius:22px;
        background: rgba(0,0,0,.2);
        box-shadow: var(--shadow);
        overflow:hidden;
      }
      .browserTop{
        height:48px;
        display:flex;
        align-items:center;
        gap:12px;
        padding:0 16px;
        background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
        border-bottom:1px solid rgba(239,231,212,.12);
      }
      .lights{display:flex; gap:8px; margin-right:6px}
      .light{width:10px; height:10px; border-radius:50%}
      .l1{background:#ff5f57}
      .l2{background:#febc2e}
      .l3{background:#28c840}
      .addr{
        flex:1;
        height:30px;
        border-radius:10px;
        border:1px solid rgba(239,231,212,.14);
        background: rgba(0,0,0,.18);
        display:flex;
        align-items:center;
        padding:0 12px;
        color:rgba(239,231,212,.74);
        font-size:12px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .screen img{
        width:100%;
        display:block;
      }
      .desktopFrame{
        border-radius:22px;
        box-shadow: var(--glow);
      }
      .phoneShell{
        position:relative;
        border-radius:40px;
        padding:16px;
        background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
        border:1px solid rgba(239,231,212,.16);
        box-shadow: var(--glow);
      }
      .phoneBezel{
        border-radius:32px;
        overflow:hidden;
        background:#0b0a10;
        border:1px solid rgba(255,255,255,.08);
        position:relative;
      }
      .island{
        position:absolute;
        top:10px; left:50%;
        transform:translateX(-50%);
        width:132px; height:26px;
        border-radius:999px;
        background: rgba(0,0,0,.72);
        border:1px solid rgba(255,255,255,.08);
        box-shadow: 0 8px 28px rgba(0,0,0,.45);
        z-index:4;
      }
      .shine{
        pointer-events:none;
        position:absolute; inset:0;
        background: radial-gradient(600px 360px at 30% 20%, rgba(255,255,255,.16), transparent 55%),
                    radial-gradient(520px 360px at 80% 78%, rgba(255,255,255,.08), transparent 58%);
        mix-blend-mode:screen;
        opacity:.55;
        z-index:3;
      }
      .phoneBezel img{width:100%; display:block}
      footer{
        padding-top:34px;
        color:rgba(239,231,212,.62);
        font-size:12px;
        letter-spacing:.06em;
        text-transform:uppercase;
        display:flex;
        justify-content:space-between;
        border-top:1px solid var(--line);
        margin-top:44px;
      }
      @media (max-width: 1100px){
        .wrap{padding:44px 22px 56px}
        header{flex-direction:column; align-items:flex-start}
        .meta{align-items:flex-start}
        .grid{grid-template-columns:1fr; gap:26px}
      }
    </style>
  </head>
  <body>
    <div class="grain"></div>
    <div class="wrap">
      <header>
        <div>
          <div class="kicker">Mockup Website</div>
          <h1>${safeTitle}</h1>
        </div>
        <div class="meta">
          <div class="pill"><span class="dot"></span><span>Desktop & Handphone</span></div>
          <div class="pill">Warung Taburai</div>
        </div>
      </header>

      <section class="grid">
        <div>
          <div class="label"><strong>Website — Desktop</strong><span>1440×900</span></div>
          <div class="card desktopFrame">
            <div class="browserTop">
              <div class="lights">
                <span class="light l1"></span><span class="light l2"></span><span class="light l3"></span>
              </div>
              <div class="addr">warung-taburai.local • ${safeTitle}</div>
            </div>
            <div class="screen"><img alt="Desktop screenshot" src="${desktopSrc}" /></div>
          </div>
        </div>

        <div>
          <div class="label"><strong>Website — Handphone</strong><span>390×844</span></div>
          <div class="phoneShell">
            <div class="phoneBezel">
              <div class="island"></div>
              <div class="shine"></div>
              <img alt="Mobile screenshot" src="${mobileSrc}" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>Generated Mockup</div>
        <div>${new Date().toISOString().slice(0, 10)}</div>
      </footer>
    </div>
  </body>
</html>`;
}

const browser = await chromium.launch();

const screenShots = new Map();

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  for (const p of pages) {
    // `networkidle` can hang in dev (HMR/websocket). `load` is more reliable for mockups.
    await page.goto(`${baseURL}${p.path}`, { waitUntil: 'load', timeout: 60_000 });
    await page.waitForTimeout(1000);

    const fullPath = `${dir}${p.name}-${vp.name}.png`;
    await page.screenshot({ path: fullPath, fullPage: true });

    const screenPath = `${dir}${p.name}-${vp.name}-screen.png`;
    await page.screenshot({ path: screenPath, fullPage: false });

    if (!screenShots.has(p.name)) screenShots.set(p.name, {});
    screenShots.get(p.name)[vp.name] = screenPath;

    console.log(`✓ ${p.name}-${vp.name}.png`);
    console.log(`✓ ${p.name}-${vp.name}-screen.png`);
  }

  await context.close();
}

// Build "mockup" images: desktop + mobile in device frames (one output per route).
{
  const mockContext = await browser.newContext({ viewport: { width: 1920, height: 1200 }, deviceScaleFactor: 2 });
  const mockPage = await mockContext.newPage();

  for (const p of pages) {
    const shots = screenShots.get(p.name);
    if (!shots?.desktop || !shots?.mobile) continue;

    const desktopSrc = await toDataUri(shots.desktop);
    const mobileSrc = await toDataUri(shots.mobile);

    await mockPage.setContent(
      mockupHtml({ title: p.name.toUpperCase(), desktopSrc, mobileSrc }),
      { waitUntil: 'domcontentloaded' },
    );

    await mockPage.waitForFunction(() => Array.from(document.images).every((img) => img.complete));
    await mockPage.waitForTimeout(150);

    const outPath = `${dir}${p.name}-mockup.png`;
    await mockPage.screenshot({ path: outPath, fullPage: true });
    console.log(`★ ${p.name}-mockup.png`);
  }

  await mockContext.close();
}

await browser.close();
console.log('\nDone! All mockups saved.');
