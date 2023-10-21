import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'
const src = (await import(`./sweetalert2-formik-src?raw`)).default

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeFormik />)

function RecipeFormik() {
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
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'sweetalert2-react-content': 'latest',
            'formik': '^2.0.0',
          },
          entry: '/App.tsx',
        }}
        files={{
          '/App.tsx': src,
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
