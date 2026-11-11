import { _ as require_jsx_runtime, g as renderRecipe, h as Nav } from "./components-BBDMOK5_.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-kMq8RVOK.js";
// recipe-gallery/validation-message-custom-icon.tsx
var import_jsx_runtime = require_jsx_runtime();
var html = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-html-CgtoWD-G.js");
	return { default: __vite_default__ };
}, [])).default;
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-styles-CLcZ6XeU.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./validation-message-custom-icon-src-CcJtIesi.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
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
