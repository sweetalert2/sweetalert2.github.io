import Swal from 'sweetalert2'
import './styles.css'

function loadScript(src: string) {
  return new Promise<void>((resolve) => {
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    document.head.appendChild(s)
  })
}

Swal.fire({
  title: 'PDF Viewer',
  html: '<canvas id="pdfCanvas"></canvas>',
  width: 800,
  showCloseButton: true,
  showConfirmButton: false,
  didOpen: async () => {
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.js')
    const pdfjsLib = (window as any).pdfjsLib // eslint-disable-line @typescript-eslint/no-explicit-any
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs'
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
