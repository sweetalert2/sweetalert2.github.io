const blurredBackdropSrc = "import Swal from 'sweetalert2'\nimport './styles.css'\n\ndocument.body.innerHTML = `\n  <div>lorem ipsum dolor sit amet consectetur adipisicing elit</div>\n`\n\nSwal.fire({\n  title: 'I will blur the document with my backdrop',\n})\n";

export { blurredBackdropSrc as default };
