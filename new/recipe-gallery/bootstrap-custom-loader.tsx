import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const html = (await import(`./bootstrap-custom-loader-html.html?raw`)).default
const styles = (await import(`./bootstrap-custom-loader-styles.css?raw`)).default
const src = (await import('./bootstrap-custom-loader-src?raw')).default

export function BootstrapCustomLoaderRecipe() {
  return (
    <>
      <Nav recipeGallery />
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

ReactDOM.createRoot(document.getElementById('root')!).render(<BootstrapCustomLoaderRecipe />)
