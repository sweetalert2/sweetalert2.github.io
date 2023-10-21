import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'
const css = (await import(`./three-buttons-dialog-styles.css?raw`)).default
const src = (await import('./three-buttons-dialog-src?raw')).default

export function RecipeThreeButtonsDialog() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Yes/No/Cancel Dialog</h1>

      <p>
        You can reorder buttons by using the CSS property <strong>order</strong>. The gap between buttons can be
        achieved with <strong>margin-right: auto</strong>.
      </p>

      <Sandpack
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
          },
          entry: '/App.js',
        }}
        files={{
          '/App.js': src,
          '/style.css': css,
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h550',
            'sp-preview': 'sp-h350',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeThreeButtonsDialog />)
