import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Пререндеренный HTML нужен поисковикам и превью ссылок. В браузере приложение
// рендерится заново: пререндер всегда английский, а посетитель может открыть
// страницу на другом языке (?lng=de), и гидратация в таком случае ломалась.
createRoot(container!).render(app);

// Signal the prerenderer (puppeteer) that the app is ready for snapshot.
// Wait for two animation frames so React has committed the initial render.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.dispatchEvent(new Event("render-event"));
  });
});

// регистрация сервис‑воркера для PWA (после загрузки страницы)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .catch((err) => console.error("Service worker registration failed:", err));
  });
}
