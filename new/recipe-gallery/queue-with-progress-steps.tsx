import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./queue-with-progress-steps-src?raw')).default

export function RecipeQueueWithProgressSteps() {
  return (
    <>
      <Nav recipeGallery />
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

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeQueueWithProgressSteps />)
