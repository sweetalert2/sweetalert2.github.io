import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'
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
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'sweetalert2-react-content': 'latest',
            'react-router-dom': '^6.0.0',
          },
          entry: '/App.js',
        }}
        files={{
          '/App.js': src.replace(/ *\/\/ @ts-ignore\n/g, ''),
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h650',
            'sp-preview': 'sp-h250',
          },
        }}
      />
    </>
  )
}
