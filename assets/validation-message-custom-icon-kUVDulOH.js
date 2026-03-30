import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B_jvpkxL.js";
//#region recipe-gallery/validation-message-custom-icon.tsx
var import_jsx_runtime = require_jsx_runtime();
var html = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-html-1xnj1Xvv.js");
	return { default: __vite_default__ };
}, [])).default;
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-styles-CjB2SExM.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-src-DDLfejlk.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Validation Message with a Custom Icon" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In this example, we are using the Font Awesome icon instead of the default one." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: {
				"/App.ts": src,
				"/index.html": {
					code: html,
					hidden: true
				},
				"/styles.css": styles
			},
			editorHeight: 400
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
