import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./i18n-l10n-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
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

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
