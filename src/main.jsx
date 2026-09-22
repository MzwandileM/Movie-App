import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Movie-App">
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
