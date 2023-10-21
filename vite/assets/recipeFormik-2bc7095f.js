import { c as client, j as jsxRuntimeExports, N as Nav } from './index-60c2e8b4.js';
import { _ as __vitePreload, S as Sandpack } from './index-0aac3d58.js';

const src = (await __vitePreload(() => import('./sweetalert2-formik-src-347a1f61.js'),true?[]:void 0)).default;
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReactRouter, {}));
function RecipeReactRouter() {
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
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest",
            "sweetalert2-react-content": "latest",
            "formik": "^2.0.0"
          },
          entry: "/App.tsx"
        },
        files: {
          "/App.tsx": src
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h650",
            "sp-preview": "sp-h250"
          }
        }
      }
    )
  ] });
}
