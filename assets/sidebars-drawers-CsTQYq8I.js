import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-CpuCZEUO.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-DtD2mESK.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/sidebars-drawers.tsx
var import_jsx_runtime = require_jsx_runtime();
var html = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./sidebars-drawers-html-BSw2dJ1Z.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./sidebars-drawers-src-CfHkEyJ7.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Sidebars and Drawers (Left, Right, Top, Bottom)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In this example custom animations are powered by",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://animate.style/",
				target: "_blank",
				rel: "noreferrer noopener",
				className: "nowrap",
				children: "Animate.css"
			}),
			", but it's possible to use any custom animations."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			entry: "/App.tsx",
			files: {
				"/App.tsx": src,
				"/index.html": {
					code: html,
					hidden: true
				}
			},
			editorHeight: 650,
			previewHeight: 400
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
