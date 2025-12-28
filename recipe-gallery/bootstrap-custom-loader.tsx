import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
import { Sandpack } from './components/Sandpack'

const html = (await import(`./bootstrap-custom-loader-html.html?raw`)).default
const styles = (await import(`./bootstrap-custom-loader-styles.css?raw`)).default
const src = (await import('./bootstrap-custom-loader-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Bootstrap 5 + custom loader</h1>

      <p className="center">
        Read{' '}
        <a href="https://github.com/sweetalert2/sweetalert2/issues/374">
          https://github.com/sweetalert2/sweetalert2/issues/374
        </a>{' '}
        for more details.
      </p>

      <Sandpack
        dependencies={{
          'bootstrap': '^4.0.0',
          'jquery': '^3.2.1',
          'popper.js': '^1.12.9',
        }}
        files={{
          '/App.ts': src,
          '/index.html': html,
          '/styles.css': styles,
        }}
        previewHeight={300}
      />
    </>
  )
}

renderRecipe(<Recipe />)
