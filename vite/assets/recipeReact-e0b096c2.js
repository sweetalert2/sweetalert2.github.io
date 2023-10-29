import { c as client, j as jsxRuntimeExports, N as Nav } from './index-9ee08717.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-6259f228.js';

const src = (await __vitePreload(() => import('./sweetalert2-react-src-1ac9c3af.js'),true?[]:void 0)).default;
function RecipeReact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Use our official React integration:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-react-content", children: "https://github.com/sweetalert2/sweetalert2-react-content" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "latest",
          "react-dom": "latest",
          "sweetalert2-react-content": "latest"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src
        },
        editorHeight: 250,
        previewHeight: 400
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReact, {}));
