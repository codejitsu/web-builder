import { useState } from "react";
import grapesjs, { type Editor } from "grapesjs";
import GjsEditor from "@grapesjs/react";
import "grapesjs/dist/css/grapes.min.css";
import { editorOptions, STORAGE_KEY } from "./grapesjs/editorConfig";
import { useEditorPages } from "./grapesjs/useEditorPages";
import { PageSidebar } from "./components/PageSidebar";
import { ModelViewer } from "./components/ModelViewer";
import { PreviewView } from "./components/PreviewView";

type Mode = "edit" | "preview";

function App() {
  const [editor, setEditor] = useState<Editor>();
  const [mode, setMode] = useState<Mode>("edit");
  const [showModel, setShowModel] = useState(false);
  const { pages, selectedPage } = useEditorPages(editor);

  const handleSelectPage = (pageId: string) => {
    editor?.Pages.select(pageId);
  };

  const handleReset = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <div className="app-shell">
      <PageSidebar
        pages={pages}
        selectedPageId={selectedPage?.getId()}
        onSelect={handleSelectPage}
      />

      <div className="app-main">
        <div
          className="top-bar"
          style={{ display: mode === "edit" ? "flex" : "none" }}
        >
          <span className="top-bar__title">
            {selectedPage?.getName() ?? "Web Builder"}
          </span>
          <div className="top-bar__actions">
            <button type="button" onClick={() => setShowModel(true)}>
              View model
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button type="button" onClick={() => setMode("preview")}>
              Preview
            </button>
          </div>
        </div>

        {/* The GrapesJS editor stays mounted at all times: unmounting it
            destroys the underlying (non-React) editor instance, which would
            break Preview/View model afterward. We just hide it in Preview mode. */}
        <div
          className="gjs-editor-container"
          style={{ display: mode === "edit" ? "flex" : "none" }}
        >
          <GjsEditor
            grapesjs={grapesjs}
            options={editorOptions}
            onEditor={setEditor}
            className="gjs-editor-root"
          />
        </div>

        {mode === "preview" && editor && selectedPage && (
          <PreviewView
            editor={editor}
            pageId={selectedPage.getId()}
            onBack={() => setMode("edit")}
            onViewModel={() => setShowModel(true)}
          />
        )}
      </div>

      {showModel && editor && (
        <ModelViewer
          data={editor.getProjectData()}
          onClose={() => setShowModel(false)}
        />
      )}
    </div>
  );
}

export default App;
