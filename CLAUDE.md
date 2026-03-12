# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200/
npm run build      # Production build to dist/
npm test           # Run unit tests via Karma/Jasmine
npm run watch      # Build in watch mode (development)
ng generate component <name>  # Scaffold a new component
```

## Architecture

Angular 21 standalone components portfolio site (no NgModules). All components use `standalone: true`.

**Two routes:**
- `/` → `HomePageComponent` — assembles all sections in sequence
- `/contact_me` → `EmailFormComponent` — contact form page

**Component composition in `HomePageComponent`:**
`NavbarComponent` → `HeroComponent` → `HeroSkillsComponent` → `SkillsComponent` → `ProjectSectionComponent` → `ContactsComponent` → `FooterComponent`

**Data flow:**
- `ProjectSectionComponent` holds the `projects: Project[]` array (hardcoded in constructor) and renders each via `ProjectsComponent` with `@Input() project: Project`
- `SkillsComponent` holds `webDevTools` and `mobileDevTools` string arrays (hardcoded in constructor)
- The `Project` interface is defined in `src/app/project.ts`

**Styling:** Bulma CSS framework + SCSS per component. Global styles in `src/styles.scss`.

**Navbar toggle** uses direct DOM manipulation (`document.getElementById`) to toggle Bulma's `is-active` class — the method is named `test()` in `NavbarComponent`.

**Deployment:** `src/CNAME` present — deployed to GitHub Pages.
