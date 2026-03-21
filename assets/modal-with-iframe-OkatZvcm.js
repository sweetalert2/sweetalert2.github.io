import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-DZEGujI6.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B0ggCQw5.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/modal-with-iframe.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./modal-with-iframe-src-DZZnbNk8.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
			"Modal with ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "iframe" }),
			" inside"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"The best way to show iframes is to use the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "embed-iframe" }),
			" theme."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Import the theme and set it in the swal options:" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			files: { "/App.ts": src },
			editorHeight: 300,
			previewHeight: 600
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
