---
id: examples-advanced
title: Advanced Examples
sidebar_label: Advanced
---

## Chaining modals (queue) example

```js executable
swal.setDefaults({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2', '3']
})

var steps = [
  {
    title: 'Question 1',
    text: 'Chaining swal2 modals is easy'
  },
  'Question 2',
  'Question 3'
]

swal.queue(steps).then((result) => {
  swal.resetDefaults()

  if (result.value) {
    swal({
      title: 'All done!',
      html:
        'Your answers: <pre>' +
          JSON.stringify(result.value) +
        '</pre>',
      confirmButtonText: 'Lovely!'
    })
  }
})
```

## Dynamic queue example

```js executable
const ipAPI = 'https://api.ipify.org?format=json'

swal.queue([{
  title: 'Your public IP',
  confirmButtonText: 'Show my public IP',
  text:
    'Your public IP will be received ' +
    'via AJAX request',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => swal.insertQueueStep(data.ip))
      .catch(error => {
        swal.insertQueueStep({
          type: 'error',
          title: 'Unable to get your public IP'
        })
      })
  }
}])
```
