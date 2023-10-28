import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';

function RecipeGallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true, showBackToRecipeGalleryLink: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Recipe Gallery" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "A collection of easy-to-digest code examples for specific tasks in about 30 lines of code or less." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "recipes-list", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./queue-with-progress-steps.html", children: "Queue with Progress Steps" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./bootstrap-custom-loader.html", children: "Bootstrap 5 + custom loader" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./sweetalert2-react.html", children: "React example" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./sweetalert2-react-router.html", children: "React Router example" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./sweetalert2-formik.html", children: "Formik example" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./three-buttons-dialog.html", children: "Yes/No/Cancel Dialog" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./draw-attention.html", children: "Draw Attention / Persistent Dialog" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./colored-toasts.html", children: "Colored Toasts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./crop-image.html", children: "Crop User Image with Cropper.js" }) })
    ] })
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeGallery, {}));