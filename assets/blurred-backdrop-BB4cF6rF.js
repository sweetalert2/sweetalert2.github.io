import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-C-pAEfES.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/blurred-backdrop.tsx
var import_jsx_runtime = require_jsx_runtime();
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./blurred-backdrop-styles-Cq6tj5AL.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./blurred-backdrop-src-Doe2-Oo4.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Blurred Backdrop" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"You may wonder why ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "[aria-hidden=\"true\"]" }),
			". The answer is: SweetAlert2 sets",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "[aria-hidden=\"true\"]" }),
			" on every direct child of the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "body" }),
			" for the accessibility support. Details can be found here:",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/sweetalert2/sweetalert2/pull/1189",
				children: "https://github.com/sweetalert2/sweetalert2/pull/1189"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"To make things smoother and nicer there's the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "transition" }),
			" to animate ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "filter" }),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			editorHeight: 300,
			previewHeight: 300
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
