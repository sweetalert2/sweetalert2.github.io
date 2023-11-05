import { c as client, j as jsxRuntimeExports, N as Nav } from './index-3e691c95.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-55ea7978.js';

const src = (await __vitePreload(() => import('./i18n-l10n-src-8d013ed2.js'),true?[]:void 0)).default;
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
