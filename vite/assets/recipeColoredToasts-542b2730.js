import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './index-86d6113f.js';

const css = (await __vitePreload(() => import('./colored-toasts-styles-8b3065fe.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./colored-toasts-src-a547328c.js'),true?[]:void 0)).default;
function RecipeColoredToasts() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Colored Toasts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest",
            "bootstrap": "^4.0.0",
            "jquery": "^3.2.1",
            "popper.js": "^1.12.9"
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
            "sp-editor": "sp-h600",
            "sp-preview": "sp-h250"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeColoredToasts, {}));
