export default () => {
  let nav
  Swal.fire({
    html: document.querySelector('nav'),
    showConfirmButton: false,
    showCloseButton: true,
    position: 'top-left',
    customClass: {
      container: 'sidebar',
      popup: 'border-radius-0',
    },
    showClass: {
      popup: 'animate__animated animate__fadeInLeft animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutLeft animate__faster'
    },
    onClose: () => {
      nav = Swal.getContent().querySelector('nav')
    },
    onAfterClose: () => {
      document.body.insertBefore(nav, document.querySelector('#show-sidebar'))
    },
    footer: `This sidebar is powered by SweetAlert2 as well :)
      <a href="https://github.com/sweetalert2/sweetalert2.github.io/blob/master/src/sidebar.js" class="nowrap" target="_blank">Code ↗</a>`
  })
}
