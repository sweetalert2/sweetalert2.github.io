import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = () => {
  const [swalShown, setSwalShown] = useState(false)

  const showSwal = () => {
    Swal.fire({
      didOpen: () => setSwalShown(true),
      didClose: () => setSwalShown(false),
    })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={showSwal}>Show SweetAlert2 modal</button>
      {/* Use createPortal to use the same state between your app and SweetAlert2 */}
      {swalShown &&
        createPortal(
          <Link to="/about" onClick={() => Swal.close()}>
            Go to About
          </Link>,
          Swal.getHtmlContainer()!
        )}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Link to="/">Home</Link> {' | '}
    <Link to="/about">About</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </BrowserRouter>
)
