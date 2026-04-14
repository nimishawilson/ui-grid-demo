# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/ui-grid-demo
npm test           # Karma/Jasmine unit tests (watch mode)
npx ng build --configuration development   # dev build (source maps, no optimisation)
npx ng generate component components/<name> --standalone  # new standalone component
npx ng generate component pages/<name> --standalone       # new route page
```

## Architecture

Angular 17 standalone-component app with lazy-loaded routes. There is no NgModule — every component declares its own `imports` array.

### Folder conventions

```
src/app/
  models/          # TypeScript interfaces only (no classes, no logic)
  data/            # Static dummy data files; replace with services when real APIs exist
  components/      # Reusable presentational components (receive data via @Input)
  pages/           # Route-level components; own the data and pass it down to components
```

### Routing

Routes are defined in `app.routes.ts` and use `loadComponent` (lazy) for every page. `app.component.html` contains only `<router-outlet>`. New pages go in `pages/`, get a lazy route added to `app.routes.ts`, and a redirect from `''` should be kept pointing to the primary page.

### Detailed grid component (`components/detailed-grid`)

The core reusable grid. Accepts `@Input() students: Student[]` and `@Input() categories: Category[]` (types from `models/grid.models.ts`).

Internally it maintains:
- `marksMap: { [subjectId]: { [studentId]: SubjectMark } }` — a flat lookup initialised from the input data in `ngOnChanges`/`ngOnInit`, bound directly to `[(ngModel)]` on inputs
- `displayCategories` — a sorted copy of the input categories rebuilt whenever `sortDirection` changes; subject order within each category changes but categories themselves never reorder
- `sortDirection: 'none' | 'asc' | 'desc'` — cycled by `toggleSort()`

The table uses `table-layout: fixed` with `<colgroup>` to set the category column (36 px), subject column (140 px), and equal-width mark sub-columns. Sticky header rows are achieved by `position: sticky` on each `<th>` with hardcoded `top` offsets defined as SCSS variables (`$row1-h`, `$row2-h`, etc.) at the top of the component stylesheet — update those variables if header row heights change.

The category label cell uses `writing-mode: vertical-rl; transform: rotate(180deg)` for the 90° anti-clockwise text and a `rowspan` equal to the number of subjects in that category. The last subject row of each category gets class `category-last-row` which applies a thicker bottom border.

### TypeScript strictness

`tsconfig.json` enables `strict`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, and Angular's `strictTemplates`. Index-signature access (e.g. `marksMap[id]`) must be guarded or the type must explicitly allow index access.