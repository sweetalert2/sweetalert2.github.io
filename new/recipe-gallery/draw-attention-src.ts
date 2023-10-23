import Swal from 'sweetalert2'
import 'animate.css'

Swal.fire({
  title: 'I will shake when you click outside!',
  allowOutsideClick: () => {
    const popup = Swal.getPopup() as HTMLElement
    popup.classList.remove('swal2-show')
    setTimeout(() => {
      popup.classList.add('animate__animated', 'animate__headShake')
    })
    setTimeout(() => {
      popup.classList.remove('animate__animated', 'animate__headShake')
    }, 500)
    return false
  },
})
