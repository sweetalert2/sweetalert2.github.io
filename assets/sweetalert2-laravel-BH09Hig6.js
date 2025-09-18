import { R as ReactDOM, j as jsxRuntimeExports, N as Nav } from './index-DIeI202v.js';
import { C as CodeExample } from './CodeExample-BTx2dG6S.js';

function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + Laravel example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Here's the official Laravel integration:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-laravel", children: "https://github.com/sweetalert2/sweetalert2-laravel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It allow you to use SweetAlert2 in your Laravel application with ease. API options are the same as in the original plugin." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { maxWidth: "500px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
      "composer require sweetalert2/laravel"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Include the SweetAlert2 template in your layout file (usually",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "resources/views/layouts/app.blade.php" }),
      "):"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { style: { maxWidth: "500px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "@include('sweetalert2::index')" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "You can now run ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal::fire()" }),
      " anywhere in your Laravel application (controllers, middleware, etc.) to show a SweetAlert2 alert:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CodeExample,
      {
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
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "https://github.com/sweetalert2/sweetalert2-laravel/raw/main/sweetalert2-laravel.png",
        style: { maxWidth: 840 }
      }
    ) })
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
