import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Locales from "./locales.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Locales>
      <App />
    </Locales>
  </StrictMode>
);
