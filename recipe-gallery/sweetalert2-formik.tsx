import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import(`./sweetalert2-formik-src?raw`)).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + Formik example</h1>

      <p>
        Formik is one of the most popular libraries for building forms with React. Here's how you integrate it with
        SweetAlert2.
      </p>

      <p>
        First, get the Formik reference (<strong>formikRef</strong>) for accessing the form. Then, use{' '}
        <strong>formikRef</strong> inside of <strong>preConfirm</strong> parameter to validate the form and return its
        values.
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'sweetalert2-react-content': 'latest',
          'formik': '^2.0.0',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true,
          },
        }}
        editorHeight={650}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
