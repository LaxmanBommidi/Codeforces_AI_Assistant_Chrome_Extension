import ReactDOM from "react-dom/client";
import Overlay from "./Overlay";
import css from "./styles/overlay.css?inline";
import type { Problem } from "../types/problem";

export function mountOverlay( problem : Problem) {
    if (document.getElementById("cf-ai-host")) {
        return;
    }

    const host = document.createElement("div");
    host.id = "cf-ai-host";

    document.body.appendChild(host);

    const shadowRoot = host.attachShadow({
        mode: "open",
    });

    const style = document.createElement("style");
    style.textContent = css;
    shadowRoot.appendChild(style);

    const root = document.createElement("div");
    root.id = "cf-ai-root";

    shadowRoot.appendChild(root);

    ReactDOM.createRoot(root).render(<Overlay problem = {problem} />);
}