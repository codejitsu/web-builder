import type { Editor, Page } from "grapesjs";
import { CANVAS_BASE_CSS_URL } from "./editorConfig";

export function buildPreviewDocument(editor: Editor, page: Page): string {
  const html = editor.getHtml({ component: page.getMainComponent() });
  const css = editor.getCss() ?? "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${page.getName()}</title>
<link rel="stylesheet" href="${CANVAS_BASE_CSS_URL}" />
<style>${css}</style>
</head>
${html}
</html>`;
}
