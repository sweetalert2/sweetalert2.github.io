import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./pdf-viewer-styles.css?raw`)).default
const src = (await import('./pdf-viewer-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>PDF Viewer with Fullscreen Support</h1>

      <p>
        This example shows how to display PDF files inside SweetAlert2 using{' '}
        <a href="https://mozilla.github.io/pdf.js/" target="_blank" rel="noopener noreferrer">
          PDF.js
        </a>
        . The PDF is rendered on a canvas with page navigation controls.
      </p>

      <p>
        SweetAlert2's fullscreen mode can be enabled by using the <code>grow</code> parameter or by clicking the
        fullscreen button in the popup.
      </p>

      <Sandpack
        dependencies={{
          'pdfjs-dist': '^4.0.379',
        }}
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        editorHeight={600}
        previewHeight={750}
      />
    </>
  )
}

renderRecipe(<Recipe />)
