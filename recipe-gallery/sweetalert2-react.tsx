import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./sweetalert2-react-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React example</h1>
      <p>
        Here's our official React integration:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2-react-content">
          https://github.com/sweetalert2/sweetalert2-react-content
        </a>
        <br />
        It allow you to pass JSX/TSX as <strong>Swal.fire</strong> params.
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'sweetalert2-react-content': 'latest',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true,
          },
        }}
        editorHeight={600}
        previewHeight={400}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
