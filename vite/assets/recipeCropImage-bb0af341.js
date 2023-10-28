import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-d91fd17f.js';

const styles = (await __vitePreload(() => import('./crop-image-styles-ecfe0940.js'),true?[]:void 0)).default;
const src = (await __vitePreload(() => import('./crop-image-src-6da4840d.js'),true?[]:void 0)).default;
function RecipeCropImage() {
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
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeCropImage, {}));
