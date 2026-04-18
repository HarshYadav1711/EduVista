# PopX — Educase India (EduVista)

**Vite + React + React Router** scaffold for the Adobe XD prototype ([design source](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/)). The desktop view is a neutral canvas; the UI lives in a **375×812** phone frame centered horizontally and vertically.

## Routes (XD screens)

| Route       | Screen   |
|------------|----------|
| `/`        | Landing  |
| `/login`   | Login    |
| `/signup`  | Signup   |
| `/profile` | Profile  |

## Project layout

```
src/
  assets/          images, fonts (static imports)
  components/      AppShell, MobileFrame
  data/            route/screen metadata (routes.js)
  pages/           route components
  styles/          tokens.css, global.css, page.module.css
  App.jsx          router
public/            favicon, static files
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy (Vercel)

Framework: **Vite**. Output: **`dist`**. Build: **`npm run build`**. `vercel.json` provides SPA fallback for client routes.
