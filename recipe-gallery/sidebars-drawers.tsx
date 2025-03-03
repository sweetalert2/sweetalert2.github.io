import ReactDOM from 'react-dom/client'
import { Kinsta, Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const html = (await import(`./sidebars-drawers-html.html?raw`)).default
const src = (await import(`./sidebars-drawers-src?raw`)).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Kinsta />
      <h1>Sidebars and Drawers (Left, Right, Top, Bottom)</h1>

      <p>
        In this example custom animations are powered by{' '}
        <a href="https://animate.style/" target="_blank" rel="noreferrer noopener" className="nowrap">
          Animate.css
        </a>
        , but it's possible to use any custom animations.
      </p>

      <Sandpack
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': { code: html, hidden: true },
        }}
        editorHeight={650}
        previewHeight={400}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Recipe />)
