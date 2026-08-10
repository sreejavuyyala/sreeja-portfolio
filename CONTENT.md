# Placeholders needing real values

Everything below is a clearly-marked `// TODO` in the code. Nothing fake has been filled in — these fields are either empty/unset or omitted from the rendered page until you provide real values.

## 1. GitHub profile URL

**File:** `src/data/profile.ts` — `profile.github.url`

Currently empty, and the GitHub button/link is hidden on the Hero and Contact sections (`profile.github.isPlaceholder: true`) so no dead link is shown. Once you have the URL:

```ts
github: {
  label: "GitHub",
  url: "https://github.com/<your-username>",
  isPlaceholder: false,
},
```

## 2. Project repo URLs

**File:** `src/data/projects.ts` — `repoUrl` on each of the three projects

All three are currently `undefined`, so no "View code" link renders on those cards. Set `repoUrl: "https://github.com/..."` on any project once it has a public repo, and the link appears automatically.

- Distributed Healthcare Data Platform
- AI-Powered Predictive Analytics System
- ETL Data Automation Pipeline

## 3. Resume PDF

Not currently linked anywhere on the site — there was no resume file to link to. If you want a "Download Resume" button (e.g. in the Hero or Contact section), add the PDF to `public/` (e.g. `public/resume.pdf`) and add a link pointing to it.

## 4. Profile photo

Not currently used — the design intentionally has no headshot. If you want to add one, drop the image in `src/assets/` (or `public/`) and reference it in `src/components/Hero.tsx` or `src/components/About.tsx`.

## 5. Social preview image

**File:** `public/og-image.png`

A placeholder Open Graph/Twitter card image was generated programmatically (name, title, and the pipeline motif on the brand palette) so link previews aren't broken. Swap it for a real designed 1200×630 image if you want something more polished — same filename, same path, no code changes needed.
