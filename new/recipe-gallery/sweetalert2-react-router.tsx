import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'

export function RecipeReact() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React Router example</h1>

      <p>
        SweetAlert2 renders its content outside of the <strong>ReactTree</strong>, therefore <strong>Link</strong>{' '}
        component won't work. Use `useNavigate` hook instead:
      </p>

      <Sandpack
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'sweetalert2-react-content': 'latest',
            'react-router-dom': '^6.0.0',
          },
          entry: '/App.js',
        }}
        files={{
          '/App.js': `import ReactDOM from 'react-dom/client'
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
)`,
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h650',
            'sp-preview': 'sp-h250',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReact />)
