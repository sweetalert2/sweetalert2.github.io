/* eslint-env serviceworker */

importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.3/build/importScripts/workbox-sw.prod.v2.1.3.min.js')

const workboxSW = new self.WorkboxSW()

workboxSW.router.registerRoute(
  function () {
    return true
  },
  workboxSW.strategies.networkFirst()
)
