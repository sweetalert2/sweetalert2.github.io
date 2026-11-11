import { _ as require_jsx_runtime, g as renderRecipe, h as Nav } from "./components-BBDMOK5_.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-kMq8RVOK.js";
// recipe-gallery/colored-toasts.tsx
var import_jsx_runtime = require_jsx_runtime();
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./colored-toasts-styles-BIdwGEgV.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./colored-toasts-src-CUy3ytGh.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Colored Toasts" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			previewHeight: 250
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
