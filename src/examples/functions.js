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

  // Examples section
  basicMessage () {
    Swal.fire('Any fool can use a computer')
  },
  titleText () {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  },
  errorType () {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  },
  longText () {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image'
    })
  },
  customHtml () {
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
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    })
  },
  customPosition () {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  },
  customAnimation () {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      animation: false,
      customClass: {
        popup: 'animated tada'
      }
    })
  },
  warningConfirm () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  },
  handleDismiss () {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
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
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  },
  customImage () {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
    })
  },
  customWidth () {
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
  },
  timer () {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <strong></strong> seconds.',
      timer: 2000,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  },
  rtl () {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      type: 'question',
      customClass: {
        icon: 'swal2-arabic-question-mark'
      },
      confirmButtonText:  'نعم',
      cancelButtonText:  'لا',
      showCancelButton: true,
      showCloseButton: true
    })
  },
  ajaxRequest () {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
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
  },
  chainingModals () {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'All done!',
          html:
            'Your answers: <pre><code>' +
            JSON.stringify(result.value) +
            '</code></pre>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  },
  dynamicQueue () {
    const ipAPI = 'https://api.ipify.org?format=json'

    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then(response => response.json())
          .then(data => Swal.insertQueueStep(data.ip))
          .catch(() => {
            Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  },
  timerFunctions () {
    let timerInterval
    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        '<button id="increase" class="btn btn-warning">' +
        'I need 5 more seconds!' +
        '</button><br/>' +
        '<button id="stop" class="btn btn-danger">' +
        'Please stop the timer!!' +
        '</button><br/>' +
        '<button id="resume" class="btn btn-success" disabled>' +
        'Phew... you can restart now!' +
        '</button><br/>' +
        '<button id="toggle" class="btn btn-primary">' +
        'Toggle' +
        '</button>',
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
  },

  // Configuration section
  mixin () {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      type: 'success',
      title: 'Signed in successfully'
    })
  },

  // Input Types section
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