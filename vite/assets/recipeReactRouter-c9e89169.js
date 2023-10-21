import { c as client, j as jsxRuntimeExports, N as Nav } from "./index-7598f2e6.js";
import { S as Sandpack } from "./index-b3e8266c.js";
function RecipeReact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { recipeGallery: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "SweetAlert2 + React Router example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "SweetAlert2 renders its content outside of the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ReactTree" }),
      ", therefore ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Link" }),
      " ",
      "component won't work. Use `useNavigate` hook instead:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sandpack,
      {
        theme: "dark",
        customSetup: {
          dependencies: {
            "react": "latest",
            "react-dom": "latest",
            "sweetalert2": "latest",
            "sweetalert2-react-content": "latest",
            "react-router-dom": "^6.0.0"
          },
          entry: "/App.js"
        },
        files: {
          "/App.js": `import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const Home = () => {
  const navigate = useNavigate();

  const showSwalWithLink = () => {
    MySwal.fire({
      html: (
        <a href="/about" onClick={(event) => {
          event.preventDefault();
          Swal.close();
          navigate('/about')
        }}>
            Navigate to /about
        </a>
      ),
    });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={showSwalWithLink}>Show SweetAlert2 modal</button>
    </>
  );
};

const About = () => {
  return <h1>About</h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Link to="/">Home</Link> {' | '}
    <Link to="/about">About</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)`
        },
        options: {
          showLineNumbers: true,
          recompileMode: "delayed",
          recompileDelay: 3e3,
          classes: {
            "sp-editor": "sp-h650",
            "sp-preview": "sp-h250"
          }
        }
      }
    )
  ] });
}
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(RecipeReact, {}));
