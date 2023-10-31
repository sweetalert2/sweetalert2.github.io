import { c as client, j as jsxRuntimeExports, N as Nav } from './index-3e691c95.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-55ea7978.js';

const styles = (await __vitePreload(() => import('./three-buttons-dialog-styles-a31aae59.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./three-buttons-dialog-src-eff82b5d.js'),true?[]:void 0)).default;
function RecipeThreeButtonsDialog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
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
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeThreeButtonsDialog, {}));
