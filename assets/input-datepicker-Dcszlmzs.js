import { a as renderRecipe, j as jsxRuntimeExports, N as Nav } from './index-BNPpqpQm.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-sy_qv-Sj.js';
import { P as Prtnr } from './Prtnr-DLD4_obK.js';
import { C as CreatePortalDocs } from './CreatePortalDocs-YoC6P7ES.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./input-datepicker-src-CtH69BGy.js');return { default: __vite_default__ }},true              ?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Prtnr, {}),
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
          "react": "^19.0.0",
          "react-dom": "^19.0.0",
          "react-day-picker": "^9.0.0",
          "date-fns": "^4.0.0"
        },
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": {
            code: `<style>body { font-family: sans-serif; }</style><div className="app-root"></div>`,
            hidden: true
          }
        },
        editorHeight: 650,
        previewHeight: 600
      }
    )
  ] });
}
renderRecipe(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
