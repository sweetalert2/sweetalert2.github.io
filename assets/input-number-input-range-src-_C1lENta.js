const inputNumberInputRangeSrc = `import Swal from 'sweetalert2'

const inputValue = 345.67
const inputStep = 0.01

Swal.fire({
  title: 'input[number] + input[range]',
  html: \`
    <input
      type="number"
      value="\${inputValue}"
      step="\${inputStep}"
      class="swal2-input"
      id="range-value">\`,
  input: 'range',
  inputValue,
  inputAttributes: {
    min: '0',
    max: '1000',
    step: inputStep.toString(),
  },
  didOpen: () => {
    const inputRange = Swal.getInput()!
    const inputNumber = Swal.getPopup()!.querySelector('#range-value') as HTMLInputElement

    // remove default output
    Swal.getPopup()!.querySelector('output')!.style.display = 'none'
    inputRange.style.width = '100%'

    // sync input[type=number] with input[type=range]
    inputRange.addEventListener('input', () => {
      inputNumber.value = inputRange.value
    })

    // sync input[type=range] with input[type=number]
    inputNumber.addEventListener('change', () => {
      inputRange.value = inputNumber.value
    })
  },
})
`;

export { inputNumberInputRangeSrc as default };
