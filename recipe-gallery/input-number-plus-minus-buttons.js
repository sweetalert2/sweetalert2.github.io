window.showExample = () => {
Swal.fire({
  title: 'Enter the amount',
  html: '<duet-number-input value="0" min="-999999" step="1" unit="€" />',
  didOpen: () => {
    const input = Swal.getContainer().querySelector('duet-number-input')
    input.addEventListener('duetChange', (e) => {
      const value = e.detail.value
      Swal.getConfirmButton().disabled = value < 0
    })
  },
  preConfirm: () => {
    const value = Swal.getContainer().querySelector('duet-number-input').value
    return value < 0 ? Swal.showValidationMessage('Please enter a positive value') : value
  },
}).then(function (result) {
  Swal.fire(`Entered amount: ${result.value}`)
})
}
