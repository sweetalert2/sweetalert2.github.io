import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-DIeI202v.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B3d9dFkG.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./i18n-l10n-src-DiKUhmni.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
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
          i18next: "^24.0.0"
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
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
