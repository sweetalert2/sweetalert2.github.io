window.showExample = () => {
const MySwal = window.sweetalert2ReactContent(Swal)

MySwal.fire({
  title: <p>Hello World</p>,
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
}
