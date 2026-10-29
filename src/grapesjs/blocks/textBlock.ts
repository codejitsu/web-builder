import type { Editor } from "grapesjs";

export function registerTextBlock(editor: Editor) {
  editor.BlockManager.add("text", {
    label: "Text",
    category: "Basic blocks",
    media: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 4v3h5.5v12h3V7H19V4H5z"/></svg>`,
    content: {
      type: "text",
      tagName: "p",
      content: "Insert your text here",
    },
  });
}
