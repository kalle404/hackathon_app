# Hackathon Project Discovery App

Ultra-simple web app for discovering and joining hackathon coding projects.

## Requirements

- **Node.js v24 LTS** (see `.nvmrc` and `engines` in `package.json`)

## Setup

```bash
npm install
```

## Run (local)

```bash
npm run dev
```

App runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Script                 | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start Vite dev server             |
| `npm run build`        | Typecheck and production build    |
| `npm run preview`      | Preview the production build      |
| `npm run lint`         | ESLint (TypeScript + React Hooks) |
| `npm run format`       | Format with Prettier              |
| `npm run format:check` | Check Prettier formatting         |
| `npm run typecheck`    | TypeScript strict typecheck       |

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deploy

Frontend is deployed to **Netlify** (CLI-driven; see later TODO items).

Typical flow once Netlify is configured:

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

Preview deploys and production deploys from `main` will be wired via CI.
