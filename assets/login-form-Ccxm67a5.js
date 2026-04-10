import { _ as Nav, g as renderRecipe, h as Prtnr, v as require_jsx_runtime } from "./components-CIg7I_e8.js";
import { n as __vitePreload, t as Sandpack } from "./Sandpack-BPo9sUtz.js";
//#region recipe-gallery/login-form.tsx
var import_jsx_runtime = require_jsx_runtime();
var src = (await __vitePreload(async () => {
	const { default: __vite_default__ } = await import("./login-form-src-BVoihAkE.js");
	return { default: __vite_default__ };
}, [])).default;
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prtnr, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Login Form" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"In this example, we are using the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "html" }),
			" property to create login and password inputs. Note how we are applying the class ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "swal2-input" }),
			" to both inputs to make them look consistent with the rest of popup."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"We also add a check on the input using the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "preConfirm" }),
			" property. In the function defined for this propertty we are checking if either the user name or the password are empty, and if one of them is, we use",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.showValidationMessage()" }),
			" to show an error message on the swal. This will also prevent the swal from resolving."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"We are using the same ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "preConfirm" }),
			" function to also construct the return value for the swal."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sandpack, { files: { "/App.ts": src } })
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
