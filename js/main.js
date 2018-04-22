/* global swal, fetch, MutationObserver, FileReader, _bsa, gtag */

document.addEventListener('DOMContentLoaded', () => {
  var loadStyleSheet = (src) => { // eslint-disable-line
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
  }

  loadStyleSheet('./styles/carbon-ads.css')
  loadStyleSheet('./styles/bootstrap4-buttons.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/animate.css@3.6.1/animate.min.css')

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
  }
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

document.querySelector('.showcase.normal button').onclick = () => {
  window.alert('You clicked the button!')
}

document.querySelector('.showcase.sweet button').onclick = () => {
  swal('Good job!', 'You clicked the button!', 'success')
}

document.querySelector('.paypal').onclick = () => {
  swal({
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

document.querySelector('.examples .message button').onclick = () => {
  swal('Any fool can use a computer')
}

document.querySelector('.examples .timer button').onclick = () => {
  swal({
    title: 'Auto close alert!',
    text: 'I will close in 5 seconds.',
    timer: 5000,
    onOpen: () => {
      swal.showLoading()
    }
  }).then((result) => {
    if (result.dismiss === swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}

document.querySelector('.examples .html button').onclick = () => {
  swal({
    title: '<i>HTML</i> <u>example</u>',
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

document.querySelector('.examples #position button').onclick = () => {
  swal({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

document.querySelector('.examples .rtl button').onclick = () => {
  swal({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    target: document.getElementById('rtl-container')
  })
}

document.querySelector('#custom-animation button').onclick = () => {
  swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada'
  })
}

document.querySelector('.examples .title-text button').onclick = () => {
  swal('The Internet?', 'That thing is still around?', 'question')
}

document.querySelector('.examples .error button').onclick = () => {
  swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>'
  })
}

document.querySelector('.examples #long-text button').onclick = () => {
  swal({
    imageUrl: './images/robot.jpg',
    imageHeight: 1512,
    imageAlt: 'A tall image'
  })
}

document.querySelector('.examples .warning.confirm button').onclick = () => {
  swal({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      swal('Deleted!', 'Your file has been deleted!', 'success')
    }
  })
}

document.querySelector('.examples .bootstrap-buttons button').onclick = () => {
  swal({
    title: 'Are you sure?',
    text: 'Buttons below are styled with Bootstrap classes',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (result.dismiss === swal.DismissReason.cancel) {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}

document.querySelector('.examples .custom-image button').onclick = () => {
  swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200/?random',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
}

document.querySelector('.examples .custom-width-padding-background button').onclick = () => {
  swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: 100,
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      center left
      no-repeat
    `
  })
}

document.querySelector('.input-type-text').onclick = () => {
  (async function getName () {
    const {value: name} = await swal({
      title: 'What is your name?',
      input: 'text',
      inputPlaceholder: 'Enter your name or nickname',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    })
    name && swal({type: 'success', title: `Hi, ${name}`})
  })()
}

document.querySelector('.input-type-email').onclick = () => {
  (async function getEmail () {
    const {value: email} = await swal({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    })
    email && swal({html: 'Entered email: <strong>' + email + '</strong>'})
  })()
}

document.querySelector('.input-type-url').onclick = () => {
  (async function getUrl () {
    const {value: url} = await swal({
      input: 'url',
      inputPlaceholder: 'Enter the URL'
    })
    url && swal({html: 'Entered URL: <strong>' + url + '</strong>'})
  })()
}

document.querySelector('.input-type-password').onclick = () => {
  (async function getPassword () {
    const {value: password} = await swal({
      title: 'Enter your password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        'maxlength': 10,
        'autocapitalize': 'off',
        'autocorrect': 'off'
      }
    })
    password && swal({html: 'Entered password: <strong>' + password + '</strong>'})
  })()
}

document.querySelector('.input-type-textarea').onclick = () => {
  (async function getMessage () {
    const {value: text} = await swal({
      input: 'textarea',
      inputPlaceholder: 'Type your message here',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })
    text && swal(text)
  })()
}

document.querySelector('.input-type-select').onclick = () => {
  (async function getCountry () {
    const {value: country} = await swal({
      title: 'Select Ukraine',
      input: 'select',
      inputOptions: {
        'SRB': 'Serbia',
        'UKR': 'Ukraine',
        'HRV': 'Croatia'
      },
      inputPlaceholder: 'Select country',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'UKR') {
            resolve()
          } else {
            resolve('You need to select Ukraine :)')
          }
        })
      }
    })
    country && swal({html: 'You selected: <strong>' + country + '</strong>'})
  })()
}

document.querySelector('.input-type-radio').onclick = () => {
  (async function getColor () {
    var inputOptionsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          '#FF0000': 'Red',
          '#00FF00': 'Green',
          '#0000FF': 'Blue'
        })
      }, 2000)
    })

    const {value: color} = await swal({
      title: 'Select color',
      input: 'radio',
      inputOptions: inputOptionsPromise,
      inputValidator: (value) => {
        return !value && 'You need to choose something!'
      }
    })

    color && swal({html: 'You selected: <strong>' + color + '</strong>'})
  })()
}

document.querySelector('.input-type-checkbox').onclick = () => {
  (async function acceptTerms () {
    const {value: accept} = await swal({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: 'I agree with the terms and conditions',
      confirmButtonText: 'Continue <i class="fa fa-arrow-right" style="margin-left: 10px"></i>',
      inputValidator: (result) => {
        return !result && 'To continue you need to agree with T&amp;C'
      }
    })

    accept && swal({text: 'You agreed with T&C :)'})
  })()
}

document.querySelector('.input-type-file').onclick = () => {
  (async function getColor () {
    const {value: file} = await swal({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    if (file) {
      var reader = new FileReader()
      reader.onload = (e) => {
        swal({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture'
        })
      }
      reader.readAsDataURL(file)
    }
  })()
}

document.querySelector('.input-type-range').onclick = () => {
  swal({
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

document.querySelector('.input-type-multiple').onclick = () => {
  (async function getForm () {
    const {value: formValues} = await swal({
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
    formValues && swal(JSON.stringify(formValues))
  })()
}

document.querySelector('.examples .ajax-request button').onclick = () => {
  swal({
    title: 'Submit email to run ajax request',
    input: 'email',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    showLoaderOnConfirm: true,
    preConfirm: (email) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (email === 'taken@example.com') {
            swal.showValidationError('This email is already taken.')
          }
          resolve()
        }, 2000)
      })
    },
    allowOutsideClick: () => !swal.isLoading()
  }).then((result) => {
    if (result.value) {
      swal({
        type: 'success',
        title: 'Ajax request finished!',
        html: 'Submitted email: <strong>' + result.value + '</strong>'
      })
    }
  })
}

document.querySelector('.examples .chaining-modals button').onclick = () => {
  swal.mixin({
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
      swal({
        title: 'All done!',
        html: 'Your answers: <pre>' + JSON.stringify(result.value) + '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
}

document.querySelector('.examples .dynamic-queue button').onclick = () => {
  swal.queue([
    {
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(data => swal.insertQueueStep(data.ip))
          .catch(() => swal.insertQueueStep({type: 'error', title: 'Unable to get your public IP'}))
      }
    }
  ])
}

document.querySelectorAll('.modal-types button').forEach(button => {
  button.onclick = (e) => {
    var type = e.target.getAttribute('class').slice(5)
    swal(type + '!', '', type)
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
  if (typeof _bsa !== 'undefined' && _bsa && document.querySelector('.carbonads-wrapper .bsa-cpc').textContent) {
    swal.setDefaults({
      footer: document.querySelector('.carbonads-wrapper .bsa-cpc')
    })
  }
}

var observer = new MutationObserver(setBuySellAdsFooter)
observer.observe(document.querySelector('.carbonads-wrapper .bsa-cpc'), {childList: true})

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtagEvent = (eventName, eventParameters) => {
  console.log('GA event: ' + eventName, eventParameters)

  if (typeof gtag === 'function') {
    gtag('event', eventName, eventParameters)
  }
}

// https://developers.google.com/web/fundamentals/app-install-banners/
window.addEventListener('beforeinstallprompt', (e) => {
  e.userChoice.then((choiceResult) => {
    console.log(choiceResult.outcome)

    gtagEvent(choiceResult.outcome, {
      event_category: 'PWA - Add to home screen'
    })

    if (choiceResult.outcome === 'dismissed') {
      console.log('User cancelled home screen install')
    } else {
      console.log('User added to home screen')
    }
  })
})
