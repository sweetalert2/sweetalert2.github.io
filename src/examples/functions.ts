export default {
  // Top of page
  normalAlert() {
    alert('You clicked the button!')
  },
  sweetAlert() {
    window.Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
    })
  },

  // Examples section
  basicMessage() {
    window.Swal.fire('SweetAlert2 is working!')
  },
  titleText() {
    window.Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
    })
  },
  errorType() {
    window.Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="#">Why do I have this issue?</a>',
    })
  },
  longText() {
    window.Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      imageAlt: 'A tall image',
    })
  },
  draggableModal() {
    window.Swal.fire({
      title: 'Drag me!',
      icon: 'success',
      draggable: true,
    })
  },
  customHtml() {
    window.Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html: `
        You can use <b>bold text</b>,
        <a href="#" autofocus>links</a>,
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
    window.Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /*! Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        window.Swal.fire('Changes are not saved', '', 'info')
      }
    })
  },
  customPosition() {
    window.Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    })
  },
  customAnimation() {
    window.Swal.fire({
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
    window.Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        window.Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        })
      }
    })
  },
  handleDismiss() {
    const swalWithBootstrapButtons = window.Swal.mixin({
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
          result.dismiss === window.Swal.DismissReason.cancel
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
    window.Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  },
  customWidth() {
    window.Swal.fire({
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
    window.Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        window.Swal.showLoading()
        const timer = window.Swal.getPopup()!.querySelector('b')
        timerInterval = setInterval(() => {
          timer!.textContent = `${window.Swal.getTimerLeft()}`
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    }).then((result) => {
      /*! Read more about handling dismissals below */
      if (result.dismiss === window.Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  },
  rtl() {
    window.Swal.fire({
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
    window.Swal.fire({
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
            return window.Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `)
          }
          return response.json()
        } catch (error) {
          window.Swal.showValidationMessage(`
            Request failed: ${error}
          `)
        }
      },
      allowOutsideClick: () => !window.Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        window.Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        })
      }
    })
  },

  // Configuration section
  mixin() {
    const Toast = window.Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = window.Swal.stopTimer
        toast.onmouseleave = window.Swal.resumeTimer
      },
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    })
  },

  // Declarative templates
  declarativeTemplate() {
    window.Swal.fire({
      template: '#my-template',
    })
  },

  // Declarative triggering
  declarativeTriggering() {
    window.Swal.bindClickHandler()
    /*! Bind a mixin to a click handler */
    window.Swal.mixin({
      toast: true,
    }).bindClickHandler('data-swal-toast-template')
  },

  // Input Types section
  async textInput() {
    const ipAPI = '//api.ipify.org?format=json'

    const response = await fetch(ipAPI)
    const data = await response.json()
    const inputValue = data.ip

    const { value: ipAddress } = await window.Swal.fire({
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
      window.Swal.fire(`Your IP address is ${ipAddress}`)
    }
  },
  async emailInput() {
    const { value: email } = await window.Swal.fire({
      title: 'Input email address',
      input: 'email',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address',
    })

    if (email) {
      window.Swal.fire(`Entered email: ${email}`)
    }
  },
  async urlInput() {
    const { value: url } = await window.Swal.fire({
      input: 'url',
      inputLabel: 'URL address',
      inputPlaceholder: 'Enter the URL',
    })

    if (url) {
      window.Swal.fire(`Entered URL: ${url}`)
    }
  },
  async passwordInput() {
    const { value: password } = await window.Swal.fire({
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
      window.Swal.fire(`Entered password: ${password}`)
    }
  },
  async textareaInput() {
    const { value: text } = await window.Swal.fire({
      input: 'textarea',
      inputLabel: 'Message',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    })

    if (text) {
      window.Swal.fire(text)
    }
  },
  async selectInput() {
    const { value: fruit } = await window.Swal.fire({
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
      window.Swal.fire(`You selected: ${fruit}`)
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

    const { value: color } = await window.Swal.fire({
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
      window.Swal.fire({ html: `You selected: ${color}` })
    }
  },
  async checkboxInput() {
    const { value: accept } = await window.Swal.fire({
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
      window.Swal.fire('You agreed with T&C :)')
    }
  },
  async dateInput() {
    const { value: date } = await window.Swal.fire({
      title: 'select departure date',
      input: 'date',
      didOpen: () => {
        const today = new Date().toISOString()
        window.Swal.getInput()!.min = today.split('T')[0]
      },
    })

    if (date) {
      window.Swal.fire('Departure date', date)
    }
  },
  async fileInput() {
    const { value: file } = await window.Swal.fire({
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
        window.Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target!.result as string,
          imageAlt: 'The uploaded picture',
        })
      }
      reader.readAsDataURL(file)
    }
  },
  rangeInput() {
    window.Swal.fire({
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
    const { value: formValues } = await window.Swal.fire({
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
      window.Swal.fire(JSON.stringify(formValues))
    }
  },
}
