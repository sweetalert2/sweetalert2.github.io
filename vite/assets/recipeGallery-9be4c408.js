import { c as client, j as jsxRuntimeExports, N as Nav } from "./index-1acc6323.js";
function RecipeGallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true, showBackToRecipeGalleryLink: false }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Recipe Gallery" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "A collection of easy-to-digest code examples for specific tasks in about 30 lines of code or less." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "./sweetalert2-react.html", children: "React example" })
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeGallery, {}));
