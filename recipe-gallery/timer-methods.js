window.showExample = () => {
let timerInterval

Swal.fire({
  title: 'Auto close alert!',
  html:
    'I will close in <strong></strong> seconds.<br/><br/>' +
    '<button id="increase" class="btn btn-warning">' +
      'I need 5 more seconds!' +
    '</button><br/><br/>' +
    '<button id="stop" class="btn btn-danger">' +
      'Please stop the timer!!' +
    '</button><br/><br/>' +
    '<button id="resume" class="btn btn-success" disabled>' +
      'Phew... you can restart now!' +
    '</button><br/><br/>' +
    '<button id="toggle" class="btn btn-primary">' +
      'Toggle' +
    '</button>',
  timer: 10000,
  willOpen: () => {
    const content = Swal.getHtmlContainer()
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
      Swal.getHtmlContainer().querySelector('strong')
        .textContent = (Swal.getTimerLeft() / 1000)
          .toFixed(0)
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
})
}
