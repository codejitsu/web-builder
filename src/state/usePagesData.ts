import { useCallback, useMemo, useState } from "react";
import {
  defaultPages,
  defaultPagesState,
  STORAGE_KEY,
  type Page,
  type PageData,
  type PagesState,
} from "./pagesModel";

function loadInitialState(): PagesState {
  if (typeof window === "undefined") {
    return defaultPagesState;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as PagesState;
      if (parsed.pages?.length && parsed.currentPageId) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Failed to load saved pages, using defaults.", error);
  }

  return defaultPagesState;
}

export function usePagesData() {
  const [state, setStateRaw] = useState<PagesState>(loadInitialState);

  const setState = useCallback((next: PagesState) => {
    setStateRaw(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn("Failed to persist pages.", error);
    }
  }, []);

  const selectPage = useCallback(
    (pageId: string) => {
      setState({ ...state, currentPageId: pageId });
    },
    [state, setState],
  );

  const setCurrentPageData = useCallback(
    (data: PageData) => {
      setState({
        ...state,
        pages: state.pages.map((page) =>
          page.id === state.currentPageId ? { ...page, data } : page,
        ),
      });
    },
    [state, setState],
  );

  const resetCurrentPage = useCallback(() => {
    const seed = defaultPages.find((page) => page.id === state.currentPageId);
    if (!seed) return;
    setCurrentPageData(seed.data);
  }, [state.currentPageId, setCurrentPageData]);

  const currentPage = useMemo<Page>(
    () =>
      state.pages.find((page) => page.id === state.currentPageId) ??
      state.pages[0],
    [state],
  );

  return {
    pages: state.pages,
    currentPage,
    selectPage,
    setCurrentPageData,
    resetCurrentPage,
  };
}
