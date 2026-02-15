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
        Uses <a href="https://mozilla.github.io/pdf.js/">pdf.js</a> to render a PDF inside a SweetAlert2 popup. Click
        the canvas to enter fullscreen mode.
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
          '/index.html': {
            code: `<script src="https://cdn.jsdelivr.net/npm/pdfjs-dist/build/pdf.min.mjs" type="module"></script>\n<style>body { font-family: sans-serif; }</style>`,
            hidden: true,
          },
        }}
        previewHeight={600}
      />
    </>
  )
}

renderRecipe(<Recipe />)
