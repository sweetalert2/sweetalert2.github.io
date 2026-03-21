import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-DZEGujI6.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B0ggCQw5.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/google-maps.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./google-maps-src-CxJWwhaS.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Google Maps" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Uses the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "embed-iframe" }),
			" theme and a simple Google Maps embed URL (no API key required)."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"All themes can be found in the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://sweetalert2.github.io/#themes",
				children: "SweetAlert2 themes gallery"
			}),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: { "/App.ts": src },
			editorHeight: 300,
			previewHeight: 600
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
