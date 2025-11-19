import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-BvQcVn4a.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-2G4DgKWc.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./input-number-input-range-src-_C1lENta.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
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
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
