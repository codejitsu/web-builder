import type { Editor } from "grapesjs";

export function registerImageBlock(editor: Editor) {
  editor.BlockManager.add("image", {
    label: "Image",
    category: "Basic blocks",
    media: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 5v14H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>`,
    content: `<img src="https://placehold.co/600x400" alt="" />`,
  });
}
