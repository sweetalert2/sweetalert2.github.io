import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-DZEGujI6.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-B0ggCQw5.js";
import "./utils-52664384-tXfMgvZN.js";
//#region recipe-gallery/input-number-input-range.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./input-number-input-range-src-DNyeav9V.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "input[number] + input[range]" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Using the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "input: 'range'" }),
			" may have the side effect to be difficult to use on small screen / touch devices. On such devices is more difficult to provide a fine grained control on the input. The",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "'range'" }),
			" input in Swal2 is designed to have only an output and no input."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Alternatively, a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "range" }),
			" input with a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "number" }),
			" input can be achived manually using the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "html" }),
			" property to add a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "number" }),
			" input. In the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "didOpen()" }),
			" ",
			"function, the two inputs can be linked together using ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "addEventListener" }),
			"."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, { files: { "/App.ts": src } })
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
