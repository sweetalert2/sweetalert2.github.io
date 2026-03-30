import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BSEpUu2X.js";
//#region recipe-gallery/custom-icon.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./custom-icon-src-DsLsNdMx.js");
	return { default: __vite_default__ };
}, [])).default;
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./custom-icon-styles-OpAkt-mD.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Custom Icon" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Icon's HTML can be customized by passing an HTML string to the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "iconHtml" }),
			" parameter. In this example, we're using an SVG icon from FontAwesome."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Icon's styling can be customized by passing a CSS class to the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "customClass.icon" }),
			" parameter. In this example, we're using the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "rotate-y" }),
			" class to rotate the icon."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			entry: "/App.ts",
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			editorHeight: 400,
			previewHeight: 300
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
