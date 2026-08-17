# Placeholders needing real values

Everything below is either a `// PLACEHOLDER` comment in the code or an unset/omitted field. Nothing fake has been filled in.

## 1. About section copy — needs Sreeja's own words

**File:** `src/data/profile.ts` — `profile.aboutParagraphs`

This is a **draft**, not Sreeja's actual writing. It was written from the direction given for the About section (regulated-industry stakes, pipelines that don't page anyone at 3am, audit-ready schemas, query plans going from seconds to milliseconds), but it's not something she said — it's a placeholder standing in until she reviews, edits, or replaces it. Read it, then either approve it, rewrite it, or hand it back for another pass. Two sincere sentences from her beat a plausible-sounding paragraph she didn't write.

## 2. Project repo URLs

**File:** `src/data/projects.ts`

Resolved. All four projects now have public repos and live GitHub Pages
dashboards (`repoUrl` + `liveUrl` set, `featured: true`, real stats pulled from
each repo's measured results).

ETL Data Automation Pipeline was the last one outstanding and is now published
at `sreejavuyyala/etl-data-automation-pipeline`. Two things changed with it
beyond adding the URLs, both worth knowing before the card is read aloud in an
interview:

- **The SSIS claim is gone.** The project was built ADF-native — no `.dtsx`
  package, no SSIS Integration Runtime. `SSIS` was also removed from
  `src/data/skills.ts`, where its only backing was this project. Re-add it there
  with a `PNC`/`CVS Health` context if there is real on-the-job SSIS experience.
- **The "~50% less manual intervention" and "~99% data accuracy" figures are
  gone.** No manual-process baseline was ever measured, so neither could be
  derived honestly. The card now carries what the pipeline's own run log
  actually recorded: 100% row-count reconciliation across 9 runs, zero
  unexplained variance, 25 data-quality rules, and 12 of 12 injected faults
  caught. The repo's `docs/metrics-methodology.md` documents what was real,
  what was simulated, and what the numbers do not claim.

## 3. Resume PDF

Not currently linked anywhere on the site — there was no resume file to link to. If you want a "Download Resume" button (e.g. in the Hero or Contact section), add the PDF to `public/` (e.g. `public/resume.pdf`) and add a link pointing to it.

## 4. Profile photo

Not currently used — the design intentionally has no headshot. If you want to add one, drop the image in `src/assets/` (or `public/`) and reference it in `src/components/Hero.tsx` or `src/components/About.tsx`.

## 5. Social preview image

**File:** `public/og-image.png`

A placeholder Open Graph/Twitter card image was generated programmatically (name, title, and the six-stage pipeline motif on the current brand palette) so link previews aren't broken. Swap it for a real designed 1200×630 image if you want something more polished — same filename, same path, no code changes needed.