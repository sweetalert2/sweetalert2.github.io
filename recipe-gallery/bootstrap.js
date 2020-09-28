window.showExample = () => {
$.fn.modal.Constructor.prototype._enforceFocus = function () {}

$('#myModal').modal()

$('.trigger-swal').click(function () {
  Swal.fire({ title: 'Test', input: 'text' })
})
}
