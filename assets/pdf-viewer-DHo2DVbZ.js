import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-C-pAEfES.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/pdf-viewer.tsx
var import_jsx_runtime = require_jsx_runtime();
var styles = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./pdf-viewer-styles-Du_RBGxL.js");
	return { default: __vite_default__ };
}, [])).default;
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./pdf-viewer-src-BxQMVQLQ.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "PDF Viewer" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Uses ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://mozilla.github.io/pdf.js/",
				children: "pdf.js"
			}),
			" to render a PDF inside a SweetAlert2 popup."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: { "pdfjs-dist": "3.11.174" },
			files: {
				"/App.ts": src,
				"/styles.css": styles
			},
			previewHeight: 600
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
