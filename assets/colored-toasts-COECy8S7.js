import { c as client, j as jsxRuntimeExports, N as Nav } from './index-DcWLTZFK.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B7KhTBjW.js';

const styles = (await __vitePreload(() => import('./colored-toasts-styles-drk8UOIV.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./colored-toasts-src-DmWCeIcg.js'),true?[]:void 0)).default;
function Recipe() {
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
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
