import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B_jvpkxL.js";
//#region recipe-gallery/queue-with-progress-steps.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./queue-with-progress-steps-src-D6KqIJTH.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Queue with Progress Steps" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: { "/App.ts": src },
			previewHeight: 300
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
