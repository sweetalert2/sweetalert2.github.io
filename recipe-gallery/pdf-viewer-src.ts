import Swal from 'sweetalert2'
import './styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const pdfjsLib: any

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist/build/pdf.worker.min.mjs'

Swal.fire({
  title: 'PDF Viewer',
  html: '<canvas id="pdfCanvas"></canvas>',
  width: 800,
  showCloseButton: true,
  showConfirmButton: false,
  didOpen: async () => {
    const pdf = await pdfjsLib.getDocument('https://pdfobject.com/pdf/sample.pdf').promise
    const page = await pdf.getPage(1)
    const viewport = page.getViewport({ scale: 1.5 })
    const canvas = Swal.getPopup()!.querySelector('#pdfCanvas') as HTMLCanvasElement
    canvas.height = viewport.height
    canvas.width = viewport.width
    canvas.onclick = () => canvas.requestFullscreen()
    await page.render({ canvasContext: canvas.getContext('2d')!, viewport }).promise
  },
})
