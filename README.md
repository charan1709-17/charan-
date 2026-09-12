# Charan — Portfolio Site — Setup Guide

The site is now personalized with your name, bio, email, and 14 of your
reels/renders. Files:
- `index.html` — content and structure
- `styles.css` — the dark/bold visual style
- `script.js` — live clock, mobile menu, and the click-to-play video lightbox
- `videos/` — your reels, compressed for the web (see note below)
- `images/posters/` — a thumbnail frame for each video, shown in the grid

## About the video titles
I drafted a title for each clip based on what's visible in the footage
(e.g. "Forsaken Road — Environment Art" for the car-wreck forest scene,
"Monster Splash — Liquid Simulation" for the energy-drink can). I don't
know your actual project names, software breakdown per shot, or which
studio/brief each was for — open `index.html`, find the `<h3>` and `<p>`
text inside each `.work__card`, and swap in the real titles/credits.

## About the video files
Your originals totaled ~340MB combined (some 4K, up to 94MB each), which
is too heavy for a fast-loading site and close to GitHub's per-file
limits. I re-encoded all 14 to web-friendly H.264 MP4s (max 1920px wide,
same look, ~68MB total) and put them in `videos/`. The homepage loads
only the small poster images up front; clicking a card streams the full
video in a lightbox player, so the page itself stays fast.

If you'd rather keep the exact original files, replace anything in
`videos/` with your own version — just keep the filenames referenced in
`index.html`'s `data-video="videos/....mp4"` attributes, or update those
attributes to match your new filenames.

## 1. Personalize the content

Open `index.html` in any text editor (VS Code is a good free one) and replace:

- `YN` in the nav and `Your Name` in the footer → your name/initials
- The hero headline and subtext → your own words
- The 4 project cards under `<!-- ===== WORK ===== -->` → your real project
  titles, one-line descriptions, and links (`href="#"` → your live project URL
  or case-study page)
- `you@example.com` (two places) → your real email
- The `#` links in `.contact__socials` → your LinkedIn/Instagram/Dribbble etc.
- The 4 "How I work" blocks and 4 "Process" steps → edit or reorder freely

In `script.js`, update:
```js
const CITY_LABEL = "Your City";
const TIME_ZONE = "Europe/Rome"; // pick your IANA time zone
```

## 2. Swap or add more reels

To replace a reel: drop your file into `videos/`, replacing the old one
(or add a new filename), then update that card's `data-video="videos/...` 
attribute and its poster `background-image:url('images/posters/...')` in
`index.html`. To generate a poster frame from a new video yourself later,
you can use any free tool (e.g. VLC → Video → Take Snapshot) — aim for a
frame that represents the shot well, saved as a `.jpg` around 800px wide.

## 3. Preview it locally

Just double-click `index.html` — it opens in your browser. No install,
no build step needed since this is plain HTML/CSS/JS.

## 4. Host it for free (GitHub Pages)

1. Create a free account at https://github.com if you don't have one.
2. Click **New repository**. Name it anything, e.g. `portfolio`. Keep it
   Public. Click **Create repository**.
3. On the new repo page, click **uploading an existing file**, then drag
   in `index.html`, `styles.css`, `script.js`, and your `images` folder.
   Commit the changes.
4. Go to **Settings → Pages** (left sidebar).
5. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Click **Save**.
6. Wait ~1 minute, refresh the page — GitHub gives you a live URL like
   `https://yourusername.github.io/portfolio/`.

That's it — free hosting, free HTTPS, no expiry.

### Alternative: Netlify Drop (even faster, no git needed)
1. Go to https://app.netlify.com/drop
2. Drag your whole project folder onto the page.
3. It deploys instantly and gives you a live URL. You can rename the
   subdomain or connect your own custom domain later (also free, domain
   registration itself usually isn't).

## 5. Optional next steps
- Buy a custom domain (e.g. yourname.com, ~$10–15/year) and point it at
  GitHub Pages or Netlify in a few clicks via their dashboards.
- Add real testimonials only once you actually have them — don't fabricate
  quotes, it undermines trust if discovered.
- Compress images at https://squoosh.app before uploading, for faster load.
