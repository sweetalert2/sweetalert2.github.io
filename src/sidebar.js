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
    willOpen: () => {
      Swal.getContent().querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => Swal.close())
      })
    },
    willClose: () => {
      nav = Swal.getContent().querySelector('nav')
    },
    didClose: () => {
      document.body.insertBefore(nav, document.querySelector('#show-sidebar'))
    },
    width: 320,
    footer: `This sidebar is powered by SweetAlert2 as well :)
      <a href="https://github.com/sweetalert2/sweetalert2.github.io/blob/master/src/sidebar.js" class="nowrap" target="_blank">Code ↗</a>`
  })
}
