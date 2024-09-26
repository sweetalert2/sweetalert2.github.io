import { c as client, j as jsxRuntimeExports, N as Nav } from './index-DM5WtHNv.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-B0o63Y8a.js';

const styles = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./crop-image-styles-CMR7yiwP.js');return { default: __vite_default__ }},true?[]:void 0)).default;
const src = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./crop-image-src-wjtf5nDo.js');return { default: __vite_default__ }},true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Crop User Image with Cropper.js" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        dependencies: {
          "cropperjs": "latest",
          "@github/mini-throttle": "latest"
        },
        files: {
          "/App.ts": src,
          "/styles.css": styles
        },
        previewHeight: 650
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
