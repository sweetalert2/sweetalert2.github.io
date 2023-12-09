import { c as client, j as jsxRuntimeExports, N as Nav } from './index-4dgXhobZ.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-9ZWZ9OK7.js';

const src = (await __vitePreload(() => import('./i18n-l10n-src-oslob9Qc.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Internationalization (i18n) and localization (l10n)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.i18next.com/", children: "i18next" }),
      " is used, but you can use any i18n library."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          i18next: "latest"
        },
        entry: "/App.ts",
        files: {
          "/App.ts": src
        },
        editorHeight: 600,
        previewHeight: 250
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