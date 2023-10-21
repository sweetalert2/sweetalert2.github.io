import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { S as Sandpack } from './index-86d6113f.js';

function RecipeReact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Use our official React integration:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-react-content", children: "https://github.com/sweetalert2/sweetalert2-react-content" })
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
            "sweetalert2-react-content": "latest"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": `import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success'
})`
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h250",
            "sp-preview": "sp-h400"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReact, {}));
