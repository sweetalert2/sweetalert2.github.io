import ReactDOM from 'react-dom/client'
import { Kinsta, Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const html = (await import(`./validation-message-custom-icon-html.html?raw`)).default
const styles = (await import(`./validation-message-custom-icon-styles.css?raw`)).default
const src = (await import('./validation-message-custom-icon-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Kinsta />
      <h1>Validation Message with a Custom Icon</h1>

      <p>In this example, we are using the Font Awesome icon instead of the default one.</p>

      <Sandpack
        files={{
          '/App.ts': src,
          '/index.html': { code: html, hidden: true },
          '/styles.css': styles,
        }}
        editorHeight={400}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
