import type { ComponentConfig } from "@puckeditor/core";

export type HeroProps = {
  heading: string;
  subheading: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel: string;
  buttonHref: string;
};

export const Hero: ComponentConfig<HeroProps> = {
  label: "Hero",
  fields: {
    heading: {
      type: "text",
    },
    subheading: {
      type: "textarea",
    },
    imageSrc: {
      type: "text",
    },
    imageAlt: {
      type: "text",
    },
    buttonLabel: {
      type: "text",
    },
    buttonHref: {
      type: "text",
    },
  },
  defaultProps: {
    heading: "Build pages visually",
    subheading:
      "Drag and drop blocks to create pages, then preview the result instantly.",
    imageSrc: "https://placehold.co/640x400",
    imageAlt: "",
    buttonLabel: "Get started",
    buttonHref: "#",
  },
  render: ({ heading, subheading, imageSrc, imageAlt, buttonLabel, buttonHref }) => {
    return (
      <section className="block-hero">
        <div className="block-hero__content">
          <h1 className="block-hero__heading">{heading}</h1>
          <p className="block-hero__subheading">{subheading}</p>
          <a className="block-hero__button" href={buttonHref}>
            {buttonLabel}
          </a>
        </div>
        <div className="block-hero__media">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </section>
    );
  },
};
