import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-DoPuDiwk.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-D5KPnIv2.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./blurred-backdrop-styles-C64CZ6tG.js');return { default: __vite_default__ }},true?[]:undefined)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./blurred-backdrop-src-DGri78JS.js');return { default: __vite_default__ }},true?[]:undefined)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Blurred Backdrop" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "You may wonder why ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '[aria-hidden="true"]' }),
      ". The answer is: SweetAlert2 sets",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '[aria-hidden="true"]' }),
      " on every direct child of the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "body" }),
      " for the accessibility support. Details can be found here:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/pull/1189", children: "https://github.com/sweetalert2/sweetalert2/pull/1189" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "To make things smoother and nicer there's the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "transition" }),
      " to animate ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "filter" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        editorHeight: 300,
        previewHeight: 300
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
