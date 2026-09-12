# Your Portfolio Site — Setup Guide

Three files make up the whole site:
- `index.html` — content and structure
- `styles.css` — the dark/bold visual style
- `script.js` — the live clock + mobile menu

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

## 2. Add your project images

Put your images inside the `images/` folder, named to match what's
referenced in `index.html`:
```
images/project-1.jpg
images/project-2.jpg
images/project-3.jpg
images/project-4.jpg
```
Recommended: 1600px wide, landscape (16:10), compressed as .jpg or .webp
so the site stays fast. If you don't have images yet, leave them out —
the cards will just show a solid dark color instead of a broken image.

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
