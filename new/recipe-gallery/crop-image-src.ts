import Cropper from 'cropperjs'
import Swal from 'sweetalert2'
import { throttle } from '@github/mini-throttle'
import './styles.css'
import 'cropperjs/dist/cropper.css'

Swal.fire({
  title: 'SweetAlert2 + Cropper.js',
  html: `
    <img id="preview" src="https://sweetalert2.github.io/images/picture.jpg">
    <div>
      <img id="cropperjs" src="https://sweetalert2.github.io/images/picture.jpg">
    </div>
  `,
  willOpen: () => {
    const image = Swal.getPopup()!.querySelector('#cropperjs') as HTMLImageElement
    const cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      crop: throttle(function () {
        const croppedCanvas = cropper.getCroppedCanvas()
        const preview = Swal.getPopup()!.querySelector('#preview') as HTMLImageElement
        preview.src = croppedCanvas.toDataURL()
      }, 25),
    })
  },
  preConfirm: () => {
    return (Swal.getPopup()!.querySelector('#preview') as HTMLImageElement).src
  },
})
