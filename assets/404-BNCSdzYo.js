import { _ as require_jsx_runtime, g as renderRecipe, h as Nav } from "./components-v4bDkEHC.js";
//#region src/404.tsx
var import_jsx_runtime = require_jsx_runtime();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {
			recipeGallery: true,
			showBreadcrumbs: false
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Page not found" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "center",
			children: "That page doesn't exist. It may have been renamed, or the link that brought you here may be out of date."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "recipes-list",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					children: "SweetAlert2 documentation"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#examples",
					children: "Examples"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/#configuration",
					children: "Configuration Params"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/recipe-gallery/",
					children: "Recipe Gallery"
				}) })
			]
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}));
//#endregion
