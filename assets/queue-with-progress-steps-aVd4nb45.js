import { c as client, j as jsxRuntimeExports, N as Nav } from './index-DcWLTZFK.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-CP9vwbmV.js';

const src = (await __vitePreload(() => import('./queue-with-progress-steps-src-CpqmSjxQ.js'),true?[]:void 0)).default;
function Recipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Queue with Progress Steps" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        files: {
          "/App.ts": src
        },
        previewHeight: 300
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Recipe, {}));
