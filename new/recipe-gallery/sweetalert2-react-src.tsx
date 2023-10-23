import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success',
})
