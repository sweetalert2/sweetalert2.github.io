//#region recipe-gallery/google-maps-src.ts?raw
var google_maps_src_default = "import Swal from 'sweetalert2'\nimport 'sweetalert2/themes/embed-iframe.css'\n\nSwal.fire({\n  theme: 'embed-iframe',\n  title: 'Google Maps',\n  html: '<iframe frameborder=\"0\" src=\"https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed\"></iframe>',\n  showCloseButton: true,\n  showConfirmButton: false,\n  width: 800,\n})\n";
//#endregion
export { google_maps_src_default as default };
