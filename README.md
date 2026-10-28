# web-builder

A simple visual page builder for React, inspired by [Puck](https://puckeditor.com/). Built with TypeScript, React, and Vite, using [`@puckeditor/core`](https://www.npmjs.com/package/@puckeditor/core) as the drag-and-drop editing engine.

## Features

- **Multiple pages** – a sidebar lists the available pages; selecting one loads it into the editor/preview. Ships with a blank starter page and a pre-built example page.
- **Edit mode** – drag-and-drop canvas with a component list and a field editor for each block.
- **Preview mode** – renders the page exactly as a visitor would see it, with no editing chrome.
- **Page model access** – a "View model" button (available in both modes) shows the current page as raw JSON, and all pages are persisted to `localStorage` so they survive reloads.
- **Blocks**:
  - **Text** – heading/paragraph with alignment
  - **Link** – text link with optional "open in new tab"
  - **Image** – image with adjustable width/alignment
  - **Button** – call-to-action link styled as a button, with primary/secondary variants
  - **Header** – site title with a row of nav links
  - **Hero** – heading, supporting text, image, and a call-to-action button

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
src/
  puck/
    config.tsx          Puck Config wiring up the block components
    components/         Text, Link, Image, Button, Header, Hero block definitions
  state/
    pagesModel.ts        Page/pages types + default pages (blank + example)
    usePagesData.ts       Hook that loads/saves all pages to localStorage
  components/
    PageSidebar.tsx       Sidebar listing pages and handling selection
    ModelViewer.tsx       Read-only JSON viewer for the underlying page model
  App.tsx                 Page selection + Edit/Preview mode switching
```

## Notes

No backend is used — pages are kept in memory and persisted to the browser's `localStorage` under the `web-builder:pages` key.
