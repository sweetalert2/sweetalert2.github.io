import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const src = (await import('./draw-attention-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Draw Attention / Persistent Dialog</h1>

      <p>
        In this example, we are passing the function returning <strong>false</strong> value to{' '}
        <strong>allowOutsideClick</strong>. In that function we can also animate the popup to bring users' attention to
        it.
      </p>

      <Sandpack
        dependencies={{
          'animate.css': '^4.0.0',
        }}
        entry="/App.ts"
        files={{
          '/App.ts': src,
        }}
        editorHeight={400}
        previewHeight={250}
      />
    </>
  )
}

renderRecipe(<Recipe />)
