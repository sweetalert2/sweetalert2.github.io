import Swal from 'sweetalert2'
import i18next from 'i18next'

i18next.init({
  lng: 'fr',
  resources: {
    en: {
      translation: {
        hello: 'Hello',
      },
    },
    fr: {
      translation: {
        hello: 'Bonjour',
      },
    },
  },
})

Swal.fire({
  title: i18next.t('hello'),
  input: 'select',
  inputOptions: {
    en: 'English',
    fr: 'French',
  },
  inputValue: 'fr',
  didOpen: () => {
    Swal.getInput()!.addEventListener('change', () => {
      i18next.changeLanguage(Swal.getInput()!.value)
      Swal.getTitle()!.innerText = i18next.t('hello')
    })
  },
})
