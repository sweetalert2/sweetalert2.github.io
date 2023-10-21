import ReactDOM from 'react-dom/client'
import { Sandpack } from '@codesandbox/sandpack-react'
import { Nav } from '../src/components'

export function BootstrapCustomLoaderRecipe() {
  return (
    <>
      <Nav recipeGallery />
      <h1>Bootstrap 4 + custom loader</h1>

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
          '/App.js': `import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'
import Swal from 'sweetalert2'
import './style.css'

$.fn.modal.Constructor.prototype._enforceFocus = function () {}

$('#myModal').modal()

$('.trigger-swal').on('click', function () {
  Swal.fire({
    title: 'SweetAlert2 + Bootstrap 4',
    input: 'text',
    buttonsStyling: false,
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-primary btn-lg mr-2',
      cancelButton: 'btn btn-danger btn-lg',
      loader: 'custom-loader'
    },
    loaderHtml: '<div class="spinner-border text-primary"></div>',
    preConfirm: () => {
      Swal.showLoading()
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 3000)
      })
    }
  })
})`,
          '/index.html': `<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <button class="trigger-swal">
          Trigger SweetAlert2
        </button>
      </div>
      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`,
          '/style.css': `.custom-loader {
  animation: none;
  border-width: 0;
}`,
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
