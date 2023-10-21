import { c as client, j as jsxRuntimeExports, N as Nav } from './index-c72ab0a0.js';
import { _ as __vitePreload, S as Sandpack } from './index-c3cf696d.js';

const src = (await __vitePreload(() => import('./sweetalert2-react-router-src-2b1002de.js'),true?[]:void 0)).default;
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReactRouter, {}));
function RecipeReactRouter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React Router example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "SweetAlert2 renders its content outside of the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ReactTree" }),
      ", therefore ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Link" }),
      " ",
      "component won't work. Use `useNavigate` hook instead:"
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
            "sweetalert2-react-content": "latest",
            "react-router-dom": "^6.0.0"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": src.replace(/ *\/\/ @ts-ignore\n/g, "")
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h650",
            "sp-preview": "sp-h250"
          }
        }
      }
    )
  ] });
}
