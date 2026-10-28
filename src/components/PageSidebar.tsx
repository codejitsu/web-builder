import type { Page } from "../state/pagesModel";

type PageSidebarProps = {
  pages: Page[];
  currentPageId: string;
  onSelect: (pageId: string) => void;
};

export function PageSidebar({
  pages,
  currentPageId,
  onSelect,
}: PageSidebarProps) {
  return (
    <nav className="page-sidebar">
      <div className="page-sidebar__title">Pages</div>
      <ul className="page-sidebar__list">
        {pages.map((page) => (
          <li key={page.id}>
            <button
              type="button"
              className={
                page.id === currentPageId
                  ? "page-sidebar__item page-sidebar__item--active"
                  : "page-sidebar__item"
              }
              onClick={() => onSelect(page.id)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
