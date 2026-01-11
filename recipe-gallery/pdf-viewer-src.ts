import Swal from 'sweetalert2'
import * as pdfjsLib from 'pdfjs-dist'
import './styles.css'

// Set up the PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.530/build/pdf.worker.mjs'

Swal.fire({
  title: 'PDF Preview',
  html: `
    <div id="pdf-controls">
      <button id="prev-page">Previous</button>
      <span id="page-info">Page <span id="page-num"></span> of <span id="page-count"></span></span>
      <button id="next-page">Next</button>
    </div>
    <canvas id="pdfCanvas"></canvas>
  `,
  width: 'auto',
  showCloseButton: true,
  showConfirmButton: false,
  didOpen: async () => {
    const pdfUrl = 'https://pdfobject.com/pdf/sample.pdf'
    const loadingTask = pdfjsLib.getDocument(pdfUrl)
    const pdf = await loadingTask.promise

    let currentPage = 1
    const totalPages = pdf.numPages

    const canvas = document.getElementById('pdfCanvas') as HTMLCanvasElement
    const context = canvas.getContext('2d')!
    const pageNumSpan = document.getElementById('page-num')!
    const pageCountSpan = document.getElementById('page-count')!
    const prevButton = document.getElementById('prev-page') as HTMLButtonElement
    const nextButton = document.getElementById('next-page') as HTMLButtonElement

    pageCountSpan.textContent = String(totalPages)

    async function renderPage(pageNumber: number) {
      const page = await pdf.getPage(pageNumber)
      const viewport = page.getViewport({ scale: 1.5 })

      canvas.height = viewport.height
      canvas.width = viewport.width

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        canvas: canvas,
      }

      await page.render(renderContext).promise
      pageNumSpan.textContent = String(pageNumber)

      prevButton.disabled = pageNumber <= 1
      nextButton.disabled = pageNumber >= totalPages
    }

    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--
        renderPage(currentPage)
      }
    })

    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++
        renderPage(currentPage)
      }
    })

    // Render the first page
    await renderPage(currentPage)
  },
})
