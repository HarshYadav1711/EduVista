# Account UI (React)

Single-page React app implementing the mobile screens from the supplied **Adobe XD** specification. On-screen layout and visual treatment follow that document.

**Design file:** [Adobe XD prototype](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/)

## Stack

- Vite, React, React Router
- CSS Modules + shared tokens (`src/styles/tokens.css`)

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy

Build output: `dist`. Configure the host (e.g. Vercel) with framework **Vite** and SPA fallback to `index.html` for client routes. This repo includes `vercel.json` for that purpose.
