window.showSweetAlertRecaptcha = () => {
frenchkiss.set('en', { hello: 'Hello!' })
frenchkiss.set('ru', { hello: 'Привет!' })

Swal.fire({
  title: frenchkiss.t('hello', {}, 'ru'),
  input: 'select',
  inputOptions: {
    en: 'English',
    ru: 'Russian'
  },
  inputValue: 'ru',
  didOpen: () => {
    Swal.getInput().addEventListener('change', () => {
      Swal.getTitle().innerText = frenchkiss.t('hello', {}, Swal.getInput().value)
    })
  }
})
}
window.showExample = window.showSweetAlertRecaptcha
