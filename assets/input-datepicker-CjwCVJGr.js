import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BSEpUu2X.js";
import { t as CreatePortalDocs } from "./CreatePortalDocs-QKF_s4RN.js";
//#region recipe-gallery/input-datepicker.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./input-datepicker-src-n9Zlo3mw.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Date input powered by react-day-picker" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"While it is possible to use ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "input: 'date | datetime-local | time | week | month'" }),
			"directly in ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.fire()" }),
			", you can also use any datepicker plugin to provide the consistent look and feel across browsers as well as additional features like range selection."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In this example we'll use React and ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://react-day-picker.js.org/",
				children: "react-day-picker"
			}),
			" to create a date range picker."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePortalDocs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, {
			dependencies: {
				"react": "^19.0.0",
				"react-dom": "^19.0.0",
				"react-day-picker": "^9.0.0",
				"date-fns": "^4.0.0"
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
			previewHeight: 600
		})
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
