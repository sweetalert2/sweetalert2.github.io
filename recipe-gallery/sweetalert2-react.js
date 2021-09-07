window.showExample = async () => {
const MySwal = sweetalert2ReactContent(Swal)

await MySwal.fire({
  title: <strong>Good job!</strong>,
  html: <i>You clicked the button!</i>,
  icon: 'success'
})
}
