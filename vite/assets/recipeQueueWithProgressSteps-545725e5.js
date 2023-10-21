import { c as client, j as jsxRuntimeExports, N as Nav } from './index-60c2e8b4.js';
import { S as Sandpack } from './index-0aac3d58.js';

function QueueWithProgressStepsRecipe() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Queue with Progress Steps" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": `import Swal from 'sweetalert2';

const steps = ['1', '2', '3']
const Queue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' }
})

;(async () => {
  await Queue.fire({
    title: 'Uno',
    currentProgressStep: 0,
  })
  await Queue.fire({
    title: 'Dos',
    currentProgressStep: 1
  })
  await Queue.fire({
    title: 'Tres',
    currentProgressStep: 2,
    confirmButtonText: 'OK',
  })
})()`
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h600",
            "sp-preview": "sp-h300"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(QueueWithProgressStepsRecipe, {}));
