# Ryan Beacham — Portfolio

React + Vite portfolio with three sections: Software, Songwriting, and Game Development.

## Stack

- React 19 + Vite
- React Router (`/`, `/software`, `/songwriting`, `/game-development`)
- Framer Motion for entrance/hover animation
- Canvas-based animated node-graph background (`src/components/FieldBackground.jsx`), no external viz library

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/pages/Landing.jsx` — the three-portal choice screen
- `src/pages/Software.jsx` + `src/data/projects.js` + `src/data/experience.js` — populated with real resume content (experience, projects, skills, education, activities)
- `src/pages/Songwriting.jsx`, `src/pages/GameDevelopment.jsx` — routed but intentionally unstyled placeholders; each will get its own visual identity later
- `src/components/FieldBackground.jsx` — reusable animated background, tinted per section via a `color` prop

## Known TODOs

- `src/data/projects.js` — add repo/demo links per project once available (`links: {}` is currently empty for all three)
- Songwriting and Game Development pages are stubs by design — waiting on direction for each section's own style
