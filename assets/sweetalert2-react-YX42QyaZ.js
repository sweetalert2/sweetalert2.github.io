import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-BI9HXfaR.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-CU0pu6LM.js';
import { P as Prtnr } from './Prtnr-CMQvqu1A.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./sweetalert2-react-src-BsMWfQY2.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Here's our official React integration:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-react-content", children: "https://github.com/sweetalert2/sweetalert2-react-content" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "It allow you to pass JSX/TSX as ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire" }),
      " params."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "^19.0.0",
          "react-dom": "^19.0.0",
          "sweetalert2-react-content": "^5.0.0"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div className="app-root"></div>`,
            hidden: true
          }
        },
        editorHeight: 600,
        previewHeight: 400
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
