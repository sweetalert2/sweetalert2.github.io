//#region recipe-gallery/draw-attention-src.ts?raw
var draw_attention_src_default = "import Swal from 'sweetalert2'\nimport 'animate.css'\n\nSwal.fire({\n  title: 'I will shake when you click outside!',\n  allowOutsideClick: () => {\n    const popup = Swal.getPopup() as HTMLElement\n    popup.classList.remove('swal2-show')\n    setTimeout(() => {\n      popup.classList.add('animate__animated', 'animate__headShake')\n    })\n    setTimeout(() => {\n      popup.classList.remove('animate__animated', 'animate__headShake')\n    }, 500)\n    return false\n  },\n})\n";
//#endregion
export { draw_attention_src_default as default };
