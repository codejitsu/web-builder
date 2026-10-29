import { useMemo } from "react";
import type { Editor } from "grapesjs";
import { buildPreviewDocument } from "../grapesjs/buildPreviewDocument";

type PreviewViewProps = {
  editor: Editor;
  pageId: string;
  onBack: () => void;
  onViewModel: () => void;
};

export function PreviewView({
  editor,
  pageId,
  onBack,
  onViewModel,
}: PreviewViewProps) {
  const page = editor.Pages.get(pageId);

  const srcDoc = useMemo(() => {
    if (!page) return "";
    return buildPreviewDocument(editor, page);
  }, [editor, page]);

  return (
    <div className="app-preview">
      <div className="preview-bar">
        <span className="preview-bar__title">
          Preview — {page?.getName() ?? pageId}
        </span>
        <div className="preview-bar__actions">
          <button type="button" onClick={onViewModel}>
            View model
          </button>
          <button type="button" onClick={onBack}>
            Back to editor
          </button>
        </div>
      </div>
      <iframe
        className="preview-frame"
        title="Page preview"
        srcDoc={srcDoc}
        sandbox="allow-same-origin"
      />
    </div>
  );
}
