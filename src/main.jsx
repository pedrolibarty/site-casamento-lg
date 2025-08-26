import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Buffer } from "buffer";
import { AdminProvider } from "./contexts/AdminContext.jsx";
window.Buffer = Buffer;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </StrictMode>
);
