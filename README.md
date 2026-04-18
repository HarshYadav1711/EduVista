# PopX — Educase India (EduVista)

Adobe XD prototype: [view link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd/).

**Vite + React + React Router.** The desktop view is a neutral canvas (`#e8e8e8`); the UI sits in a **375×812** frame centered in `AppShell`. Screen background is chosen by route (`MobileFrame`: landing white, signup form grey, login/profile white).

## Routes

| Path       | XD screen        |
|-----------|------------------|
| `/`       | Landing          |
| `/login`  | Login            |
| `/signup` | Sign up          |
| `/profile`| Account settings |

## Structure

```
src/
  components/   AppShell, MobileFrame, FloatingLabelField
  data/         routes.js, signupFields.js
  pages/        Landing, Login, Signup, Profile (+ CSS modules)
  styles/       tokens.css, global.css
public/         favicon.svg, avatar.jpg
```

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy

**Vercel:** framework Vite, output `dist`, build `npm run build`. `vercel.json` rewrites SPA routes.
