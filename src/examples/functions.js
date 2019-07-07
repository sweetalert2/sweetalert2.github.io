/* globals Swal, alert, fetch */

module.exports = {
  // Top of page
  normalAlert () {
    alert('You clicked the button!')
  },
  sweetAlert () {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  },

  // Input types
  async textInput () {
    const ipAPI = 'https://api.ipify.org?format=json'

    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    const { value: ipAddress } = await Swal.fire({
      title: 'Enter your IP address',
      input: 'text',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })

    ipAddress && Swal.fire(`Your IP address is ${ipAddress}`)
  }
}
