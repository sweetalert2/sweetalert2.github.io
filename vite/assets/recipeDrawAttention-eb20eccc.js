import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { S as Sandpack } from './index-86d6113f.js';

function RecipeDrawAttention() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Draw Attention / Persistent Dialog" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example, we are passing the function returning ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
      " value to",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "allowOutsideClick" }),
      ". In that function we can also animate the popup to bring users' attention to it."
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
            "animate.css": "latest"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": `import Swal from 'sweetalert2'
import 'animate.css'

Swal.fire({
  title: 'I will shake when you click outside!',
  allowOutsideClick: () => {
    const popup = Swal.getPopup()
    popup.classList.remove('swal2-show')
    setTimeout(() => {
      popup.classList.add('animate__animated', 'animate__headShake')
    })
    setTimeout(() => {
      popup.classList.remove('animate__animated', 'animate__headShake')
    }, 500)
    return false
  }
})`
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h400",
            "sp-preview": "sp-h250"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeDrawAttention, {}));
