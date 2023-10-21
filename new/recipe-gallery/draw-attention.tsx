import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'

export function RecipeDrawAttention() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Draw Attention / Persistent Dialog</h1>

      <p>
        In this example, we are passing the function returning <strong>false</strong> value to{' '}
        <strong>allowOutsideClick</strong>. In that function we can also animate the popup to bring users' attention to
        it.
      </p>

      <Sandpack
        theme="dark"
        customSetup={{
          dependencies: {
            'react': 'latest',
            'react-dom': 'latest',
            'sweetalert2': 'latest',
            'animate.css': 'latest',
          },
          entry: '/App.js',
        }}
        files={{
          '/App.js': `import Swal from 'sweetalert2'
import 'animate.css'

Swal.fire({
  title: 'I will shake when you click outside!',
  allowOutsideClick: () => {
    const popup = Swal.getPopup()
    popup.classList.remove('swal2-show')
    setTimeout(() => {
      popup.classList.add('animate__animated', 'animate__headShake')
    })
    setTimeout(() => {
      popup.classList.remove('animate__animated', 'animate__headShake')
    }, 500)
    return false
  }
})`,
        }}
        options={{
          showLineNumbers: true,
          recompileMode: 'delayed',
          recompileDelay: 3000,
          classes: {
            'sp-editor': 'sp-h400',
            'sp-preview': 'sp-h250',
          },
        }}
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeDrawAttention />)
