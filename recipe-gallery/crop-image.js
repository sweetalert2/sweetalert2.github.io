import { throttle } from 'https://cdn.jsdelivr.net/npm/@github/mini-throttle@2.1.0/dist/index.js'
window.showExample = () => {
Swal.fire({
  title: 'SweetAlert2 + cropperjs',
  html: `
    <img id="preview" src="/images/picture.jpg">
    <div>
      <img id="cropperjs" src="/images/picture.jpg">
    </div>
  `,
  willOpen: () => {
    const image = Swal.getPopup().querySelector('#cropperjs')
    const cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      crop: throttle(function () {
        const croppedCanvas = cropper.getCroppedCanvas()
        const preview = Swal.getHtmlContainer().querySelector('#preview')
        preview.src = croppedCanvas.toDataURL()
      }, 25)
    })
  },
  preConfirm: () => {
    return Swal.getHtmlContainer().querySelector('#preview').src
  }
})
}
