//#region recipe-gallery/blurred-backdrop-src.ts?raw
var blurred_backdrop_src_default = "import Swal from 'sweetalert2'\nimport './styles.css'\n\ndocument.body.innerHTML = `\n  <div>lorem ipsum dolor sit amet consectetur adipisicing elit</div>\n`\n\nSwal.fire({\n  title: 'I will blur the document with my backdrop',\n})\n";
//#endregion
export { blurred_backdrop_src_default as default };
