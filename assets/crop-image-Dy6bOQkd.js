import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BSEpUu2X.js";
//#region recipe-gallery/crop-image.tsx
var import_jsx_runtime = require_jsx_runtime();
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./crop-image-styles-Bbpj_4y0.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./crop-image-src-FonGBIUy.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Crop User Image with Cropper.js" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: {
				"cropperjs": "^1.0.0",
				"@github/mini-throttle": "^2.0.0"
			},
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			previewHeight: 650
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
