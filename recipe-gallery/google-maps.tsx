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
