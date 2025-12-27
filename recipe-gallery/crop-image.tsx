import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./crop-image-styles.css?raw`)).default
const src = (await import('./crop-image-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Crop User Image with Cropper.js</h1>

      <Sandpack
        dependencies={{
          'cropperjs': '^1.0.0',
          '@github/mini-throttle': '^2.0.0',
        }}
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        previewHeight={650}
      />
    </>
  )
}

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
