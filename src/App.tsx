import { useState } from "react";
import { Button, Puck, Render } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { config } from "./puck/config";
import { usePagesData } from "./state/usePagesData";
import { ModelViewer } from "./components/ModelViewer";
import { PageSidebar } from "./components/PageSidebar";

type Mode = "edit" | "preview";

function App() {
  const { pages, currentPage, selectPage, setCurrentPageData, resetCurrentPage } =
    usePagesData();
  const [mode, setMode] = useState<Mode>("edit");
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="app-shell">
      <PageSidebar
        pages={pages}
        currentPageId={currentPage.id}
        onSelect={selectPage}
      />

      {mode === "preview" ? (
        <div className="app-preview">
          <div className="preview-bar">
            <span className="preview-bar__title">Preview — {currentPage.name}</span>
            <div className="preview-bar__actions">
              <button type="button" onClick={() => setShowModel(true)}>
                View model
              </button>
              <button type="button" onClick={() => setMode("edit")}>
                Back to editor
              </button>
            </div>
          </div>
          <Render config={config} data={currentPage.data} />
        </div>
      ) : (
        <div className="app-edit">
          <Puck
            key={currentPage.id}
            config={config}
            data={currentPage.data}
            onChange={setCurrentPageData}
            headerTitle={currentPage.name}
            renderHeaderActions={() => (
              <>
                <Button variant="secondary" onClick={() => setShowModel(true)}>
                  View model
                </Button>
                <Button variant="secondary" onClick={resetCurrentPage}>
                  Reset
                </Button>
                <Button variant="primary" onClick={() => setMode("preview")}>
                  Preview
                </Button>
              </>
            )}
          />
        </div>
      )}

      {showModel && (
        <ModelViewer
          data={currentPage.data}
          onClose={() => setShowModel(false)}
        />
      )}
    </div>
  );
}

export default App;
