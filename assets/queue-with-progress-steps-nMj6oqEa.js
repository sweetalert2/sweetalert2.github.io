import { R as ReactDOM, j as jsxRuntimeExports, N as Nav, K as Kinsta } from './index-DOLmnplw.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B6pg7EzB.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./queue-with-progress-steps-src-CpqmSjxQ.js');return { default: __vite_default__ }},true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Kinsta, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Queue with Progress Steps" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src
        },
        previewHeight: 300
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
