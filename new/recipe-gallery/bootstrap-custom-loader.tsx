import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'
const html = (await import(`./bootstrap-custom-loader-html.html?raw`)).default
const css = (await import(`./bootstrap-custom-loader-styles.css?raw`)).default
const src = (await import('./bootstrap-custom-loader-src?raw')).default

export function BootstrapCustomLoaderRecipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Bootstrap 5 + custom loader</h1>

      <p className="center">
        Read{' '}
        <a href="https://github.com/sweetalert2/sweetalert2/issues/374">
          https://github.com/sweetalert2/sweetalert2/issues/374
        </a>{' '}
        for more details.
      </p>

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
          '/index.html': html,
          '/style.css': css,
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h600',
            'sp-preview': 'sp-h300',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<BootstrapCustomLoaderRecipe />)
