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

### Compare-grid component (`components/compare-grid`)

Second reusable grid for side-by-side student comparison. Accepts `@Input() students: CompareStudent[]` and `@Input() skillProfiles: SkillProfile[]` (types from `models/compare.models.ts`).

Internally it maintains:
- `entriesMap: { [profileId]: { [studentId]: SkillProfileEntry } }` — flat lookup built in `buildEntriesMap()`; `getEntry()` returns a safe fallback `{ basicValue: '—', ... }` when a student has no entry for a profile
- `displayProfiles` — sorted copy of `skillProfiles`; sort cycles `none → asc → desc` via `toggleSort()`
- Header and body are **split into separate DOM elements** (`#headerArea` / `#bodyScroll`) to allow body-only vertical scroll. Horizontal scroll is synced via a `scroll` listener that mirrors `bodyScroll.scrollLeft` to `headerArea.scrollLeft`. A `ResizeObserver` syncs the scrollbar gutter width as `padding-right` on the header so columns stay aligned.
- `gridMaxWidth` is computed as `180 + students.length × 3 × 80` px (3 sub-columns per student, 80 px each).
- `changeClass(value)` returns `change-pos` / `change-neg` / `change-neu` CSS classes based on whether `basicValue` starts with `+`, `-`, or neither.
- `setProfileTooltip` sets `el.title` only when the cell is overflowing (`scrollHeight > clientHeight`), avoiding phantom tooltips.

### Notes-popover component (`components/notes-popover`)

Fixed-position popover card anchored to a trigger element. Inputs: `visible: boolean`, `note: NoteData | null`, `triggerEl: HTMLElement | null`. Outputs: `popoverEnter` / `popoverLeave` events for the parent to cancel/restart a hide timer.

Position is recomputed in `ngOnChanges` whenever `visible` becomes `true`. It chooses one of four placements (`bottom-right | bottom-left | top-right | top-left`) by comparing available space and then clamps to the viewport. Constants `POPOVER_W = 240`, `POPOVER_H = 200`, `GAP = 8`, `VIEWPORT_MARGIN = 8` are defined at the top of the component file — update them if the card size changes.

The hover handshake in the parent (compare-grid): `onCellEnter` sets the active note and shows the popover; `onCellLeave` starts a 200 ms hide timer; `onPopoverEnter`/`onPopoverLeave` cancel/restart that same timer so the user can move the cursor into the popover without it closing.

### TypeScript strictness

`tsconfig.json` enables `strict`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, and Angular's `strictTemplates`. Index-signature access (e.g. `marksMap[id]`) must be guarded or the type must explicitly allow index access.