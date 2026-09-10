# Tui Spouting Website

A premium, responsive React + Vite website prepared for Tui Spouting.

## Run locally / in GitHub Codespaces

```bash
npm install
npm run dev
```

Then open the forwarded Vite port.

## Build for Netlify

```bash
npm run build
```

Netlify is configured in `netlify.toml` to use `npm run build` and publish `dist`.

## Before going live

1. Replace the phone number `021 000 0000` in `src/main.jsx`.
2. Replace `hello@tuispouting.co.nz` if needed.
3. Replace the placeholder gallery blocks with real project photos.
4. Add your real Facebook and Instagram links.
5. Confirm your service areas.
6. Add your final logo/brand artwork if desired.
7. Connect `tuispouting.co.nz` in Netlify when the domain is purchased.

The quote form uses Netlify Forms, so it can work without a separate backend once deployed to Netlify.

## Project structure

- `src/main.jsx` — website content and components
- `src/styles.css` — complete responsive styling
- `public/` — static files
- `netlify.toml` — Netlify build/deploy settings
- `vite.config.js` — Vite configuration
