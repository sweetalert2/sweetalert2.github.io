import Swal from 'sweetalert2'
import * as pdfjsLib from 'pdfjs-dist'
import './styles.css'

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

Swal.fire({
  title: 'PDF Viewer',
  html: '<canvas id="pdfCanvas"></canvas>',
  width: 800,
  showCloseButton: true,
  showConfirmButton: false,
  didOpen: async () => {
    const pdf = await pdfjsLib.getDocument('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf').promise
    const page = await pdf.getPage(1)
    const viewport = page.getViewport({ scale: 1.5 })
    const canvas = Swal.getPopup()!.querySelector('#pdfCanvas') as HTMLCanvasElement
    canvas.height = viewport.height
    canvas.width = viewport.width
    await page.render({ canvasContext: canvas.getContext('2d')!, viewport }).promise
  },
})
