import { v as require_jsx_runtime } from "./components-DZEGujI6.js";
//#region recipe-gallery/components/CreatePortalDocs.tsx
var import_jsx_runtime = require_jsx_runtime();
function CreatePortalDocs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"We'll be using",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://react.dev/reference/react-dom/createPortal",
				target: "_blank",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "createPortal" })
			}),
			" ",
			"to use the same state between the app and SweetAlert2."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "createPortal" }),
			" accepts two arguments: a React component that you'd like to render and a target DOM element. Use ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.getTitle()" }),
			", ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.getHtmlContainer()" }),
			" or",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal.getFooter()" }),
			" as the target element:"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "createPortal(<Title />, Swal.getTitle())" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "createPortal(<Content />, Swal.getHtmlContainer())" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "createPortal(<Footer />, Swal.getFooter())" })
		] })
	] });
}
//#endregion
export { CreatePortalDocs as t };
