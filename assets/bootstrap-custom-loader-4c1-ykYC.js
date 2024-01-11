import { c as client, j as jsxRuntimeExports, N as Nav } from './index-bsjuV0IS.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-CrpNtgRN.js';

const html = (await __vitePreload(() => import('./bootstrap-custom-loader-html-w0-6Yqe6.js'),true?__vite__mapDeps([]):void 0)).default;
const styles = (await __vitePreload(() => import('./bootstrap-custom-loader-styles-79HPbvDu.js'),true?__vite__mapDeps([]):void 0)).default;
const src = (await __vitePreload(() => import('./bootstrap-custom-loader-src-LV9LzLZf.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
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
        dependencies: {
          "bootstrap": "^4.0.0",
          "jquery": "^3.2.1",
          "popper.js": "^1.12.9"
        },
        files: {
          "/App.ts": src,
          "/index.html": html,
          "/styles.css": styles
        },
        previewHeight: 300
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
