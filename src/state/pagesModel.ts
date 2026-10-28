import type { Data } from "@puckeditor/core";
import type { Props } from "../puck/config";

export type PageData = Data<Props>;

export type Page = {
  id: string;
  name: string;
  data: PageData;
};

export const STORAGE_KEY = "web-builder:pages";

const blankPageData: PageData = {
  root: {
    props: {},
  },
  content: [
    {
      type: "Text",
      props: {
        id: "text-1",
        text: "Welcome to your new page",
        tag: "h1",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        id: "text-2",
        text: "Drag blocks from the left panel to start building. Switch to Preview to see the published result.",
        tag: "p",
        align: "left",
      },
    },
    {
      type: "Button",
      props: {
        id: "button-1",
        label: "Get started",
        href: "https://puckeditor.com",
        variant: "primary",
        align: "left",
      },
    },
  ],
  zones: {},
};

const examplePageData: PageData = {
  root: {
    props: {},
  },
  content: [
    {
      type: "Header",
      props: {
        id: "header-1",
        title: "Acme Inc.",
        links: [
          { label: "Home", href: "#" },
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
    },
    {
      type: "Hero",
      props: {
        id: "hero-1",
        heading: "Build beautiful pages, visually",
        subheading:
          "Acme lets your whole team design and ship pages without writing code. Drag, drop, publish.",
        imageSrc: "https://placehold.co/640x400",
        imageAlt: "Product preview",
        buttonLabel: "Get started",
        buttonHref: "#",
      },
    },
    {
      type: "Image",
      props: {
        id: "image-1",
        src: "https://placehold.co/900x500",
        alt: "Screenshot of the product in use",
        width: "100%",
        align: "center",
      },
    },
    {
      type: "Button",
      props: {
        id: "button-2",
        label: "Contact sales",
        href: "#",
        variant: "secondary",
        align: "center",
      },
    },
  ],
  zones: {},
};

export const defaultPages: Page[] = [
  {
    id: "blank",
    name: "Blank page",
    data: blankPageData,
  },
  {
    id: "example",
    name: "Example page",
    data: examplePageData,
  },
];

export type PagesState = {
  pages: Page[];
  currentPageId: string;
};

export const defaultPagesState: PagesState = {
  pages: defaultPages,
  currentPageId: defaultPages[0].id,
};
