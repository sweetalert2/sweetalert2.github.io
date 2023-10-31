import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'
import { CreatePortalDocs } from './components/CreatePortalDocs'

const src = (await import(`./sweetalert2-react-router-src?raw`)).default

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReactRouter />)

function RecipeReactRouter() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React Router example</h1>

      <CreatePortalDocs />

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
