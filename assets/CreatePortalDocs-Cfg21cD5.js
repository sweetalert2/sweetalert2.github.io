import { j as jsxRuntimeExports } from './index-Cvu2VbxU.js';

function CreatePortalDocs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "We'll be using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev/reference/react-dom/createPortal", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal" }) }),
      " ",
      "to use the same state between the app and SweetAlert2."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal" }),
      " accepts two arguments: a React component that you'd like to render and a target DOM element. Use ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getTitle()" }),
      ", ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getHtmlContainer()" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.getFooter()" }),
      " as the target element:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Title />, Swal.getTitle())" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Content />, Swal.getHtmlContainer())" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "createPortal(<Footer />, Swal.getFooter())" })
    ] })
  ] });
}

export { CreatePortalDocs as C };
