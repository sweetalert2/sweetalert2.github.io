const googleMapsSrc = `import Swal from 'sweetalert2'
import 'sweetalert2/themes/embed-iframe.css'

Swal.fire({
  theme: 'embed-iframe',
  title: 'Google Maps',
  html: '<iframe frameborder="0" src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  width: 800,
})
`;

export { googleMapsSrc as default };
