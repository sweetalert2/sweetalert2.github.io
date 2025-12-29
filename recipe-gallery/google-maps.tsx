import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./google-maps-styles.css?raw`)).default
const src = (await import('./google-maps-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>
        <strong>Google Maps</strong> inside SweetAlert2
      </h1>

      <p>
        This example shows how to embed Google Maps in a SweetAlert2 modal. The map is interactive and allows users
        to click to change the marker position.
      </p>

      <p className="warning">
        <strong>Note:</strong> To use Google Maps, you need a valid Google Maps API key. Replace{' '}
        <code>YOUR_API_KEY</code> with your actual API key.
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
          '/index.html': {
            code: `<!DOCTYPE html>
<html>
  <head>
    <style>body { font-family: sans-serif; }</style>
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=Function.prototype"></script>
  </head>
  <body></body>
</html>`,
          },
        }}
        editorHeight={500}
        previewHeight={650}
      />
    </>
  )
}

renderRecipe(<Recipe />)
