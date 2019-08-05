/* global Swal, MutationObserver, FileReader, fetch, _bsa, _native */
import hljs from 'highlight.js/lib/highlight'
import hljsJS from 'highlight.js/lib/languages/javascript'
import hljsXML from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'
import examples from './examples'

const $ = document.querySelector.bind(document)

// Render <pre> elements for examples
Object.values(examples).forEach(example => {
  const preElement = $(`pre[data-example-id='${example.id}']`)
  preElement.className = 'code-sample'
  if (example.fnString.slice(0, 5) === 'async') {
    preElement.dataset.codepenJsBefore = '(async () => {\n'
    preElement.dataset.codepenJsAfter = '\n})()'
  }
  const codeElement = document.createElement('code')
  codeElement.className = 'lang-javascript'
  codeElement.innerText = unindent(example.fnString.split('\n').slice(1, -1)).join('\n')
  preElement.appendChild(codeElement)
})
function unindent (lines) {
  const baseIndent = [...lines[0]].findIndex(char => char !== ' ')
  return lines.map(line => line.slice(baseIndent))
}

// Syntax highlighting with highlight.js
hljs.registerLanguage('javascript', hljsJS)
hljs.registerLanguage('xml', hljsXML)
hljs.initHighlightingOnLoad()

document.addEventListener('DOMContentLoaded', () => {
  var loadStyleSheet = (src) => { // eslint-disable-line
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
  }

  loadStyleSheet('./styles/buysellads.css')
  loadStyleSheet('./styles/carbon-ads.css')
  loadStyleSheet('./styles/native-js.css')
  loadStyleSheet('./styles/bootstrap4-buttons.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/animate.css@3.6.1/animate.min.css')
})

var stats = {}

// latest release
fetch('https://api.github.com/repos/sweetalert2/sweetalert2/tags')
  .then(response => response.json())
  .then(response => {
    if (!response[0] || !response[0].name) {
      return
    }
    stats.latestRelease = response[0].name
    showStats()
  })

// recent activity
fetch('https://api.github.com/repos/sweetalert2/sweetalert2/commits')
  .then(response => response.json())
  .then(response => {
    if (!response[0] || !response[0].commit) {
      return
    }
    var recentActivity = response[0].commit.author.date
    recentActivity = new Date(recentActivity)
    var today = new Date()
    var diffDays = parseInt((today - recentActivity) / (1000 * 60 * 60 * 24))
    switch (diffDays) {
      case 0: recentActivity = 'today'; break
      case 1: recentActivity = 'yesterday'; break
      default: recentActivity = diffDays + ' days ago'; break
    }
    stats.recentActivity = recentActivity
    showStats()
  })

// number of downloads last month
fetch('https://api.npmjs.org/downloads/point/last-month/sweetalert2')
  .then(response => response.json())
  .then(response => {
    stats.downloadsLastMonth = response.downloads.toLocaleString()
    showStats()
  })

function showStats () {
  if (stats.latestRelease && stats.recentActivity && stats.downloadsLastMonth) {
    var currentVersion = $('#current-version')
    currentVersion.innerText = stats.latestRelease
    currentVersion.setAttribute('aria-label', currentVersion.getAttribute('aria-label') + stats.latestRelease)

    var latestUpdate = $('#latest-update')
    latestUpdate.innerText = stats.recentActivity
    latestUpdate.setAttribute('aria-label', latestUpdate.getAttribute('aria-label') + stats.recentActivity)

    var downloads = $('#downloads-last-month')
    downloads.innerText = stats.downloadsLastMonth
    downloads.setAttribute('aria-label', downloads.getAttribute('aria-label') + stats.downloadsLastMonth)

    document.getElementsByClassName('stats')[0].style.opacity = 1
  }
}

function ordinalSuffix (i) {
  i = parseInt(i)
  const j = i % 10
  const k = i % 100
  if (j === 1 && k !== 11) {
    return i + 'st'
  }
  if (j === 2 && k !== 12) {
    return i + 'nd'
  }
  if (j === 3 && k !== 13) {
    return i + 'rd'
  }
  return i + 'th'
}

fetch('https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month')
  .then(response => response.json())
  .then(response => {
    $('.jsdelivr-info').innerHTML =
      'sweetalert2 is the <strong>' + ordinalSuffix(response.rank) + '</strong>' +
      ' most popular package on jsDelivr, with ' +
      '<strong>' + parseInt(response.total).toLocaleString() + '</strong>' +
      ' CDN hits in the last month'
  })

$('.cryptocurrencies') && $('.cryptocurrencies').addEventListener('click', (e) => {
  const wallets = {
    bitcoin: '12BxefvPMtHePgfPRDL1SaZYSG4GwQmWoP',
    ethereum: '0x36e2b10666e2c0dc343901895ba3697b5d3214d1',
    bitcoincash: 'qqxs402qszgwuue00gwxw996lzhpa8up2unqm0y46g'
  }
  const showCryptocurrency = () => {
    const cryptocurrency = Swal.getInput().value
    const wallet = wallets[cryptocurrency]
    Swal.update({
      html: `
        <strong class="${cryptocurrency}">${wallet}</strong>
        <a href="${cryptocurrency}:${wallet}">
          <img src="/images/qr-code-${cryptocurrency}.png" class="cryptocurrency-qr-code">
        </a>
      `
    })
  }
  Swal.fire({
    title: 'Choose your cryptocurrency',
    input: 'select',
    inputOptions: {
      bitcoin: 'Bitcoin',
      ethereum: 'Ether',
      bitcoincash: 'Bitcoin Cash'
    },
    inputValue: 'bitcoin',
    onOpen: () => {
      Swal.getInput().onchange = showCryptocurrency
      showCryptocurrency()
    }
  })

  e.preventDefault()
})

$('.input-type-email').onclick = () => {
  (async function getEmail () {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    })
    email && Swal.fire({ html: 'Entered email: <strong>' + email + '</strong>' })
  })()
}

$('.input-type-url').onclick = () => {
  (async function getUrl () {
    const { value: url } = await Swal.fire({
      input: 'url',
      inputPlaceholder: 'Enter the URL'
    })
    url && Swal.fire({ html: 'Entered URL: <strong>' + url + '</strong>' })
  })()
}

$('.input-type-password').onclick = () => {
  (async function getPassword () {
    const { value: password } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })
    password && Swal.fire({ html: 'Entered password: <strong>' + password + '</strong>' })
  })()
}

$('.input-type-textarea').onclick = () => {
  (async function getMessage () {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    text && Swal.fire(text)
  })()
}

$('.input-type-select').onclick = () => {
  (async function getFruit () {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            resolve()
          } else {
            resolve('You need to select oranges :)')
          }
        })
      }
    })
    fruit && Swal.fire({ html: 'You selected: <strong>' + fruit + '</strong>' })
  })()
}

$('.input-type-radio').onclick = () => {
  (async function getColor () {
    const inputOptionsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          '#FF0000': 'Red',
          '#00FF00': 'Green',
          '#0000FF': 'Blue'
        })
      }, 1000)
    })

    const { value: color } = await Swal.fire({
      title: 'Select color',
      input: 'radio',
      inputOptions: inputOptionsPromise,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!'
        }
      }
    })

    color && Swal.fire({ html: 'You selected: <strong>' + color + '</strong>' })
  })()
}

$('.input-type-checkbox').onclick = () => {
  (async function acceptTerms () {
    const { value: accept } = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue <i class="fa fa-arrow-right" style="margin-left: 10px"></i>',
      inputValidator: (result) => {
        return !result && 'To continue you need to agree with T&amp;C'
      }
    })

    accept && Swal.fire({ text: 'You agreed with T&C :)' })
  })()
}

$('.input-type-file').onclick = () => {
  (async function getColor () {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture'
        })
      }
      reader.readAsDataURL(file)
    }
  })()
}

$('.input-type-range').onclick = () => {
  Swal.fire({
    title: 'How old are you?',
    type: 'question',
    input: 'range',
    inputAttributes: {
      min: 8,
      max: 120,
      step: 1
    },
    inputValue: 25
  })
}

$('.input-type-multiple').onclick = () => {
  (async function getForm () {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="first input field">' +
        '<input id="swal-input2" class="swal2-input" placeholder="second input field">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })
    formValues && Swal.fire(JSON.stringify(formValues))
  })()
}

$('.examples .mixin button').onclick = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    footer: ''
  })

  Toast.fire({
    type: 'success',
    title: 'Signed in successfully'
  })
}

Array.from(document.querySelectorAll('.popup-types button')).forEach(button => {
  button.onclick = (e) => {
    var type = e.target.getAttribute('class').slice(5)
    Swal.fire(type + '!', '', type)
  }
})

// BuySellAds
if (typeof _bsa !== 'undefined' && _bsa) {
  _bsa.init('default', 'CKYDK5QE', 'placement:sweetalert2githubio', {
    target: '.bsa-cpc',
    align: 'horizontal',
    disable_css: 'true'
  })
}

function setBuySellAdsFooter () {
  if (typeof _bsa !== 'undefined' && _bsa && $('body > .bsa-cpc').textContent) {
    window.Swal = Swal.mixin({
      footer: $('body > .bsa-cpc')
    })
  }
}

var observer = new MutationObserver(setBuySellAdsFooter)
observer.observe($('body > .bsa-cpc'), { childList: true })

// Do not show 'Add to homescreen' prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
})

Array.from(document.querySelectorAll('pre.code-sample')).forEach(pre => {
  pre.addEventListener('click', (e) => {
    if (e.offsetY < 0) {
      const codepenValue = {
        js_external: 'https://cdn.jsdelivr.net/npm/sweetalert2',
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      }
      if (pre.getAttribute('data-codepen-html')) {
        codepenValue.html = pre.getAttribute('data-codepen-html')
      }
      if (pre.getAttribute('data-codepen-css-external')) {
        codepenValue.css_external = pre.getAttribute('data-codepen-css-external')
      }

      codepenValue.js = ''
      if (pre.getAttribute('data-codepen-js-before')) {
        codepenValue.js = pre.getAttribute('data-codepen-js-before') + '\n'
      }
      codepenValue.js += pre.innerText.replace(/\/images/g, window.location.href + 'images')
      if (pre.getAttribute('data-codepen-js-after')) {
        codepenValue.js += '\n' + pre.getAttribute('data-codepen-js-after')
      }

      $('#codepen-data').value = JSON.stringify(codepenValue)
      $('#codepen-form').submit()
    }
  })
})

// Theme selector
$('#theme').addEventListener('change', () => {
  $('#theme-styles').setAttribute('href', $('#theme').value)
})

// Version selector
$('#version').addEventListener('change', () => {
  switch ($('#version').value) {
    case '7.x':
      window.location.assign('v7.html')
      break
    default:
      window.location.assign('/')
      break
  }
})

// BuySellAdd native.js (fixed footer)
_native.init('CK7DKKQI', {
  targetClass: 'native-js'
})

// Define window.executeExample for use in HTML
window.executeExample = async (id) => {
  const exampleFn = examples[id].fn
  console.log(`Executing example ${id}...`)
  try {
    await exampleFn()
  } catch (error) {
    console.error(error)
  }
  console.log(`Executed example ${id}.`)
}
