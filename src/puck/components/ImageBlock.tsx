import type { ComponentConfig } from "@puckeditor/core";

export type ImageBlockProps = {
  src: string;
  alt: string;
  width: "25%" | "50%" | "75%" | "100%";
  align: "left" | "center" | "right";
};

export const ImageBlock: ComponentConfig<ImageBlockProps> = {
  label: "Image",
  fields: {
    src: {
      type: "text",
    },
    alt: {
      type: "text",
    },
    width: {
      type: "select",
      options: [
        { label: "25%", value: "25%" },
        { label: "50%", value: "50%" },
        { label: "75%", value: "75%" },
        { label: "100%", value: "100%" },
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
    src: "https://placehold.co/600x400",
    alt: "",
    width: "100%",
    align: "left",
  },
  render: ({ src, alt, width, align }) => {
    return (
      <div className="block-image-wrapper" style={{ textAlign: align }}>
        <img className="block-image" src={src} alt={alt} style={{ width }} />
      </div>
    );
  },
};
