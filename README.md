# DCC Unstoppable Turn Tracker

A mobile-first, offline turn tracker for **Dungeon Crawler Carl: Unstoppable**.

Live app: <https://fishofmuu.github.io/dcc-unstoppable-turn-tracker/>

## What it does

- Walks through the five phases in order: Upkeep, Draft, Main, Threat, Cleanup.
- Supports solo and two-player co-op, including the co-op draft cross-pick.
- Shows a display-only Danger Level in the upper corner.
- Adds a cleanup-only **“Did the Danger Level increase?”** check. Answering **Yes** raises the level by 1; **No** leaves it unchanged. The End Turn button waits for an answer.
- Opens a five-step Level Up cutaway from the Main phase and the Cleanup refill step, then returns to the exact step you left.
- Saves your crawl in `localStorage`, so closing the app or reloading does not lose your place.
- Installs as a PWA and works offline after the first load.

The tracker is a rules aid, not a full rules engine. It does not track health, gold, mana, cards, or the physical danger track.

## Local development

```bash
npm install
npm run dev
```

The app is served with the GitHub Pages base path, so open:

```text
http://localhost:5173/dcc-unstoppable-turn-tracker/
```

## Tests and production build

```bash
npm test
npm run build
npm run preview
```

The production preview is at:

```text
http://localhost:4173/dcc-unstoppable-turn-tracker/
```

## Deployment

The repository deploys through GitHub Actions to GitHub Pages. On every push to `main`, the workflow:

1. Installs dependencies.
2. Runs the tests.
3. Builds the Vite app.
4. Publishes `dist` to GitHub Pages.

The Pages source must be set to **GitHub Actions**. The deployed path is `/dcc-unstoppable-turn-tracker/`; if you rename the repository, update `BASE` in `vite.config.ts`.

## Android install

1. Open the live app in Chrome on Android.
2. Open the three-dot menu.
3. Choose **Install app** (or **Add to Home screen**).
4. Launch it from the home screen.

After the first load, the service worker caches the app so it runs offline. All state stays on the device.

## Rules content

All rule text lives in **`src/content/rules.md`**. It is the only source the app reads rule copy from.

- Each section starts with an ID comment such as `<!-- id: solo/upkeep-resources -->` and a `##` heading.
- Keep the ID comment; the step order and flags are still defined in code.
- Co-op reuses the solo sections for Upkeep, Main, Threat, and Cleanup. Only `coop/draft-reveal` is co-op-specific; the sleeve/add step is shared.
- Markdown supports paragraphs, bullet/numbered lists, blockquotes, bold, italic, links, and inline icon tokens.
- Built-in icon tokens: `:mana:`, `:action:`, `:card:`, `:sword:`, `:threat:`, `:broom:`, `:levelup:`, `:danger:`.
- Put custom icons in `src/assets/game-icons/` using the token as the filename. A custom `mana.svg`, `mana.png`, or `mana.webp` replaces the built-in `:mana:` icon.
- The current copy uses `:attack:`, `:defense:`, and `:eliminate:`; add `attack.svg`, `defense.svg`, and `eliminate.svg` to the custom icon folder.
- Missing sections show a clear placeholder and fail the content test.

## Assets

- Header logo: `src/assets/Logo.webp`
- Player-count icons: `src/assets/icons/1p.svg` and `src/assets/icons/2p.svg`
- Built-in rule icon fallbacks: `src/components/Icons.tsx`
- Custom rule icons: `src/assets/game-icons/`
- PWA and favicon placeholders: `public/favicon.svg`, `public/icons/`

The placeholder app icons are intentional and can be replaced without changing the app logic. Replace the PNGs with square icons at the same sizes, or update the source SVGs.

## Disclaimer

This is an unofficial fan-made companion. It is not affiliated with Renegade Game Studios, Matt Dinniman, or the official game. Game names, logos, and art belong to their respective owners.
