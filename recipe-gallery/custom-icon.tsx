import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./custom-icon-src?raw')).default
const styles = (await import('./custom-icon-styles.css?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Custom Icon</h1>

      <p>
        Icon's HTML can be customized by passing an HTML string to the <strong>iconHtml</strong> parameter. In this
        example, we're using an SVG icon from FontAwesome.
      </p>

      <p>
        Icon's styling can be customized by passing a CSS class to the <strong>customClass.icon</strong> parameter. In
        this example, we're using the <strong>rotate-y</strong> class to rotate the icon.
      </p>

      <Sandpack
        entry="/App.ts"
        files={{
          '/App.ts': src,
          '/styles.css': styles,
        }}
        editorHeight={400}
        previewHeight={300}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
