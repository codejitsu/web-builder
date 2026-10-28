import type { ComponentConfig } from "@puckeditor/core";

export type ButtonBlockProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  align: "left" | "center" | "right";
};

export const ButtonBlock: ComponentConfig<ButtonBlockProps> = {
  label: "Button",
  fields: {
    label: {
      type: "text",
    },
    href: {
      type: "text",
    },
    variant: {
      type: "radio",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
      ],
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  },
  defaultProps: {
    label: "Click me",
    href: "",
    variant: "primary",
    align: "left",
  },
  render: ({ label, href, variant, align }) => {
    return (
      <div className="block-button-wrapper" style={{ textAlign: align }}>
        <a
          className={`block-button block-button--${variant}`}
          href={href || undefined}
        >
          {label}
        </a>
      </div>
    );
  },
};
