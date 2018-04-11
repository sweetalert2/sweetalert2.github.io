/* global fetch */

var stats = {}

// latest release
fetch('https://api.github.com/repos/sweetalert2/sweetalert2/tags')
  .then(response => response.json())
  .then(response => {
    if (!response[0] || !response[0].name) {
      return
    }
    stats.latestRelease = response[0].name
    showStats()
  })

// recent activity
fetch('https://api.github.com/repos/sweetalert2/sweetalert2/commits')
  .then(response => response.json())
  .then(response => {
    if (!response[0] || !response[0].commit) {
      return
    }
    var recentActivity = response[0].commit.author.date
    recentActivity = new Date(recentActivity)
    var today = new Date()
    var diffDays = parseInt((today - recentActivity) / (1000 * 60 * 60 * 24))
    switch (diffDays) {
      case 0: recentActivity = 'today'; break
      case 1: recentActivity = 'yesterday'; break
      default: recentActivity = diffDays + ' days ago'; break
    }
    stats.recentActivity = recentActivity
    showStats()
  })

// number of downloads last month
fetch('https://api.npmjs.org/downloads/point/last-month/sweetalert2')
  .then(response => response.json())
  .then(response => {
    stats.downloadsLastMonth = response.downloads.toLocaleString()
    showStats()
  })

function showStats () {
  if (stats.latestRelease && stats.recentActivity && stats.downloadsLastMonth) {
    var currentVersion = document.getElementById('current-version')
    currentVersion.innerText = stats.latestRelease
    currentVersion.setAttribute('aria-label', currentVersion.getAttribute('aria-label') + stats.latestRelease)

    var latestUpdate = document.getElementById('latest-update')
    latestUpdate.innerText = stats.recentActivity
    latestUpdate.setAttribute('aria-label', latestUpdate.getAttribute('aria-label') + stats.recentActivity)

    var downloads = document.getElementById('downloads-last-month')
    downloads.innerText = stats.downloadsLastMonth
    downloads.setAttribute('aria-label', downloads.getAttribute('aria-label') + stats.downloadsLastMonth)

    document.getElementsByClassName('stats')[0].style.opacity = 1
  }
}
