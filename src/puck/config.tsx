import type { Config } from "@puckeditor/core";
import { Text, type TextProps } from "./components/Text";
import { LinkBlock, type LinkBlockProps } from "./components/LinkBlock";
import { ImageBlock, type ImageBlockProps } from "./components/ImageBlock";
import { ButtonBlock, type ButtonBlockProps } from "./components/ButtonBlock";
import { Header, type HeaderProps } from "./components/Header";
import { Hero, type HeroProps } from "./components/Hero";

export type Props = {
  Text: TextProps;
  Link: LinkBlockProps;
  Image: ImageBlockProps;
  Button: ButtonBlockProps;
  Header: HeaderProps;
  Hero: HeroProps;
};

export const config: Config<Props> = {
  categories: {
    layout: {
      title: "Layout",
      components: ["Header", "Hero"],
    },
    basic: {
      title: "Basic blocks",
      components: ["Text", "Link", "Image", "Button"],
    },
  },
  components: {
    Text,
    Link: LinkBlock,
    Image: ImageBlock,
    Button: ButtonBlock,
    Header,
    Hero,
  },
  root: {
    render: ({ children }) => {
      return <div className="page-root">{children}</div>;
    },
  },
};
