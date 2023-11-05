import Swal from 'sweetalert2'
import './styles.css'

Swal.fire({
  title: 'Enter your name',
  input: 'text',
  customClass: {
    validationMessage: 'my-validation-message',
  },
  preConfirm: (value) => {
    if (!value) {
      Swal.showValidationMessage('<i class="fa fa-info-circle"></i> Your name is required')
    }
  },
})
