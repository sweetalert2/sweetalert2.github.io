window.showExample = () => {
$.fn.modal.Constructor.prototype._enforceFocus = function () {}

$('#myModal').modal()

$('.trigger-swal').on('click', function () {
  Swal.fire({
    title: 'SweetAlert2 + Bootstrap 4',
    input: 'text',
    buttonsStyling: false,
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-primary btn-lg',
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
})
}
