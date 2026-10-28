import type { ComponentConfig } from "@puckeditor/core";

export type LinkBlockProps = {
  label: string;
  href: string;
  openInNewTab: boolean;
  align: "left" | "center" | "right";
};

export const LinkBlock: ComponentConfig<LinkBlockProps> = {
  label: "Link",
  fields: {
    label: {
      type: "text",
    },
    href: {
      type: "text",
    },
    openInNewTab: {
      type: "radio",
      options: [
        { label: "Same tab", value: false },
        { label: "New tab", value: true },
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
    label: "Learn more",
    href: "https://example.com",
    openInNewTab: false,
    align: "left",
  },
  render: ({ label, href, openInNewTab, align }) => {
    return (
      <div className="block-link-wrapper" style={{ textAlign: align }}>
        <a
          className="block-link"
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
        >
          {label}
        </a>
      </div>
    );
  },
};
