import { c as client, j as jsxRuntimeExports, N as Nav } from './index-afd1224a.js';
import { _ as __vitePreload, S as Sandpack } from './Sandpack-d91fd17f.js';

const src = (await __vitePreload(() => import('./queue-with-progress-steps-src-4577bf2f.js'),true?[]:void 0)).default;
function RecipeQueueWithProgressSteps() {
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
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeQueueWithProgressSteps, {}));
