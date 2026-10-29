import { useState } from "react";

type ModelViewerProps = {
  data: unknown;
  onClose: () => void;
};

export function ModelViewer({ data, onClose }: ModelViewerProps) {
  const [copied, setCopied] = useState(false);
  const json = JSON.stringify(data, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.warn("Failed to copy page model to clipboard.", error);
    }
  };

  return (
    <div className="model-viewer-overlay" onClick={onClose}>
      <div
        className="model-viewer-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="model-viewer-header">
          <h2>Page model</h2>
          <div className="model-viewer-actions">
            <button type="button" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy JSON"}
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <pre className="model-viewer-json">{json}</pre>
      </div>
    </div>
  );
}
