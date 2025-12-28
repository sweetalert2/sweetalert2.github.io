import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./colored-toasts-styles.css?raw`)).default
const src = (await import('./colored-toasts-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Colored Toasts</h1>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        previewHeight={250}
      />
    </>
  )
}

renderRecipe(<Recipe />)
