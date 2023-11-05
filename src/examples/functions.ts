import Swal from 'sweetalert2'

export default {
  // Top of page
  normalAlert() {
    alert('You clicked the button!')
  },
  sweetAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
    })
  },

  // Examples section
  basicMessage() {
    Swal.fire('SweetAlert2 is working!')
  },
  titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
    })
  },
  errorType() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="#">Why do I have this issue?</a>',
    })
  },
  longText() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image',
    })
  },
  customHtml() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: 'Thumbs down',
    })
  },
  threeButtons() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /*! Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  },
  customPosition() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    })
  },
  customAnimation() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    })
  },
  warningConfirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        })
      }
    })
  },
  handleDismiss() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          })
        } else if (
          /*! Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          })
        }
      })
  },
  customImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  },
  customWidth() {
    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    })
  },
  timer() {
    let timerInterval: undefined | ReturnType<typeof setTimeout>
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const timer = Swal.getPopup()!.querySelector('b')
        timerInterval = setInterval(() => {
          timer!.textContent = `${Swal.getTimerLeft()}`
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    }).then((result) => {
      /*! Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  },
  rtl() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      target: document.getElementById('rtl-container'),
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true,
    })
  },
  ajaxRequest() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `
          const response = await fetch(githubUrl)
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `)
          }
          return response.json()
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `)
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        })
      }
    })
  },

  // Configuration section
  mixin() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
      },
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    })
  },

  // Declarative templates
  declarativeTemplate() {
    Swal.fire({
      template: '#my-template',
    })
  },

  // Declarative triggering
  declarativeTriggering() {
    Swal.bindClickHandler()
    /*! Bind a mixin to a click handler */
    Swal.mixin({
      toast: true,
    }).bindClickHandler('data-swal-toast-template')
  },

  // Input Types section
  async textInput() {
    const ipAPI = '//api.ipify.org?format=json'

    const response = await fetch(ipAPI)
    const data = await response.json()
    const inputValue = data.ip

    const { value: ipAddress } = await Swal.fire({
      title: 'Enter your IP address',
      input: 'text',
      inputLabel: 'Your IP address',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      },
    })

    if (ipAddress) {
      Swal.fire(`Your IP address is ${ipAddress}`)
    }
  },
  async emailInput() {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address',
    })

    if (email) {
      Swal.fire(`Entered email: ${email}`)
    }
  },
  async urlInput() {
    const { value: url } = await Swal.fire({
      input: 'url',
      inputLabel: 'URL address',
      inputPlaceholder: 'Enter the URL',
    })

    if (url) {
      Swal.fire(`Entered URL: ${url}`)
    }
  },
  async passwordInput() {
    const { value: password } = await Swal.fire({
      title: 'Enter your password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        maxlength: '10',
        autocapitalize: 'off',
        autocorrect: 'off',
      },
    })

    if (password) {
      Swal.fire(`Entered password: ${password}`)
    }
  },
  async textareaInput() {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    })

    if (text) {
      Swal.fire(text)
    }
  },
  async selectInput() {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        Fruits: {
          apples: 'Apples',
          bananas: 'Bananas',
          grapes: 'Grapes',
          oranges: 'Oranges',
        },
        Vegetables: {
          potato: 'Potato',
          broccoli: 'Broccoli',
          carrot: 'Carrot',
        },
        icecream: 'Ice cream',
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
      },
    })

    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  },
  async radioInput() {
    /*! inputOptions can be an object or Promise */
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          '#ff0000': 'Red',
          '#00ff00': 'Green',
          '#0000ff': 'Blue',
        })
      }, 1000)
    })

    const { value: color } = await Swal.fire({
      title: 'Select color',
      input: 'radio',
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to choose something!'
        }
      },
    })

    if (color) {
      Swal.fire({ html: `You selected: ${color}` })
    }
  },
  async checkboxInput() {
    const { value: accept } = await Swal.fire({
      title: 'Terms and conditions',
      input: 'checkbox',
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && 'You need to agree with T&C'
      },
    })

    if (accept) {
      Swal.fire('You agreed with T&C :)')
    }
  },
  async dateInput() {
    const { value: date } = await Swal.fire({
      title: 'select departure date',
      input: 'date',
      didOpen: () => {
        const today = new Date().toISOString()
        Swal.getInput()!.min = today.split('T')[0]
      },
    })

    if (date) {
      Swal.fire('Departure date', date)
    }
  },
  async fileInput() {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target!.result as string,
          imageAlt: 'The uploaded picture',
        })
      }
      reader.readAsDataURL(file)
    }
  },
  rangeInput() {
    Swal.fire({
      title: 'How old are you?',
      icon: 'question',
      input: 'range',
      inputLabel: 'Your age',
      inputAttributes: {
        min: '8',
        max: '120',
        step: '1',
      },
      inputValue: 25,
    })
  },
  async multipleInputs() {
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html: `
        <input id="swal-input1" class="swal2-input">
        <input id="swal-input2" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value,
        ]
      },
    })

    if (formValues) {
      Swal.fire(JSON.stringify(formValues))
    }
  },
}
