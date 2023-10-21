import { c as client, j as jsxRuntimeExports, N as Nav } from "./index-7598f2e6.js";
import { S as Sandpack } from "./index-b3e8266c.js";
function BootstrapCustomLoaderRecipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Bootstrap 4 + custom loader" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "Read",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/issues/374", children: "https://github.com/sweetalert2/sweetalert2/issues/374" }),
      " ",
      "for more details."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest",
            "bootstrap": "^4.0.0",
            "jquery": "^3.2.1",
            "popper.js": "^1.12.9"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": `import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Swal from 'sweetalert2'
import './style.css'

$.fn.modal.Constructor.prototype._enforceFocus = function () {}

$('#myModal').modal()

$('.trigger-swal').on('click', function () {
  Swal.fire({
    title: 'SweetAlert2 + Bootstrap 4',
    input: 'text',
    buttonsStyling: false,
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-primary btn-lg mr-2',
      cancelButton: 'btn btn-danger btn-lg',
      loader: 'custom-loader'
    },
    loaderHtml: '<div class="spinner-border text-primary"></div>',
    preConfirm: () => {
      Swal.showLoading()
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 3000)
      })
    }
  })
})`,
          "/index.html": `<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button class="trigger-swal">
          Trigger SweetAlert2
        </button>
      </div>
      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`,
          "/style.css": `.custom-loader {
  animation: none;
  border-width: 0;
}`
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h600",
            "sp-preview": "sp-h300"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(BootstrapCustomLoaderRecipe, {}));
