import type { ComponentConfig } from "@puckeditor/core";

export type HeaderLink = {
  label: string;
  href: string;
};

export type HeaderProps = {
  title: string;
  links: HeaderLink[];
};

export const Header: ComponentConfig<HeaderProps> = {
  label: "Header",
  fields: {
    title: {
      type: "text",
    },
    links: {
      type: "array",
      arrayFields: {
        label: { type: "text" },
        href: { type: "text" },
      },
      defaultItemProps: {
        label: "Link",
        href: "#",
      },
      getItemSummary: (item) => item.label || "Link",
    },
  },
  defaultProps: {
    title: "Acme Inc.",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  render: ({ title, links }) => {
    return (
      <header className="block-header">
        <span className="block-header__title">{title}</span>
        <nav className="block-header__nav">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="block-header__link">
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    );
  },
};
