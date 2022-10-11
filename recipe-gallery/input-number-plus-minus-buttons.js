window.showExample = () => {
Swal.fire({
  title: 'Enter the amount',
  html: '<duet-number-input value="0" min="-999999" step="1" unit="€" />',
  didOpen: () => {
    const input = Swal.getContainer().querySelector('duet-number-input')
    input.addEventListener('duetChange', (e) => {
      const value = e.detail.value
      if (value < 0) {
        Swal.getConfirmButton().disabled = true
      } else {
        Swal.getConfirmButton().disabled = false
      }
    })
  },
  preConfirm: () => {
    const value = Swal.getContainer().querySelector('duet-number-input').value
    if (value < 0) {
      Swal.showValidationMessage('Please enter a positive number')
    }
    return value
  },
}).then(function (result) {
  Swal.fire(`Entered amount: ${result.value}`)
})
}
