import { c as client, j as jsxRuntimeExports, N as Nav } from './index-9ee08717.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-6259f228.js';

const src = (await __vitePreload(() => import('./login-form-src-6f522d54.js'),true?[]:void 0)).default;
function RecipeCropImage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Login Form" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example, we are using the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
      " property to create login and password inputs. Note how we are applying the class ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "swal2-input" }),
      " to both inputs to make them look consistent with the rest of popup."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "We also add a check on the input using the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }),
      " property. In the function defined for this propertty we are checking if either the user name or the password are empty, and if one of them is, we use",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.showValidationMessage()" }),
      " to show an error message on the swal. This will also prevent the swal from resolving."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "We are using the same ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }),
      " function to also construct the return value for the swal."
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
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeCropImage, {}));
