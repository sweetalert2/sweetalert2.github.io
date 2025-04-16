import { R as ReactDOM, j as jsxRuntimeExports, N as Nav, K as Kinsta } from './index-AT9_4RXp.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-BtiShf0a.js';

const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./custom-icon-src-DtrF8osd.js');return { default: __vite_default__ }},true?[]:void 0)).default;
const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./custom-icon-styles-DjK9iNKt.js');return { default: __vite_default__ }},true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Kinsta, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Custom Icon" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Icon's HTML can be customized by passing an HTML string to the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "iconHtml" }),
      " parameter. In this example, we're using an SVG icon from FontAwesome."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Icon's styling can be customized by passing a CSS class to the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "customClass.icon" }),
      " parameter. In this example, we're using the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "rotate-y" }),
      " class to rotate the icon."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        entry: "/App.ts",
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        editorHeight: 400,
        previewHeight: 300
      }
    )
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
