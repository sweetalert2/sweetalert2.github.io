import { c as client, j as jsxRuntimeExports, N as Nav } from './index-4dgXhobZ.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-wZ9ImAsS.js';

const styles = (await __vitePreload(() => import('./crop-image-styles-jvdpzhRy.js'),true?__vite__mapDeps([]):void 0)).default;
const src = (await __vitePreload(() => import('./crop-image-src-bAxl8fwB.js'),true?__vite__mapDeps([]):void 0)).default;
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
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}