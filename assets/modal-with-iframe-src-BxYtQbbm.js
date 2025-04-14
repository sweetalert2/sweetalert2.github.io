const modalWithIframeSrc = `import Swal from 'sweetalert2'
import 'sweetalert2/themes/embed-iframe.css' // import the embed-iframe theme

Swal.fire({
  theme: 'embed-iframe', // set the theme
  title: 'Modal with iframe',
  html: '<iframe frameborder="0" src="https://www.youtube.com/embed/6JxAis_v2mw"></iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  width: 1000,
})
`;

export { modalWithIframeSrc as default };
