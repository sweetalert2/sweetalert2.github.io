import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './index-86d6113f.js';

const css = (await __vitePreload(() => import('./three-buttons-dialog-styles-a31aae59.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./three-buttons-dialog-src-fff3a218.js'),true?[]:void 0)).default;
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
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": src,
          "/style.css": css
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h550",
            "sp-preview": "sp-h350"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeThreeButtonsDialog, {}));
