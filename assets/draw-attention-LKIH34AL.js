import { c as client, j as jsxRuntimeExports, N as Nav } from './index-4dgXhobZ.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-YALZoZxe.js';

const src = (await __vitePreload(() => import('./draw-attention-src-YaYOhqvI.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Draw Attention / Persistent Dialog" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example, we are passing the function returning ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
      " value to",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "allowOutsideClick" }),
      ". In that function we can also animate the popup to bring users' attention to it."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "animate.css": "latest"
        },
        entry: "/App.ts",
        files: {
          "/App.ts": src
        },
        editorHeight: 400,
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