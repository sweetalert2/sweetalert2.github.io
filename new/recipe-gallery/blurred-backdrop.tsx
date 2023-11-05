import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./blurred-backdrop-styles.css?raw`)).default
const src = (await import('./blurred-backdrop-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Blurred Backdrop</h1>

      <p>
        You may wonder why <strong>[aria-hidden="true"]</strong>. The answer is: SweetAlert2 sets{' '}
        <strong>[aria-hidden="true"]</strong> on every direct child of the <strong>body</strong> for the accessibility
        support. Details can be found here:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2/pull/1189">
          https://github.com/sweetalert2/sweetalert2/pull/1189
        </a>
      </p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        editorHeight={300}
        previewHeight={300}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
