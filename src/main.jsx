import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./contexts/AdminContext.jsx";
import { GuestProvider } from "./contexts/GuestContext.jsx";
import App from "./App.jsx";
window.Buffer = Buffer;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <GuestProvider>
          <App />
        </GuestProvider>
      </AdminProvider>
    </BrowserRouter>
  </StrictMode>
);
