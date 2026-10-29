import type { Editor } from "grapesjs";

export function registerLinkBlock(editor: Editor) {
  editor.BlockManager.add("link", {
    label: "Link",
    category: "Basic blocks",
    media: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3.9 12a4.1 4.1 0 0 1 4.1-4.1h4v1.8H8a2.3 2.3 0 1 0 0 4.6h4v1.8H8A4.1 4.1 0 0 1 3.9 12zm6.1.9h4v-1.8h-4v1.8zM16 7.9h-4v1.8h4a2.3 2.3 0 1 1 0 4.6h-4v1.8h4a4.1 4.1 0 0 0 0-8.2z"/></svg>`,
    content: `<a href="#">Link text</a>`,
  });
}
