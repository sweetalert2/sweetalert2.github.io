import ReactDOM from 'react-dom/client'
import { Sandpack } from "@codesandbox/sandpack-react";
import { Nav } from '../src/components'

export function RecipeReact() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React example</h1>
      <p>
        Use our official React integration: {' '}
        <a href="https://github.com/sweetalert2/sweetalert2-react-content">
          https://github.com/sweetalert2/sweetalert2-react-content
        </a>
      </p>

      <Sandpack
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'sweetalert2-react-content': 'latest',
          },
          entry: '/App.js',
        }}
        files={{
          '/App.js': `import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success'
})`,
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h250',
            'sp-preview': 'sp-h400',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReact />)
