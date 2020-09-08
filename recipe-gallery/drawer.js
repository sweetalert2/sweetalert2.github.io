window.showExample = () => {
Swal.fire({
  title: 'Hey there 👋',
  position: 'top-start',
  customClass: {
    popup: `
      animate__animated
      animate__fadeInLeft
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutLeft
      animate__faster
    `
  },
  grow: 'column',
  width: 300,
  showConfirmButton: false,
  showCloseButton: true
})
}
