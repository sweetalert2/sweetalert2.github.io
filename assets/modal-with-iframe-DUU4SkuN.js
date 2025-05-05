import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-B9p4YnO0.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-OA6-TBXx.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./modal-with-iframe-src-BxYtQbbm.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
      "Modal with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "iframe" }),
      " inside"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The best way to show iframes is to use the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "embed-iframe" }),
      " theme."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Import the theme and set it in the swal options:" }),
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
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
