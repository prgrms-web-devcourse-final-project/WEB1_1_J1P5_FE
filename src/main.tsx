import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { NavermapsProvider } from "react-naver-maps";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavermapsProvider ncpClientId={import.meta.env.VITE_NAVER_MAP_CLIENT_ID}>
      <App />
    </NavermapsProvider>
  </StrictMode>
);
