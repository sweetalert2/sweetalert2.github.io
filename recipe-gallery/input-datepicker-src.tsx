import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import Swal from 'sweetalert2'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import type { DateRange } from 'react-day-picker'

function App() {
  const [swalShown, setSwalShown] = useState(false)
  const [range, setRange] = useState<DateRange | undefined>()

  function showSwalWithReactDayPicker() {
    Swal.fire({
      title: 'Select a range of dates',
      didOpen: () => setSwalShown(true),
      didClose: () => setSwalShown(false),
    })
  }

  return (
    <>
      <button onClick={showSwalWithReactDayPicker}>Show SweetAlert2</button>
      {/* Use createPortal to use the same state between your app and SweetAlert2 */}
      {swalShown &&
        createPortal(
          <DayPicker mode="range" selected={range} onSelect={setRange} style={{ display: 'inline-block' }} />,
          Swal.getHtmlContainer()!
        )}
      <div>
        Your selection: {range?.from && format(range.from, 'PPP')} - {range?.to && format(range.to, 'PPP')}
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
