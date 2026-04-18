# PopX (EduVista)

Static UI for a four-screen **PopX** flow. Layout, type, spacing, and color follow the Adobe XD file used for the brief ([prototype](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/)); that file was treated as the source of truth.

**Stack:** Vite 8, React 19, React Router 7, CSS Modules, Inter (Google Fonts).

The app runs as a **375×812** phone frame centered on a neutral desktop canvas—not a full-width site layout.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: serve ./dist locally
```

## Deploy on Vercel

1. Connect this repo to Vercel.
2. Framework: **Vite**. Install: `npm install`. Build: `npm run build`. Output: **`dist`**.
3. `vercel.json` rewrites unknown paths to `index.html` so client-side routes work after refresh.

Routes: `/` (landing), `/login`, `/signup`, `/profile`. Navigation uses the React Router SPA (`Link` / `useNavigate`); there are no full-page reloads for in-app navigation.

## Lint

```bash
npm run lint
```

## Structure

`src/components` — `AppShell`, `MobileFrame`, `FloatingLabelField` · `src/pages` — screens · `src/styles` — tokens and global CSS · `src/data` — signup field list · `public` — favicon, profile image.
