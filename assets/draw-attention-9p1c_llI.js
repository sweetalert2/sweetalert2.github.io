import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-DYZm5St8.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-DfftmSqk.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./draw-attention-src-xJK_7bGr.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Draw Attention / Persistent Dialog" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example, we are passing the function returning ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
      " value to",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "allowOutsideClick" }),
      ". In that function we can also animate the popup to bring users' attention to it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "animate.css": "^4.0.0"
        },
        entry: "/App.ts",
        files: {
          "/App.ts": src
        },
        editorHeight: 400,
        previewHeight: 250
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
