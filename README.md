# arpanisi.github.io

Personal website for Arpan Mukherjee, positioned as an AI scientist and builder.

The site is a Vite + React application generated from a Figma design and adapted for GitHub Pages deployment.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local preview URL, usually:

```text
http://localhost:5173/
```

## Production Build

Build the static site:

```bash
npm run build
```

The production output is written to `dist/`.

## Deployment

GitHub Pages deployment is handled by:

```text
.github/workflows/deploy-pages.yml
```

On every push to `main`, the workflow:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Builds the site with `npm run build`.
4. Publishes `dist/` to GitHub Pages.

In the repository settings, GitHub Pages should be configured to deploy from GitHub Actions.

## Important Files

- `index.html`: document shell and SEO metadata
- `src/main.tsx`: React entry point
- `src/app/App.tsx`: main site component
- `src/styles/`: global styles and theme files
- `vite.config.ts`: Vite configuration
