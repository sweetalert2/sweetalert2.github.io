import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const styles = (await import(`./crop-image-styles.css?raw`)).default
const src = (await import('./crop-image-src?raw')).default

export function RecipeCropImage() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Crop User Image with Cropper.js</h1>

      <Sandpack
        dependencies={{
          'cropperjs': 'latest',
          '@github/mini-throttle': 'latest',
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

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeCropImage />)
