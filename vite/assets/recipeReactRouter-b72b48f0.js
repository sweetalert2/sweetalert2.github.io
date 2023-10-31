import { c as client, j as jsxRuntimeExports, N as Nav } from './index-3e691c95.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-55ea7978.js';

const src = (await __vitePreload(() => import('./sweetalert2-react-router-src-d818823f.js'),true?[]:void 0)).default;
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReactRouter, {}));
function RecipeReactRouter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React Router example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Use",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev/reference/react-dom/createPortal", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal" }) }),
      " ",
      "to use the same shared React tree in your app and in SweetAlert2."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal" }),
      " accepts two arguments: a React component that you'd like to render and a target DOM element. Use ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getTitle()" }),
      ", ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getHtmlContainer()" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getFooter()" }),
      " as the target element:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Title />, Swal.getTitle())" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Content />, Swal.getHtmlContainer())" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Footer />, Swal.getFooter())" })
    ] }),
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
