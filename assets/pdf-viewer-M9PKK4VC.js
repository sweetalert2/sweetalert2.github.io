import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-19ZQtRno.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-DAzwvHQl.js';
import { P as Prtnr } from './Prtnr-DeOthSsN.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./pdf-viewer-styles-BJnuIhis.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./pdf-viewer-src-BXh73Cgp.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "PDF Viewer" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Uses ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://mozilla.github.io/pdf.js/", children: "pdf.js" }),
      " to render a PDF inside a SweetAlert2 popup."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "pdfjs-dist": "3.11.174"
        },
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        previewHeight: 600
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
