import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-ByQkOKBL.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B2CfAYfa.js';
import { P as Prtnr } from './Prtnr-BxLnBzYw.js';
import { C as CreatePortalDocs } from './CreatePortalDocs-CUf9Q_iO.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./sweetalert2-react-router-src-qPI1DKtd.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React Router example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CreatePortalDocs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "When using the same context between your app and SweetAlert2, React Router will be able to render components like ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<Link />" }),
      " inside of SweetAlert2:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "^19.0.0",
          "react-dom": "^19.0.0",
          "react-router-dom": "^7.0.0"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div className="app-root"></div>`,
            hidden: true
          }
        },
        editorHeight: 650,
        previewHeight: 250
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
