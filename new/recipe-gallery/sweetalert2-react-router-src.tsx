import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Home = () => {
  const navigate = useNavigate()

  const showSwal = () => {
    withReactContent(Swal).fire({
      html: (
        <a
          href="/about"
          onClick={(event) => {
            event.preventDefault()
            Swal.close()
            navigate('/about')
          }}
        >
          Navigate to /about
        </a>
      ),
    })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={showSwal}>Show SweetAlert2 modal</button>
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
