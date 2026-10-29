import type { Editor } from "grapesjs";

export const BUTTON_TYPE = "button";

export function registerButtonBlock(editor: Editor) {
  editor.DomComponents.addType(BUTTON_TYPE, {
    isComponent: (el) => el.tagName === "A" && el.classList.contains("btn"),
    extend: "link",
    model: {
      defaults: {
        variant: "primary",
        traits: [
          { type: "text", name: "href", label: "Link" },
          {
            type: "checkbox",
            name: "target",
            label: "Open in new tab",
            valueTrue: "_blank",
            valueFalse: "",
          },
          {
            type: "select",
            name: "variant",
            label: "Style",
            changeProp: true,
            options: [
              { id: "primary", label: "Primary" },
              { id: "secondary", label: "Secondary" },
            ],
          },
        ],
      },
      init() {
        this.on("change:variant", this.handleVariantChange);
      },
      handleVariantChange() {
        this.removeClass(["btn--primary", "btn--secondary"]);
        this.addClass(`btn--${this.get("variant")}`);
      },
    },
  });

  editor.BlockManager.add(BUTTON_TYPE, {
    label: "Button",
    category: "Basic blocks",
    media: `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><rect x="3" y="9" width="18" height="6" rx="2"/></svg>`,
    content: `<a href="#" class="btn btn--primary">Click me</a>`,
  });
}
