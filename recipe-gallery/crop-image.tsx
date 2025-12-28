import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'
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

renderRecipe(<Recipe />)
