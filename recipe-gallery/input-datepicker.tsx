import ReactDOM from 'react-dom/client'
import { Nav, Prtnr } from '../src/components'
import { Sandpack } from './components/Sandpack'
import { CreatePortalDocs } from './components/CreatePortalDocs'

const src = (await import('./input-datepicker-src?raw')).default

function Recipe() {
  return (
    <>
      <Nav recipeGallery />
      <Prtnr />
      <h1>Date input powered by react-day-picker</h1>
      <p>
        While it is possible to use <strong>input: 'date | datetime-local | time | week | month'</strong>
        directly in <strong>Swal.fire()</strong>, you can also use any datepicker plugin to provide the consistent look
        and feel across browsers as well as additional features like range selection.
      </p>

      <p>
        In this example we'll use React and <a href="https://react-day-picker.js.org/">react-day-picker</a> to create a
        date range picker.
      </p>

      <CreatePortalDocs />

      <Sandpack
        dependencies={{
          'react': '^19.0.0',
          'react-dom': '^19.0.0',
          'react-day-picker': '^9.0.0',
          'date-fns': '^4.0.0',
        }}
        entry="/App.tsx"
        files={{
          '/App.tsx': src,
          '/index.html': {
            code: `<style>body { font-family: sans-serif; }</style><div className="app-root"></div>`,
            hidden: true,
          },
        }}
        editorHeight={650}
        previewHeight={600}
      />
    </>
  )
}

ReactDOM.createRoot(document.querySelector('.app-root')!).render(<Recipe />)
