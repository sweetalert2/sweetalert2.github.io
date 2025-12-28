import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./three-buttons-dialog-styles.css?raw`)).default
const src = (await import('./three-buttons-dialog-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Yes/No/Cancel Dialog</h1>

      <p>
        You can reorder buttons by using the CSS property <strong>order</strong>. The gap between buttons can be
        achieved with <strong>margin-right: auto</strong>.
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        editorHeight={550}
      />
    </>
  )
}

renderRecipe(<Recipe />)
