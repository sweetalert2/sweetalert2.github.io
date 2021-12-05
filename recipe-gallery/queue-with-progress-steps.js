window.showExample = async () => {
const steps = ['1', '2', '3']
const Queue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' }
})

await Queue.fire({
  title: 'Uno',
  currentProgressStep: 0,
  // optional class to show fade-in backdrop animation which was disabled in Queue mixin
  showClass: { backdrop: 'swal2-noanimation' },
})
await Queue.fire({
  title: 'Dos',
  currentProgressStep: 1
})
await Queue.fire({
  title: 'Tres',
  currentProgressStep: 2,
  confirmButtonText: 'OK',
  // optional class to show fade-out backdrop animation which was disabled in Queue mixin
  showClass: { backdrop: 'swal2-noanimation' },
})
}
