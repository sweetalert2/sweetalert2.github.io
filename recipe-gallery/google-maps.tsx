import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const src = (await import('./google-maps-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Google Maps</h1>

      <p>
        Uses the <strong>embed-iframe</strong> theme and a simple Google Maps embed URL (no API key required).
      </p>

      <p>
        All themes can be found in the <a href="https://sweetalert2.github.io/#themes">SweetAlert2 themes gallery</a>.
      </p>

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

renderRecipe(<Recipe />)
