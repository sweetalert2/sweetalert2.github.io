import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'
const css = (await import(`./colored-toasts-styles.css?raw`)).default
const src = (await import('./colored-toasts-src?raw')).default

export function RecipeColoredToasts() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Colored Toasts</h1>

      <Sandpack
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'bootstrap': '^4.0.0',
            'jquery': '^3.2.1',
            'popper.js': '^1.12.9',
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
            'sp-editor': 'sp-h600',
            'sp-preview': 'sp-h250',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeColoredToasts />)
