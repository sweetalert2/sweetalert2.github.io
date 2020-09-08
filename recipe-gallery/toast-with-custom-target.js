window.showExample = () => {
Swal.fire({
  text: 'Toast with custom target',
  target: '#dummy-target',
  customClass: {
    container: 'position-absolute'
  },
  toast: true,
  position: 'bottom-right'
})
}
