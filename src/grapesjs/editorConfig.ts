import type { EditorConfig } from "grapesjs";
import { blocksPlugin } from "./blocksPlugin";

export const STORAGE_KEY = "web-builder:grapesjs-project";

// Shared CSS (base typography + button variants) loaded both in the canvas
// iframe and in the standalone Preview view, so editing and previewing match.
export const CANVAS_BASE_CSS_URL = "/grapesjs-base.css";

const homePageContent = `
  <h1 data-gjs-type="text">Welcome to My Site</h1>
  <p data-gjs-type="text">This is a simple page built with our visual editor. Drag blocks from the panel on the left to customize it, then use Preview to see the published result.</p>
  <img src="https://placehold.co/900x400" alt="Placeholder banner" />
  <a href="https://example.com" target="_blank">Visit our docs</a>
  <a href="#" class="btn btn--primary">Get started</a>
`;

const aboutPageContent = `
  <h1 data-gjs-type="text">About us</h1>
  <p data-gjs-type="text">We build simple tools for building simple pages, no backend required.</p>
  <img src="https://placehold.co/900x400" alt="Team placeholder" />
  <a href="https://example.com/about">Learn more about our mission</a>
  <a href="#" class="btn btn--secondary">Contact us</a>
`;

export const editorOptions: EditorConfig = {
  height: "100%",
  storageManager: {
    type: "local",
    autosave: true,
    stepsBeforeSave: 1,
    options: {
      local: {
        key: STORAGE_KEY,
      },
    },
  },
  pageManager: {
    pages: [
      { id: "home", name: "Home", component: homePageContent },
      { id: "about", name: "About", component: aboutPageContent },
    ],
  },
  canvas: {
    styles: [CANVAS_BASE_CSS_URL],
  },
  plugins: [blocksPlugin],
};
