import ReactDOM from 'react-dom/client'
import { Kinsta, Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./modal-with-iframe-styles.css?raw`)).default
const src = (await import('./modal-with-iframe-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Kinsta />
      <h1>
        Modal with <strong>iframe</strong> inside
      </h1>

      <p>
        The important detail here is to keep the aspect ratio of the iframe. This is done by using CSS property{' '}
        <strong>aspect-ratio: 16 / 9;</strong>
      </p>

      <p>The rest of CSS styles are to remove the default paddings and make iframe take all the space available.</p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        editorHeight={350}
        previewHeight={600}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
