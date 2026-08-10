# Sreeja Vuyyala — Portfolio

Personal portfolio site. Vite + React + TypeScript + Tailwind CSS + Framer Motion. No backend, no CMS — all content lives in typed data files.

Live at: **https://sreejavuyyala.github.io/sreeja-portfolio/**

## Local development

```bash
npm install
npm run dev        # start the dev server
npm run build       # type-check (tsc -b) + production build to dist/
npm run preview     # preview the production build locally
```

## Where to edit content

You do not need to touch any component (`.tsx`) files to update the site's content. Everything is in `src/data/`:

| File | Controls |
|---|---|
| `src/data/profile.ts` | Name, title, location, email, LinkedIn, GitHub, bio |
| `src/data/experience.ts` | Work history — roles, bullet highlights, stack tags |
| `src/data/projects.ts` | Project cards — highlights, stack, optional `repoUrl` |
| `src/data/skills.ts` | Skill groups and the items inside each |
| `src/data/education.ts` | Degrees, schools, dates |
| `src/data/nav.ts` | Header navigation labels/order |
| `src/data/pipeline.ts` | Labels on the hero pipeline diagram |

Each file is typed against `src/types.ts`, so an invalid edit (a typo'd field name, a missing property) will fail `npm run build` rather than fail silently.

To add a project's repo link once it's public, set `repoUrl` in `src/data/projects.ts` — the "View code" link appears automatically when it's set.

## Deploying to GitHub Pages

This repo deploys automatically via `.github/workflows/deploy.yml` on every push to `main`.

**One-time setup**, in the GitHub repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab) — the site publishes to `https://<username>.github.io/sreeja-portfolio/`.

### If you rename the repository

`vite.config.ts` sets `base: '/sreeja-portfolio/'` so built asset URLs resolve correctly under `https://<username>.github.io/sreeja-portfolio/`. If you rename the repo, update `base` to match — except if you rename it to `<username>.github.io` (a user/organization Pages site), in which case set `base: '/'` instead, since that site is served from the domain root.

## Placeholders still needing real values

See [CONTENT.md](./CONTENT.md).
