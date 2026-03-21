import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-DZEGujI6.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B0ggCQw5.js";
import "./utils-52664384-tXfMgvZN.js";
import { t as CreatePortalDocs } from "./CreatePortalDocs-CGDNR2CZ.js";
//#region recipe-gallery/sweetalert2-react-router.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./sweetalert2-react-router-src-BEO7TQvJ.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "SweetAlert2 + React Router example" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePortalDocs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"When using the same context between your app and SweetAlert2, React Router will be able to render components like ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "<Link />" }),
			" inside of SweetAlert2:"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: {
				"react": "^19.0.0",
				"react-dom": "^19.0.0",
				"react-router-dom": "^7.0.0"
			},
			entry: "/App.tsx",
			files: {
				"/App.tsx": src,
				"/index.html": {
					code: `<style>body { font-family: sans-serif; }</style><div class="app-root"></div>`,
					hidden: true
				}
			},
			editorHeight: 650,
			previewHeight: 250
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
