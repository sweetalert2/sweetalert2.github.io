import { c as client, j as jsxRuntimeExports, N as Nav } from './index-3e691c95.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-55ea7978.js';
import { C as CreatePortalDocs } from './CreatePortalDocs-0cd4df4e.js';

const src = (await __vitePreload(() => import('./sweetalert2-react-router-src-7a101a13.js'),true?[]:void 0)).default;
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReactRouter, {}));
function RecipeReactRouter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
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
          "react": "latest",
          "react-dom": "latest",
          "react-router-dom": "^6.0.0"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true
          }
        },
        editorHeight: 650,
        previewHeight: 250
      }
    )
  ] });
}
