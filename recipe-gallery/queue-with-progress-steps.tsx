import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./queue-with-progress-steps-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Queue with Progress Steps</h1>

      <Sandpack
        files={{
          '/App.ts': src,
        }}
        previewHeight={300}
      />
    </>
  )
}

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
