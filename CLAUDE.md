# styling-project

Udemy React course — Section 6: Styling React Components. Small demo app (login form)
used to practice different ways of styling React components. This is course/lesson
code, not a production app — expect the styling approach to change frequently as the
lesson progresses (plain CSS → inline styles → CSS Modules → styled-components →
Tailwind, etc., depending on what the section covers next).

## Stack
- Vite (`vite.config.js`) + React 19
- Plain CSS currently (`src/index.css`), no CSS-in-JS or utility framework installed yet
- ESLint (`eslint src --ext js,jsx`)
- No test runner configured

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — lint `src`
- `npm run preview` — preview production build

## Structure
- `src/main.jsx` — entry point, imports `src/index.css` globally
- `src/App.jsx` — renders `Header` + `AuthInputs`
- `src/components/Header.jsx` — logo/title header; styled by its own
  co-located `src/components/Header.css`, imported as `./Header.css`
- `src/components/AuthInputs.jsx` — login form (email/password) with basic
  client-side validation (`emailNotValid`, `passwordNotValid`) shown via an
  `invalid` class; still styled via the global `src/index.css`
- `src/index.css` — global styles; remaining component styles (`#auth-inputs`,
  `.controls`, `.button`, etc.) live here until moved out per-component like
  `Header` was

## Conventions
- Function components with `export default function X()`, no arrow-function
  component style
- Styling is intentionally the moving part of this project — when asked to add a
  new styling technique (CSS Modules, styled-components, Tailwind, inline styles),
  add it as the lesson asks rather than "fixing" the existing plain-CSS approach
  unless told to replace it
- Keep components minimal — this is teaching code, not a real product, so avoid
  adding abstractions, error handling, or features beyond what the lesson step
  calls for

## Maintaining this file
Update this file yourself, without being asked, whenever a session changes
something it describes — new styling technique adopted, new dependency
installed, structure/conventions section stops matching the code, etc. Don't
wait for an explicit "update CLAUDE.md" request; treat this as part of finishing
the task.