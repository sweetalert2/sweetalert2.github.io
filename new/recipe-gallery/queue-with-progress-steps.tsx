import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'

export function QueueWithProgressStepsRecipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Queue with Progress Steps</h1>

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
          '/App.js': `import Swal from 'sweetalert2';

const steps = ['1', '2', '3']
const Queue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' }
})

;(async () => {
  await Queue.fire({
    title: 'Uno',
    currentProgressStep: 0,
  })
  await Queue.fire({
    title: 'Dos',
    currentProgressStep: 1
  })
  await Queue.fire({
    title: 'Tres',
    currentProgressStep: 2,
    confirmButtonText: 'OK',
  })
})()`,
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

ReactDOM.createRoot(document.getElementById('root')!).render(<QueueWithProgressStepsRecipe />)
