import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-CIg7I_e8.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BPo9sUtz.js";
//#region recipe-gallery/three-buttons-dialog.tsx
var import_jsx_runtime = require_jsx_runtime();
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./three-buttons-dialog-styles-kmIwo48u.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./three-buttons-dialog-src-DbTjeQr6.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Yes/No/Cancel Dialog" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"You can reorder buttons by using the CSS property ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "order" }),
			". The gap between buttons can be achieved with ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "margin-right: auto" }),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			editorHeight: 550
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
