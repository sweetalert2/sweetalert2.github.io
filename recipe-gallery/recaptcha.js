window.showSweetAlertRecaptcha = () => {
  Swal.fire({
    title: 'SweetAlert2 + Recaptcha',
    html: '<div id="recaptcha"></div>',
    onOpen: function () {
      grecaptcha.render('recaptcha', {
        'sitekey': '6LdvplUUAAAAAK_Y5M_wR7s-UWuiSEdVrv8K-tCq'
      })
    },
    preConfirm: function () {
      if (grecaptcha.getResponse().length === 0) {
        Swal.showValidationMessage(`Please verify that you're not a robot`)
      }
    }
  })
}
window.showExample = window.showSweetAlertRecaptcha
