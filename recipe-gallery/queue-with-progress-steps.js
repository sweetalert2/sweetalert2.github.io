window.showExample = async () => {
const steps = ['1', '2', '3']
const swalQueue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
})

await swalQueue.fire({ title: 'Uno', currentProgressStep: 0 })
await swalQueue.fire({ title: 'Dos', currentProgressStep: 1 })
await swalQueue.fire({ title: 'Tres', currentProgressStep: 2, confirmButtonText: 'OK' })
}
