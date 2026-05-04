import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Проверяем, есть ли уже готовый HTML в контейнере (созданный пререндером)
if (container?.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container!).render(app);
}

// регистрация сервис‑воркера для PWA (после загрузки страницы)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .catch((err) => console.error("Service worker registration failed:", err));
  });
}
