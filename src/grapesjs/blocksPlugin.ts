import type { Plugin } from "grapesjs";
import { registerTextBlock } from "./blocks/textBlock";
import { registerLinkBlock } from "./blocks/linkBlock";
import { registerImageBlock } from "./blocks/imageBlock";
import { registerButtonBlock } from "./blocks/buttonBlock";

export const blocksPlugin: Plugin = (editor) => {
  registerTextBlock(editor);
  registerLinkBlock(editor);
  registerImageBlock(editor);
  registerButtonBlock(editor);
};
