import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-d91fd17f.js';

const src = (await __vitePreload(() => import('./sweetalert2-react-router-src-85d7593d.js'),true?[]:void 0)).default;
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReactRouter, {}));
function RecipeReactRouter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React Router example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "SweetAlert2 renders its content outside of the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ReactTree" }),
      ", therefore ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Link" }),
      " ",
      "component won't work. Use `useNavigate` hook instead:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "latest",
          "react-dom": "latest",
          "sweetalert2-react-content": "latest",
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
