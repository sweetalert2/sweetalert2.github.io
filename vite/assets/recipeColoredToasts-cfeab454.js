import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-d91fd17f.js';

const styles = (await __vitePreload(() => import('./colored-toasts-styles-8b3065fe.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./colored-toasts-src-04773a5f.js'),true?[]:void 0)).default;
function RecipeColoredToasts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Colored Toasts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        previewHeight: 250
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeColoredToasts, {}));
