import { c as client, j as jsxRuntimeExports, N as Nav } from './index-93M32JYF.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-f6rf7RVm.js';

const html = (await __vitePreload(() => import('./sidebars-drawers-html-Df5NjPCv.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./sidebars-drawers-src-Bebhrty7.js'),true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Sidebars and Drawers (Left, Right, Top, Bottom)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "In this example custom animations are powered by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://animate.style/", target: "_blank", rel: "noreferrer noopener", className: "nowrap", children: "Animate.css" }),
      ", but it's possible to use any custom animations."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        entry: "/App.tsx",
        files: {
          "/App.tsx": src,
          "/index.html": { code: html, hidden: true }
        },
        editorHeight: 650,
        previewHeight: 400
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
