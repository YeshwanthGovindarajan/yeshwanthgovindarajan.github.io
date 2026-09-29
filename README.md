# yeshwanthgovindarajan.github.io

Personal portfolio site, based on the [dark-minimal](https://github.com/Gothsec/dark-minimal) Astro template.

**Live:** https://yeshwanthgovindarajan.github.io

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Customize

- `src/data/site.ts` — name, role, contact links, tech stack icons
- `src/data/catalog.ts` — project and research cards (homepage strip and `/projects`)
- `src/data/projectPages.ts` — project detail pages
- `src/data/research.ts` — research and patent pages
- `src/React/SkillsList.tsx` — "What I do" focus areas

## Deploy

Pushes to `main` build and deploy via GitHub Actions (Pages).

In the repo settings, set **Pages → Source** to **GitHub Actions**.
