import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-B3WSj48O.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B5E4Z8dm.js';
import { P as Prtnr } from './Prtnr-DImRzYcr.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./google-maps-src-DcbUPbi2.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Google Maps" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Uses the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "embed-iframe" }),
      " theme and a simple Google Maps embed URL (no API key required)."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "All themes can be found in the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sweetalert2.github.io/#themes", children: "SweetAlert2 themes gallery" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src
        },
        editorHeight: 300,
        previewHeight: 600
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
