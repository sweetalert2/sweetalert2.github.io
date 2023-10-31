import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'
import { Sandpack } from './components/Sandpack'

const src = (await import('./input-datepicker-src?raw')).default

export function RecipeReact() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Date input powered by react-day-picker</h1>
      <p>
        While it is possible to use <strong>input: 'date | datetime-local | time | week | month'</strong>
        directly in <strong>Swal.fire()</strong>, you can also use any datepicker plugin to provide the consistent look
        and feel across browsers as well as additional features like range selection.
      </p>

      <p>
        In this example we'll use React and <a href="https://react-day-picker.js.org/">react-day-picker</a> to create a
        date range picker:
      </p>

      <Sandpack
        dependencies={{
          'react': 'latest',
          'react-dom': 'latest',
          'react-day-picker': 'latest',
          'date-fns': 'latest',
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
        previewHeight={600}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeReact />)
