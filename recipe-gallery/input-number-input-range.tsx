import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const src = (await import('./input-number-input-range-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>input[number] + input[range]</h1>

      <p>
        Using the <strong>input: 'range'</strong> may have the side effect to be difficult to use on small screen /
        touch devices. On such devices is more difficult to provide a fine grained control on the input. The{' '}
        <strong>'range'</strong> input in Swal2 is designed to have only an output and no input.
      </p>
      <p>
        Alternatively, a <strong>range</strong> input with a <strong>number</strong> input can be achived manually using
        the <strong>html</strong> property to add a <strong>number</strong> input. In the <strong>didOpen()</strong>{' '}
        function, the two inputs can be linked together using <strong>addEventListener</strong>.
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
        }}
      />
    </>
  )
}

renderRecipe(<Recipe />)
