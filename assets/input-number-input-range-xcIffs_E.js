import { c as client, j as jsxRuntimeExports, N as Nav } from './index-5tzMI-Ml.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-eQxYAVSi.js';

const src = (await __vitePreload(() => import('./input-number-input-range-src-etNoqIzb.js'),true?__vite__mapDeps([]):void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "input[number] + input[range]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Using the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "input: 'range'" }),
      " may have the side effect to be difficult to use on small screen / touch devices. On such devices is more difficult to provide a fine grained control on the input. The",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'range'" }),
      " input in Swal2 is designed to have only an output and no input."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Alternatively, a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "range" }),
      " input with a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
      " input can be achived manually using the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
      " property to add a ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
      " input. In the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didOpen()" }),
      " ",
      "function, the two inputs can be linked together using ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "addEventListener" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src
        }
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
