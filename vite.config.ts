import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import { prerenderRoutes } from "./prerender.routes";

/**
 * index.html ships site-wide defaults (description, canonical, Open Graph,
 * Twitter). Each page then adds its own tags through react-helmet (marked
 * data-rh). Left as is, the prerendered page carries both sets and link
 * previews pick the first one, i.e. the generic site image and title.
 * Drop every static tag that the page overrides.
 */
function dedupeHeadTags(html: string): string {
  const end = html.indexOf("</head>");
  if (end === -1) return html;
  let head = html.slice(0, end);
  const rest = html.slice(end);

  const keyOf = (tag: string): string | null => {
    const attr = (name: string) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
    if (tag.startsWith("<meta")) {
      const k = attr("property") || attr("name");
      return k ? `meta:${k}` : null;
    }
    const rel = attr("rel");
    if (rel === "canonical") return "link:canonical";
    if (rel === "alternate" && attr("hreflang")) return "link:alternate";
    return null;
  };

  const tags = head.match(/<(?:meta|link)\b[^>]*>/g) || [];
  const overridden = new Set<string>();
  for (const tag of tags) {
    if (!tag.includes("data-rh=")) continue;
    const key = keyOf(tag);
    if (key) overridden.add(key);
  }
  // A page image replaces the default image together with its size/type/alt.
  if (overridden.has("meta:og:image")) {
    ["secure_url", "width", "height", "type", "alt"].forEach((s) =>
      overridden.add(`meta:og:image:${s}`)
    );
  }
  if (overridden.has("meta:twitter:image")) overridden.add("meta:twitter:image:alt");

  head = head.replace(/[ \t]*<(?:meta|link)\b[^>]*>\n?/g, (match) => {
    if (match.includes("data-rh=")) return match;
    const key = keyOf(match.trim());
    return key && overridden.has(key) ? "" : match;
  });
  return head + rest;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: prerenderRoutes,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          maxConcurrentRoutes: 4,
          renderAfterDocumentEvent: "render-event",
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(renderedRoute) {
          renderedRoute.route = renderedRoute.route.replace(/\/$/, "") || "/";
          renderedRoute.html = dedupeHeadTags(renderedRoute.html);
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
