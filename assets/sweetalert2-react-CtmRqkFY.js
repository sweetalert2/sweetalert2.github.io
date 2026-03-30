import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BSEpUu2X.js";
//#region recipe-gallery/sweetalert2-react.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./sweetalert2-react-src-BGJXGGjR.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "SweetAlert2 + React example" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Here's our official React integration:",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/sweetalert2/sweetalert2-react-content",
				children: "https://github.com/sweetalert2/sweetalert2-react-content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"It allow you to pass JSX/TSX as ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.fire" }),
			" params."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: {
				"react": "^19.0.0",
				"react-dom": "^19.0.0",
				"sweetalert2-react-content": "^5.0.0"
			},
			entry: "/App.tsx",
			files: {
				"/App.tsx": src,
				"/index.html": {
					code: `<style>body { font-family: sans-serif; }</style><div class="app-root"></div>`,
					hidden: true
				}
			},
			editorHeight: 600,
			previewHeight: 400
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
