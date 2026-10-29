import type { Page } from "grapesjs";

type PageSidebarProps = {
  pages: Page[];
  selectedPageId: string | undefined;
  onSelect: (pageId: string) => void;
};

export function PageSidebar({
  pages,
  selectedPageId,
  onSelect,
}: PageSidebarProps) {
  return (
    <nav className="page-sidebar">
      <div className="page-sidebar__title">Pages</div>
      <ul className="page-sidebar__list">
        {pages.map((page) => {
          const id = page.getId();
          return (
            <li key={id}>
              <button
                type="button"
                className={
                  id === selectedPageId
                    ? "page-sidebar__item page-sidebar__item--active"
                    : "page-sidebar__item"
                }
                onClick={() => onSelect(id)}
              >
                {page.getName()}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
