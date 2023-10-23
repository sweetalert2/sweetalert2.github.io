import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import(`./sweetalert2-react-router-src?raw`)).default

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReactRouter />)

function RecipeReactRouter() {
  return (
    <>
      <Nav recipeGallery />
      <h1>SweetAlert2 + React Router example</h1>

      <p>
        SweetAlert2 renders its content outside of the <strong>ReactTree</strong>, therefore <strong>Link</strong>{' '}
        component won't work. Use `useNavigate` hook instead:
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'sweetalert2-react-content': 'latest',
          'react-router-dom': '^6.0.0',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': {
            code: `<style>body { font-family: sans-serif; }</style><div id="root"></div>`,
            hidden: true,
          },
        }}
        editorHeight={650}
        previewHeight={250}
      />
    </>
  )
}
