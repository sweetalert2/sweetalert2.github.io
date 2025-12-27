import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
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

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
