window.showExample = async () => {
// LEFT SIDEBAR
await Swal.fire({
  title: 'Left sidebar 👋',
  position: 'top-start',
  showClass: {
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

// TOP DRAWER
await Swal.fire({
  title: 'Top drawer 👋',
  position: 'top',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `
  },
  grow: 'row',
  showConfirmButton: false,
  showCloseButton: true
})

// RIGHT SIDEBAR
await Swal.fire({
  title: 'Right sidebar 👋',
  position: 'top-end',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInRight
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutRight
      animate__faster
    `
  },
  grow: 'column',
  width: 300,
  showConfirmButton: false,
  showCloseButton: true
})

// BOTTOM DRAWER
await Swal.fire({
  title: 'Bottom drawer 👋',
  position: 'bottom',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  },
  grow: 'row',
  showConfirmButton: false,
  showCloseButton: true
})
}
