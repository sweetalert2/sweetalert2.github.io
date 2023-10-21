import { c as client, j as jsxRuntimeExports, N as Nav } from './index-60c2e8b4.js';
import { _ as __vitePreload, S as Sandpack } from './index-0aac3d58.js';

const html = (await __vitePreload(() => import('./bootstrap-custom-loader-html-d13f0cdb.js'),true?[]:void 0)).default;
const css = (await __vitePreload(() => import('./bootstrap-custom-loader-styles-0c03fb19.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./bootstrap-custom-loader-src-f8ac396d.js'),true?[]:void 0)).default;
function BootstrapCustomLoaderRecipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Bootstrap 5 + custom loader" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "Read",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/issues/374", children: "https://github.com/sweetalert2/sweetalert2/issues/374" }),
      " ",
      "for more details."
    ] }),
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
          "/index.html": html,
          "/style.css": css
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h600",
            "sp-preview": "sp-h300"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(BootstrapCustomLoaderRecipe, {}));
