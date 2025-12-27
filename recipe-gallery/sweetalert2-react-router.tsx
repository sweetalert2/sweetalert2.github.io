import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'
import { CreatePortalDocs } from './components/CreatePortalDocs'

const src = (await import(`./sweetalert2-react-router-src?raw`)).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>SweetAlert2 + React Router example</h1>

      <CreatePortalDocs />

      <p>
        When using the same context between your app and SweetAlert2, React Router will be able to render components
        like <strong>&lt;Link /&gt;</strong> inside of SweetAlert2:
      </p>

      <Sandpack
        dependencies={{
          'react': '^19.0.0',
          'react-dom': '^19.0.0',
          'react-router-dom': '^7.0.0',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': {
            code: `<style>body { font-family: sans-serif; }</style><div className="app-root"></div>`,
            hidden: true,
          },
        }}
        editorHeight={650}
        previewHeight={250}
      />
    </>
  )
}

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
