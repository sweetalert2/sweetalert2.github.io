const i18nL10nSrc = "import Swal from 'sweetalert2'\nimport i18next from 'i18next'\n\ni18next.init({\n  lng: 'fr',\n  resources: {\n    en: {\n      translation: {\n        hello: 'Hello',\n      },\n    },\n    fr: {\n      translation: {\n        hello: 'Bonjour',\n      },\n    },\n  },\n})\n\nSwal.fire({\n  title: i18next.t('hello'),\n  input: 'select',\n  inputOptions: {\n    en: 'English',\n    fr: 'French',\n  },\n  inputValue: 'fr',\n  didOpen: () => {\n    Swal.getInput()!.addEventListener('change', () => {\n      i18next.changeLanguage(Swal.getInput()!.value)\n      Swal.getTitle()!.innerText = i18next.t('hello')\n    })\n  },\n})\n";

export { i18nL10nSrc as default };
