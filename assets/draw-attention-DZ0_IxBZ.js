import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BSEpUu2X.js";
//#region recipe-gallery/draw-attention.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./draw-attention-src-B7CpdH1h.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Draw Attention / Persistent Dialog" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In this example, we are passing the function returning ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "false" }),
			" value to",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "allowOutsideClick" }),
			". In that function we can also animate the popup to bring users' attention to it."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: { "animate.css": "^4.0.0" },
			entry: "/App.ts",
			files: { "/App.ts": src },
			editorHeight: 400,
			previewHeight: 250
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
