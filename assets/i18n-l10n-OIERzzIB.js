import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-AjYiIexJ.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-C-pAEfES.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/i18n-l10n.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./i18n-l10n-src-CmOvXVCI.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Internationalization (i18n) and localization (l10n)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In this example ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://www.i18next.com/",
				children: "i18next"
			}),
			" is used, but you can use any i18n library."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: { i18next: "^24.0.0" },
			entry: "/App.ts",
			files: { "/App.ts": src },
			editorHeight: 600,
			previewHeight: 250
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
