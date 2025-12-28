import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const src = (await import('./i18n-l10n-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Internationalization (i18n) and localization (l10n)</h1>

      <p>
        In this example <a href="https://www.i18next.com/">i18next</a> is used, but you can use any i18n library.
      </p>

      <Sandpack
        dependencies={{
          i18next: '^24.0.0',
        }}
        entry="/App.ts"
        files={{
          '/App.ts': src,
        }}
        editorHeight={600}
        previewHeight={250}
      />
    </>
  )
}

renderRecipe(<Recipe />)
