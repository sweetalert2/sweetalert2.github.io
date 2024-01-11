import { c as client, j as jsxRuntimeExports, N as Nav } from './index-bsjuV0IS.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-CrpNtgRN.js';

const styles = (await __vitePreload(() => import('./blurred-backdrop-styles-u-G3rC1g.js'),true?__vite__mapDeps([]):void 0)).default;
const src = (await __vitePreload(() => import('./blurred-backdrop-src-VnZ0mlDk.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Blurred Backdrop" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "You may wonder why ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '[aria-hidden="true"]' }),
      ". The answer is: SweetAlert2 sets",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '[aria-hidden="true"]' }),
      " on every direct child of the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "body" }),
      " for the accessibility support. Details can be found here:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/pull/1189", children: "https://github.com/sweetalert2/sweetalert2/pull/1189" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "To make things smoother and nicer there's the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "transition" }),
      " to animate ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "filter" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        editorHeight: 300,
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
