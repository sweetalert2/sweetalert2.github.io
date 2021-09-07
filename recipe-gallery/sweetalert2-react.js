window.showExample = async () => {
const withReactContent = window.sweetalert2ReactContent
const MySwal = withReactContent(Swal)

await MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success'
})
}
