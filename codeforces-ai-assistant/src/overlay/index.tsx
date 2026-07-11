import React from "react";
import ReactDOM from "react-dom/client";

import Overlay from "./Overlay";
import "./overlay.css";

export function mountOverlay() {
    const root = document.createElement("div");

    root.id = "cf-ai-root";

    document.body.appendChild(root);

    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <Overlay />
        </React.StrictMode>
    );
}