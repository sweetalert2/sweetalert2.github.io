import { c as client, j as jsxRuntimeExports, N as Nav } from './index-3e691c95.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-55ea7978.js';
import { C as CreatePortalDocs } from './CreatePortalDocs-0cd4df4e.js';

const src = (await __vitePreload(() => import('./input-datepicker-src-d74b9730.js'),true?[]:void 0)).default;
function RecipeReact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Date input powered by react-day-picker" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "While it is possible to use ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "input: 'date | datetime-local | time | week | month'" }),
      "directly in ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
      ", you can also use any datepicker plugin to provide the consistent look and feel across browsers as well as additional features like range selection."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example we'll use React and ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react-day-picker.js.org/", children: "react-day-picker" }),
      " to create a date range picker."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CreatePortalDocs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "react": "latest",
          "react-dom": "latest",
          "react-day-picker": "latest",
          "date-fns": "latest"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true
          }
        },
        editorHeight: 650,
        previewHeight: 600
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReact, {}));
