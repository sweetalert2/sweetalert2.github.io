import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import(`./sweetalert2-react-router-src?raw`)).default

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReactRouter />)

function RecipeReactRouter() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React Router example</h1>

      <p>
        Use{' '}
        <a href="https://react.dev/reference/react-dom/createPortal" target="_blank">
          <strong>createPortal</strong>
        </a>{' '}
        to use the same shared React tree in your app and in SweetAlert2.
      </p>

      <p>
        <strong>createPortal</strong> accepts two arguments: a React component that you'd like to render and a target
        DOM element. Use <strong>Swal.getTitle()</strong>, <strong>Swal.getHtmlContainer()</strong> or{' '}
        <strong>Swal.getFooter()</strong> as the target element:
      </p>

      <p>
        <strong>createPortal(&lt;Title /&gt;, Swal.getTitle())</strong> <br />
        <strong>createPortal(&lt;Content /&gt;, Swal.getHtmlContainer())</strong> <br />
        <strong>createPortal(&lt;Footer /&gt;, Swal.getFooter())</strong>
      </p>

      <p>
        When using the same context between your app and SweetAlert2, React Router will be able to render components
        like <strong>&lt;Link /&gt;</strong> inside of SweetAlert2:
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'react-router-dom': '^6.0.0',
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
        previewHeight={250}
      />
    </>
  )
}
