import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Swal from 'sweetalert2'
import './style.css'

$('#myModal').modal()

$('.trigger-swal').on('click', function () {
  Swal.fire({
    title: 'SweetAlert2 + Bootstrap 5',
    input: 'text',
    buttonsStyling: false,
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-primary btn-lg mr-2',
      cancelButton: 'btn btn-danger btn-lg',
      loader: 'custom-loader',
    },
    loaderHtml: '<div class="spinner-border text-primary"></div>',
    preConfirm: () => {
      Swal.showLoading()
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 3000)
      })
    },
  })
})
