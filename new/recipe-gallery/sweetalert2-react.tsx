import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./sweetalert2-react-src?raw')).default

export function RecipeReact() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React example</h1>
      <p>
        Use our official React integration:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2-react-content">
          https://github.com/sweetalert2/sweetalert2-react-content
        </a>
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'sweetalert2-react-content': 'latest',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
        }}
        editorHeight={250}
        previewHeight={400}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReact />)
