const loginFormSrc = `import Swal from 'sweetalert2'

type LoginFormResult = {
  username: string
  password: string
}

let usernameInput: HTMLInputElement
let passwordInput: HTMLInputElement

Swal.fire<LoginFormResult>({
  title: 'Login Form',
  html: \`
    <input type="text" id="username" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">
  \`,
  confirmButtonText: 'Sign in',
  focusConfirm: false,
  didOpen: () => {
    const popup = Swal.getPopup()!
    usernameInput = popup.querySelector('#username') as HTMLInputElement
    passwordInput = popup.querySelector('#password') as HTMLInputElement
    usernameInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
    passwordInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm()
  },
  preConfirm: () => {
    const username = usernameInput.value
    const password = passwordInput.value
    if (!username || !password) {
      Swal.showValidationMessage(\`Please enter username and password\`)
    }
    return { username, password }
  },
})
`;

export { loginFormSrc as default };
