import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-DoPuDiwk.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-D5KPnIv2.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./colored-toasts-styles-drk8UOIV.js');return { default: __vite_default__ }},true?[]:undefined)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./colored-toasts-src-DmWCeIcg.js');return { default: __vite_default__ }},true?[]:undefined)).default;
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
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
