import { c as client, j as jsxRuntimeExports, N as Nav } from './index-bsjuV0IS.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-CrpNtgRN.js';

const html = (await __vitePreload(() => import('./validation-message-custom-icon-html-bJVIvp61.js'),true?__vite__mapDeps([]):void 0)).default;
const styles = (await __vitePreload(() => import('./validation-message-custom-icon-styles-hUMlAhMF.js'),true?__vite__mapDeps([]):void 0)).default;
const src = (await __vitePreload(() => import('./validation-message-custom-icon-src-uZK75JZs.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Validation Message with a Custom Icon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In this example, we are using the Font Awesome icon instead of the default one." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src,
          "/index.html": { code: html, hidden: true },
          "/styles.css": styles
        },
        editorHeight: 400
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
