import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-C-pAEfES.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/bootstrap-custom-loader.tsx
var import_jsx_runtime = require_jsx_runtime();
var html = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./bootstrap-custom-loader-html-bXWRadKB.js");
	return { default: __vite_default__ };
}, [])).default;
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./bootstrap-custom-loader-styles-D6Ahp2VM.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./bootstrap-custom-loader-src-By2vJ9Dj.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Bootstrap 5 + custom loader" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "center",
			children: [
				"Read",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://github.com/sweetalert2/sweetalert2/issues/374",
					children: "https://github.com/sweetalert2/sweetalert2/issues/374"
				}),
				" ",
				"for more details."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: {
				"bootstrap": "^4.0.0",
				"popper.js": "^1.12.9",
				"jquery": "^3.2.1"
			},
			files: {
				"/App.ts": src,
				"/index.html": html,
				"/styles.css": styles
			},
			previewHeight: 300
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
