window.showExample = () => {
const inputValue = 345.67
const inputStep = 0.01

Swal.fire({
  title: 'input[number] + input[range]',
  html: `
    <input
      type="number"
      value="${inputValue}"
      step="${inputStep}"
      class="swal2-input"
      id="range-value">`,
  input: 'range',
  inputValue,
  inputAttributes: {
    min: 0,
    max: 1000,
    step: inputStep
  },
  onOpen: () => {
    const inputRange = Swal.getInput()
    const inputNumber = Swal.getContent().querySelector('#range-value')

    // remove default output
    inputRange.nextElementSibling.style.display = 'none'
    inputRange.style.width = '100%'

    // sync input[type=number] with input[type=range]
    inputRange.addEventListener('input', () => {
      inputNumber.value = inputRange.value
    })

    // sync input[type=range] with input[type=number]
    inputNumber.addEventListener('change', () => {
      inputRange.value = inputNumber.value
    })
  }
})
}
