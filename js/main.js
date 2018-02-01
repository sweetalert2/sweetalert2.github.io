/* global XMLHttpRequest, MutationObserver, $, swal, FileReader, _bsa */

function makeApiRequest (endpoint) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', endpoint)
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error(`Api call to ${endpoint} faled`))
      }
    }
    xhr.send()
  })
}

var stats = {}

// latest release
makeApiRequest('https://api.github.com/repos/sweetalert2/sweetalert2/tags').then(
  (response) => {
    stats.latestRelease = response[0].name
    showStats()
  },
  () => {}
)

// recent activity
makeApiRequest('https://api.github.com/repos/sweetalert2/sweetalert2/commits').then(
  (response) => {
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
  },
  () => {}
)

// number of downloads last month
makeApiRequest('https://api.npmjs.org/downloads/point/last-month/sweetalert2').then(
  (response) => {
    stats.downloadsLastMonth = response.downloads.toLocaleString()
    showStats()
  },
  () => {}
)

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

$('.download').on('click', () => {
  $('html, body').animate({scrollTop: $('.download-section').offset().top}, 1000)
})

$('.donate').on('click', () => {
  $('html, body').animate({scrollTop: $('.donations-section').offset().top}, 1000)
})

$('.showcase.normal button').on('click', () => {
  window.alert('You clicked the button!')
})

$('.showcase.sweet button').on('click', () => {
  swal('Good job!', 'You clicked the button!', 'success')
})

$('.paypal').on('click', () => {
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
})

$('.examples .message button').on('click', () => {
  swal('Any fool can use a computer')
})

$('.examples .timer button').on('click', () => {
  swal({
    title: 'Auto close alert!',
    text: 'I will close in 5 seconds.',
    timer: 5000,
    onOpen: () => {
      swal.showLoading()
    }
  }).then((result) => {
    if (result.dismiss === 'timer') {
      console.log('I was closed by the timer')
    }
  })
})

$('.examples .html button').on('click', () => {
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
})

$('.examples #position button').on('click', () => {
  swal({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
})

$('.examples .rtl button').on('click', () => {
  swal({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    target: document.getElementById('rtl-container')
  })
})

$('.examples .html-jquery button').on('click', () => {
  swal({
    title: 'jQuery HTML example',
    html: $('<div>').addClass('some-class').text('jQuery is everywhere.'),
    animation: false,
    customClass: 'animated tada'
  })
})

$('.examples .title-text button').on('click', () => {
  swal('The Internet?', 'That thing is still around?', 'question')
})

$('.examples .error button').on('click', () => {
  swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>'
  })
})

$('.examples #long-text button').on('click', () => {
  swal({
    imageUrl: './images/robot.jpg',
    imageHeight: 1512,
    imageAlt: 'A tall image'
  })
})

$('.examples .warning.confirm button').on('click', () => {
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
})

$('.examples .bootstrap-buttons button').on('click', () => {
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
    // result.dismiss can be 'cancel', 'overlay', 'close', and 'timer'
    } else if (result.dismiss === 'cancel') {
      swal(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
})

$('.examples .custom-image button').on('click', () => {
  swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200/?random',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false
  })
})

$('.examples .custom-width-padding-background button').on('click', () => {
  swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: 100,
    background: '#fff url(https://bit.ly/1Nqn9HU)'
  })
})

$('.input-type-text').on('click', () => {
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
})

$('.input-type-email').on('click', () => {
  (async function getEmail () {
    const {value: email} = await swal({
      title: 'Input email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    })
    email && swal({html: 'Entered email: <strong>' + email + '</strong>'})
  })()
})

$('.input-type-url').on('click', () => {
  (async function getUrl () {
    const {value: url} = await swal({
      input: 'url',
      inputPlaceholder: 'Enter the URL'
    })
    url && swal({html: 'Entered URL: <strong>' + url + '</strong>'})
  })()
})

$('.input-type-password').on('click', () => {
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
})

$('.input-type-textarea').on('click', () => {
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
})

$('.input-type-select').on('click', () => {
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
})

$('.input-type-radio').on('click', () => {
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
})

$('.input-type-checkbox').on('click', () => {
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
})

$('.input-type-file').on('click', () => {
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
})

$('.input-type-range').on('click', () => {
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
})

$('.input-type-multiple').on('click', () => {
  (async function getForm () {
    const {value: formValues} = await swal({
      title: 'Multiple inputs',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="first input field">' +
        '<input id="swal-input2" class="swal2-input" placeholder="second input field">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          $('#swal-input1').val(),
          $('#swal-input2').val()
        ]
      }
    })
    formValues && swal(JSON.stringify(formValues))
  })()
})

$('.examples .ajax-request button').on('click', () => {
  swal({
    title: 'Submit email to run ajax request',
    input: 'email',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    width: 600,
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
})

$('.examples .chaining-modals button').on('click', () => {
  swal.setDefaults({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3']
  })

  var steps = [
    {title: 'Question 1', text: 'Chaining swal2 modals is easy'},
    'Question 2',
    'Question 3'
  ]

  swal.queue(steps).then((result) => {
    swal.resetDefaults()
    setCarbonFooter()

    if (result.value) {
      swal({
        title: 'All done!',
        html: 'Your answers: <pre>' + JSON.stringify(result.value) + '</pre>',
        confirmButtonText: 'Lovely!'
      })
    }
  })
})

$('.examples .dynamic-queue button').on('click', () => {
  swal.queue([
    {
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return $.get('https://api.ipify.org?format=json').then((data) => {
          swal.insertQueueStep(data.ip)
        })
      }
    }
  ])
})

$('.modal-types button').on('click', (e) => {
  var type = $(e.currentTarget).attr('class').slice(5)
  swal(type + '!', '', type)
})

if (typeof _bsa !== 'undefined' && _bsa) {
  _bsa.init('default', 'CKYDK5QE', 'placement:sweetalert2githubio', {
    target: '.bsa-cpc',
    align: 'horizontal',
    disable_css: 'true'
  })
}

function setCarbonFooter () {
  if (typeof _bsa !== 'undefined' && _bsa && $('.carbonads-wrapper .bsa-cpc')[0].textContent) {
    swal.setDefaults({
      footer: $('.carbonads-wrapper .bsa-cpc')
    })
  }
}

var observer = new MutationObserver(setCarbonFooter)
observer.observe($('.carbonads-wrapper .bsa-cpc')[0], {childList: true})
