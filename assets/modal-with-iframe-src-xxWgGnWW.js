const modalWithIframeSrc = `import Swal from 'sweetalert2'
import './styles.css'

Swal.fire({
  title: 'Modal with iframe',
  html: '<iframe frameborder="0" src="https://www.youtube.com/embed/6JxAis_v2mw"></iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  customClass: {
    popup: 'swal-with-iframe',
  },
  width: 1000,
})
`;

export { modalWithIframeSrc as default };
