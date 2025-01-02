import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-BTxkbuBw.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-Dc-o8GCw.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./modal-with-iframe-styles-Dwzdmdvb.js');return { default: __vite_default__ }},true?[]:void 0)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./modal-with-iframe-src-xxWgGnWW.js');return { default: __vite_default__ }},true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { children: [
      "Modal with ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "iframe" }),
      " inside"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "The important detail here is to keep the aspect ratio of the iframe. This is done by using CSS property ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aspect-ratio: 16 / 9;" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The rest of CSS styles are to remove the default paddings and make iframe take all the space available." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        editorHeight: 350,
        previewHeight: 600
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
