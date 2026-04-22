// ABOUTME: Application entry point — mounts the React app and imports global styles.
// ABOUTME: Renders into the #root div defined in index.html.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
