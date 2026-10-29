import { useEffect, useState } from "react";
import type { Editor, Page } from "grapesjs";

export function useEditorPages(editor: Editor | undefined) {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page>();

  useEffect(() => {
    if (!editor) return;

    const sync = () => {
      setPages(editor.Pages.getAll());
      setSelectedPage(editor.Pages.getSelected());
    };

    sync();
    editor.on("page", sync);
    return () => {
      editor.off("page", sync);
    };
  }, [editor]);

  return { pages, selectedPage };
}
