//#region recipe-gallery/modal-with-iframe-src.ts?raw
var modal_with_iframe_src_default = "import Swal from 'sweetalert2'\nimport 'sweetalert2/themes/embed-iframe.css' // import the embed-iframe theme\n\nSwal.fire({\n  theme: 'embed-iframe', // set the theme\n  title: 'Modal with iframe',\n  html: '<iframe frameborder=\"0\" src=\"https://www.youtube.com/embed/6JxAis_v2mw\"></iframe>',\n  showCloseButton: true,\n  showConfirmButton: false,\n  width: 1000,\n})\n";
//#endregion
export { modal_with_iframe_src_default as default };
