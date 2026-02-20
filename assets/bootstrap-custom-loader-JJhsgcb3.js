import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-DVWSIJEH.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-BY9r4MHR.js';
import { P as Prtnr } from './Prtnr-Do0soRzO.js';

const html = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./bootstrap-custom-loader-html-C1vwXOhu.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./bootstrap-custom-loader-styles-C4x6hTUU.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./bootstrap-custom-loader-src-DwxypF3-.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Bootstrap 5 + custom loader" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "Read",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/issues/374", children: "https://github.com/sweetalert2/sweetalert2/issues/374" }),
      " ",
      "for more details."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "bootstrap": "^4.0.0",
          "popper.js": "^1.12.9"
        },
        files: {
          "/App.ts": src,
          "/index.html": html,
          "/styles.css": styles
        },
        previewHeight: 300
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
