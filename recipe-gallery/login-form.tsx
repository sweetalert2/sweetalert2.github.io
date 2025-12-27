import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./login-form-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Login Form</h1>

      <p>
        In this example, we are using the <strong>html</strong> property to create login and password inputs. Note how
        we are applying the class <strong>swal2-input</strong> to both inputs to make them look consistent with the rest
        of popup.
      </p>

      <p>
        We also add a check on the input using the <strong>preConfirm</strong> property. In the function defined for
        this propertty we are checking if either the user name or the password are empty, and if one of them is, we use{' '}
        <strong>Swal.showValidationMessage()</strong> to show an error message on the swal. This will also prevent the
        swal from resolving.
      </p>

      <p>
        We are using the same <strong>preConfirm</strong> function to also construct the return value for the swal.
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
