/* global Swal, MutationObserver, FileReader, fetch, _bsa, _native */
import hljs from '../node_modules/highlight.js/lib/highlight'
import hljsJS from '../node_modules/highlight.js/lib/languages/javascript'
import hljsXML from '../node_modules/highlight.js/lib/languages/xml'
import '../node_modules/highlight.js/styles/atom-one-dark.css'

const $ = document.querySelector.bind(document)

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
    var currentVersion = document.getElementById('current-version')
    currentVersion.innerText = stats.latestRelease
    currentVersion.setAttribute('aria-label', currentVersion.getAttribute('aria-label') + stats.latestRelease)

    var latestUpdate = document.getElementById('latest-update')
    latestUpdate.innerText = stats.recentActivity
    latestUpdate.setAttribute('aria-label', latestUpdate.getAttribute('aria-label') + stats.recentActivity)

    var downloads = document.getElementById('downloads-last-month')
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

$('.showcase.normal button').onclick = () => {
  window.alert('You clicked the button!')
}

$('.showcase.sweet button').onclick = () => {
  Swal.fire('Good job!', 'You clicked the button!', 'success')
}

$('.paypal').onclick = () => {
  Swal.fire({
    title: 'How would you like to pay?',
    input: 'select',
    inputOptions: {
      eur: 'In Euros',
      usd: 'In US Dollars',
      '': 'In other currencies'
    },
    inputValue: 'eur',
    confirmButtonText: 'Pay with PayPal'
  }).then((result) => {
    if (result.value !== undefined) {
      window.location.assign('https://www.paypal.me/limonte/5' + result.value)
    }
  })

  return false
}

$('.cryptocurrencies').onclick = () => {
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

  return false
}

$('.examples .message button').onclick = () => {
  Swal.fire('Any fool can use a computer')
}

$('.examples .timer button').onclick = () => {
  let timerInterval
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <strong></strong> milliseconds.',
    timer: 2000,
    onBeforeOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong').textContent = Swal.getTimerLeft()
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}

$('.examples .html button').onclick = () => {
  Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    type: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}

$('.examples #position button').onclick = () => {
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

$('.examples .rtl button').onclick = () => {
  Swal.fire({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    target: document.getElementById('rtl-container')
  })
}

$('#custom-animation button').onclick = () => {
  Swal.fire({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: {
      popup: 'animated tada'
    }
  })
}

$('.examples .title-text button').onclick = () => {
  Swal.fire('The Internet?', 'That thing is still around?', 'question')
}

$('.examples .error button').onclick = () => {
  Swal.fire({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>'
  })
}

$('.examples #long-text button').onclick = () => {
  Swal.fire({
    imageUrl: 'https://placeholder.pics/svg/300x1500',
    imageHeight: 1500,
    imageAlt: 'A tall image'
  })
}

$('.examples .warning.confirm button').onclick = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire('Deleted!', 'Your file has been deleted!', 'success')
    }
  })
}

$('.examples .bootstrap-buttons button').onclick = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: 'Buttons below are styled with Bootstrap classes',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

$('.examples .custom-image button').onclick = () => {
  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200/?random',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
}

$('.examples .custom-width-padding-background button').onclick = () => {
  Swal.fire({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '3em',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      center left
      no-repeat
    `
  })
}

$('.input-type-text').onclick = () => {
  (async function getIpAddress () {
    const ipAPI = 'https://api.ipify.org?format=json'

    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)

    const {value: ipAddress} = await Swal.fire({
      title: 'Enter your IP address',
      input: 'text',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    })
    ipAddress && Swal.fire(`Your IP address is ${ipAddress}`)
  })()
}

$('.input-type-email').onclick = () => {
  (async function getEmail () {
    const {value: email} = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    })
    email && Swal.fire({html: 'Entered email: <strong>' + email + '</strong>'})
  })()
}

$('.input-type-url').onclick = () => {
  (async function getUrl () {
    const {value: url} = await Swal.fire({
      input: 'url',
      inputPlaceholder: 'Enter the URL'
    })
    url && Swal.fire({html: 'Entered URL: <strong>' + url + '</strong>'})
  })()
}

$('.input-type-password').onclick = () => {
  (async function getPassword () {
    const {value: password} = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        'maxlength': 10,
        'autocapitalize': 'off',
        'autocorrect': 'off'
      }
    })
    password && Swal.fire({html: 'Entered password: <strong>' + password + '</strong>'})
  })()
}

$('.input-type-textarea').onclick = () => {
  (async function getMessage () {
    const {value: text} = await Swal.fire({
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
    const {value: fruit} = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        'apples': 'Apples',
        'bananas': 'Bananas',
        'grapes': 'Grapes',
        'oranges': 'Oranges'
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
    fruit && Swal.fire({html: 'You selected: <strong>' + fruit + '</strong>'})
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
      }, 2000)
    })

    const {value: color} = await Swal.fire({
      title: 'Select color',
      input: 'radio',
      inputOptions: inputOptionsPromise,
      inputValidator: (value) => {
        return !value && 'You need to choose something!'
      }
    })

    color && Swal.fire({html: 'You selected: <strong>' + color + '</strong>'})
  })()
}

$('.input-type-checkbox').onclick = () => {
  (async function acceptTerms () {
    const {value: accept} = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue <i class="fa fa-arrow-right" style="margin-left: 10px"></i>',
      inputValidator: (result) => {
        return !result && 'To continue you need to agree with T&amp;C'
      }
    })

    accept && Swal.fire({text: 'You agreed with T&C :)'})
  })()
}

$('.input-type-file').onclick = () => {
  (async function getColor () {
    const {value: file} = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
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
    const {value: formValues} = await Swal.fire({
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

$('.examples .ajax-request button').onclick = () => {
  Swal.fire({
    title: 'Submit your Github username to run ajax request',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: (username) => {
      return fetch(`//api.github.com/users/${username}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(error)
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
}

$('.examples .chaining-modals button').onclick = () => {
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  }).queue([
    {title: 'Question 1', text: 'Chaining swal2 modals is easy'},
    'Question 2',
    'Question 3'
  ]).then((result) => {
    if (result.value) {
      Swal.fire({
        title: 'All done!',
        html: 'Your answers: <pre><code>' + JSON.stringify(result.value) + '</code></pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}

$('.examples .dynamic-queue button').onclick = () => {
  Swal.queue([
    {
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => Swal.insertQueueStep(data.ip))
          .catch(() => Swal.insertQueueStep({type: 'error', title: 'Unable to get your public IP'}))
      }
    }
  ])
}

$('.examples .timer-functions button').onclick = () => {
  let timerInterval
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <strong></strong> seconds.<br/><br/>' +
    '<button id="increase" class="btn btn-warning">I need 5 more seconds!</button><br/>' +
    '<button id="stop" class="btn btn-danger">Please stop the timer!!</button><br/>' +
    '<button id="resume" class="btn btn-success" disabled>Phew... you can restart now!</button><br/>' +
    '<button id="toggle" class="btn btn-primary">Toggle</button>',
    timer: 10000,
    onBeforeOpen: () => {
      const content = Swal.getContent()
      const $ = content.querySelector.bind(content)

      const stop = $('#stop')
      const resume = $('#resume')
      const toggle = $('#toggle')
      const increase = $('#increase')

      Swal.showLoading()

      function toggleButtons () {
        stop.disabled = !Swal.isTimerRunning()
        resume.disabled = Swal.isTimerRunning()
      }

      stop.addEventListener('click', () => {
        Swal.stopTimer()
        toggleButtons()
      })

      resume.addEventListener('click', () => {
        Swal.resumeTimer()
        toggleButtons()
      })

      toggle.addEventListener('click', () => {
        Swal.toggleTimer()
        toggleButtons()
      })

      increase.addEventListener('click', () => {
        Swal.increaseTimer(5000)
      })
      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = (Swal.getTimerLeft() / 1000)
            .toFixed(0)
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  })
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
observer.observe($('body > .bsa-cpc'), {childList: true})

// Do not show 'Add to homescreen' prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
})

Array.from(document.querySelectorAll('pre.code-sample')).forEach(pre => {
  pre.addEventListener('click', (e) => {
    if (e.offsetY < 0) {
      const codepenValue = {
        js_external: 'https://cdn.jsdelivr.net/npm/sweetalert2;https://cdn.jsdelivr.net/npm/promise-polyfill',
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

      document.getElementById('codepen-data').value = JSON.stringify(codepenValue)
      document.getElementById('codepen-form').submit()
    }
  })
})

// BuySellAdd native.js (fixed footer)
_native.init('CK7DKKQI', {
  targetClass: 'native-js'
})
