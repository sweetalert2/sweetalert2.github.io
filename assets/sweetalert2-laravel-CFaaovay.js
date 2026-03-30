import { _ as Nav, g as renderRecipe, p as CodeExample, v as require_jsx_runtime } from "./components-H9P_BMzc.js";
//#region recipe-gallery/sweetalert2-laravel.tsx
var import_jsx_runtime = require_jsx_runtime();
function Recipe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { recipeGallery: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "SweetAlert2 + Laravel example" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Here's the official Laravel integration:",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://github.com/sweetalert2/sweetalert2-laravel",
				children: "https://github.com/sweetalert2/sweetalert2-laravel"
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It allow you to use SweetAlert2 in your Laravel application with ease. API options are the same as in the original plugin." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			style: { maxWidth: "500px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "unselectable",
				children: "$ "
			}), "composer require sweetalert2/laravel"] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"Include the SweetAlert2 template in your layout file (usually",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "resources/views/layouts/app.blade.php" }),
			"):"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			style: { maxWidth: "500px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "@include('sweetalert2::index')" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
			"You can now run ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Swal::fire()" }),
			" anywhere in your Laravel application (controllers, middleware, etc.) to show a SweetAlert2 alert:"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeExample, {
			code: `use SweetAlert2\\Laravel\\Swal;

// same options as in Swal.fire()
Swal::fire([
    'title' => 'Laravel + SweetAlert2 = <3',
    'text' => 'This is a simple alert using SweetAlert2',
    'icon' => 'success',
    'confirmButtonText' => 'Cool'
]);

// or with a custom icon
Swal::success([
    'title' => 'Popup with a success icon',
]);
Swal::error([
    'title' => 'Popup with an error icon',
]);
Swal::warning([
    'title' => 'Popup with a warning icon',
]);
Swal::info([
    'title' => 'Popup with an info icon',
]);
Swal::question([
    'title' => 'Popup with a question icon',
]);

// or a toast
Swal::toast([
    'title' => 'Toast',
]);

// or a toast with a custom icon
Swal::toastSuccess([
    'title' => 'Toast with a success icon',
]);
Swal::toastError([
    'title' => 'Toast with an error icon',
]);
Swal::toastWarning([
    'title' => 'Toast with a warning icon',
]);
Swal::toastInfo([
    'title' => 'Toast with an info icon',
]);
Swal::toastQuestion([
    'title' => 'Toast with a question icon',
]);`,
			language: "php",
			style: { maxWidth: "600px" },
			withoutCodepen: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "https://github.com/sweetalert2/sweetalert2-laravel/raw/main/sweetalert2-laravel.png",
			alt: "SweetAlert2 Laravel integration demo screenshot",
			style: { maxWidth: 840 }
		}) })
	] });
}
renderRecipe(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recipe, {}));
//#endregion
