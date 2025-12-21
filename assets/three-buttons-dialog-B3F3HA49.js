import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-B0cNfZFj.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-BhQ8BUPC.js';
import { P as Prtnr } from './Prtnr-HPe-dQE8.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./three-buttons-dialog-styles-peX_1O_j.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./three-buttons-dialog-src-BA2--ZoP.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Yes/No/Cancel Dialog" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "You can reorder buttons by using the CSS property ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "order" }),
      ". The gap between buttons can be achieved with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "margin-right: auto" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        editorHeight: 550
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
