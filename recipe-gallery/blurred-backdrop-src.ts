import Swal from 'sweetalert2'
import './styles.css'

document.body.innerHTML = `
  <div>lorem ipsum dolor sit amet consectetur adipisicing elit</div>
`

Swal.fire({
  title: 'I will blur the document with my backdrop',
})
