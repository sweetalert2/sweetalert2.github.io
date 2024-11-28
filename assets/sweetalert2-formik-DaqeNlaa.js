import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-COLPWSRR.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-yWswvYdw.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./sweetalert2-formik-src-CVNR4Kxb.js');return { default: __vite_default__ }},true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + Formik example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Formik is one of the most popular libraries for building forms with React. Here's how you integrate it with SweetAlert2." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "First, get the Formik reference (",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "formikRef" }),
      ") for accessing the form. Then, use",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "formikRef" }),
      " inside of ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }),
      " parameter to validate the form and return its values."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "^18.0.0",
          "react-dom": "^18.0.0",
          "sweetalert2-react-content": "^5.0.0",
          "formik": "^2.0.0"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true
          }
        },
        editorHeight: 650
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
