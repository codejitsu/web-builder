import type { ComponentConfig } from "@puckeditor/core";

export type TextProps = {
  text: string;
  tag: "h1" | "h2" | "h3" | "p";
  align: "left" | "center" | "right";
};

export const Text: ComponentConfig<TextProps> = {
  label: "Text",
  fields: {
    text: {
      type: "textarea",
    },
    tag: {
      type: "select",
      options: [
        { label: "Heading 1", value: "h1" },
        { label: "Heading 2", value: "h2" },
        { label: "Heading 3", value: "h3" },
        { label: "Paragraph", value: "p" },
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
    text: "Add your text here",
    tag: "p",
    align: "left",
  },
  render: ({ text, tag: Tag, align }) => {
    return (
      <Tag className="block-text" style={{ textAlign: align }}>
        {text}
      </Tag>
    );
  },
};
