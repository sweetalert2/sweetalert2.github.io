window.showExample = () => {
let flatpickrInstance

Swal.fire({
  title: 'Please enter departure date',
  html: '<input class="swal2-input" id="expiry-date">',
  stopKeydownPropagation: false,
  preConfirm: () => {
    if (flatpickrInstance.selectedDates[0] < new Date()) {
      Swal.showValidationMessage(`The departure date can't be in the past`)
    }
  },
  willOpen: () => {
    flatpickrInstance = flatpickr(
      Swal.getPopup().querySelector('#expiry-date')
    )
  }
})
}
