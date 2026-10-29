# web-builder

A simple visual page builder for React, built on top of [GrapesJS](https://grapesjs.com/). Built with TypeScript, React, and Vite, using [`grapesjs`](https://www.npmjs.com/package/grapesjs) (the open-source core) plus the official [`@grapesjs/react`](https://github.com/GrapesJS/react) wrapper.

## Features

- **Multiple pages** – a sidebar lists the available pages (uses GrapesJS's native Pages module); selecting one loads it straight into the editor/preview. Ships with a "Home" and an "About" page, each pre-populated with the four basic blocks.
- **Edit mode** – GrapesJS's full drag-and-drop editor (blocks panel, style manager, trait/settings panel, layers).
- **Preview mode** – a dedicated, separate view that renders the page's exported HTML/CSS in a sandboxed `<iframe>`, with no editor chrome at all.
- **Page model access** – a "View model" button (available in both modes) shows the entire project (all pages, components, styles) as raw JSON. The whole project auto-saves to `localStorage` so it survives reloads.
- **Blocks** (`src/grapesjs/blocks`):
  - **Text** – editable heading/paragraph text
  - **Link** – text link with href/target/title traits (GrapesJS's native link type)
  - **Image** – image with built-in asset-manager (double-click to replace) and an alt-text trait
  - **Button** – custom component (extends Link) styled as a button, with a primary/secondary style trait

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build locally
- `npm run lint` – run oxlint

## Project structure

```
public/
  grapesjs-base.css        Shared base styles (typography + button variants), loaded
                             both inside the GrapesJS canvas iframe and the Preview iframe
src/
  grapesjs/
    blocks/                 Text, Link, Image, Button block + component type definitions
    blocksPlugin.ts          GrapesJS plugin registering all four blocks
    editorConfig.ts           Shared GrapesJS init options (storage, seed pages, canvas CSS)
    buildPreviewDocument.ts    Builds a standalone HTML document from a page's HTML/CSS
    useEditorPages.ts          Hook exposing the live list of pages + selected page
  components/
    PageSidebar.tsx            Sidebar listing pages and handling selection
    ModelViewer.tsx             Read-only JSON viewer for the underlying project model
    PreviewView.tsx              Dedicated no-chrome preview (renders into a sandboxed iframe)
  App.tsx                       Page selection + Edit/Preview mode switching
```

## Notes

- No backend is used — the whole project (pages, components, styles) is kept in GrapesJS's in-memory model and auto-saved to the browser's `localStorage` under the `web-builder:grapesjs-project` key.
- The GrapesJS editor instance stays mounted for the lifetime of the app; switching to Preview only hides it (rather than unmounting it), since GrapesJS tears down its internal state when its container is removed from the DOM.
- "Reset" clears the saved project from `localStorage` and reloads, restoring the two seed pages.
