import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./modal-with-iframe-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>
        Modal with <strong>iframe</strong> inside
      </h1>

      <p>
        The best way to show iframes is to use the <strong>embed-iframe</strong> theme.
      </p>
      <p>Import the theme and set it in the swal options:</p>

      <Sandpack
        files={{
          '/App.ts': src,
        }}
        editorHeight={300}
        previewHeight={600}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
