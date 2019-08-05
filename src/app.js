/* global Swal, MutationObserver, fetch, _bsa, _native */
import hljs from 'highlight.js/lib/highlight'
import hljsJS from 'highlight.js/lib/languages/javascript'
import hljsXML from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'
import examples from './examples'

const $ = document.querySelector.bind(document)

// Render <pre> elements for examples
Object.values(examples).forEach(example => {
  const preElement = $(`pre[data-example-id='${example.id}']`)
  preElement.className = 'code-sample'
  if (example.fnString.slice(0, 5) === 'async') {
    preElement.dataset.codepenJsBefore = '(async () => {\n'
    preElement.dataset.codepenJsAfter = '\n})()'
  }
  const codeElement = document.createElement('code')
  codeElement.className = 'lang-javascript'
  codeElement.innerText = unindent(example.fnString.split('\n').slice(1, -1)).join('\n')
  preElement.appendChild(codeElement)
})
function unindent (lines) {
  const baseIndent = [...lines[0]].findIndex(char => char !== ' ')
  return lines.map(line => line.slice(baseIndent))
}

// Syntax highlighting with highlight.js
hljs.registerLanguage('javascript', hljsJS)
hljs.registerLanguage('xml', hljsXML)
hljs.initHighlightingOnLoad()

document.addEventListener('DOMContentLoaded', () => {
  var loadStyleSheet = (src) => { // eslint-disable-line
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    document.head.appendChild(link)
  }

  loadStyleSheet('./styles/buysellads.css')
  loadStyleSheet('./styles/carbon-ads.css')
  loadStyleSheet('./styles/native-js.css')
  loadStyleSheet('./styles/bootstrap4-buttons.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/animate.css@3.6.1/animate.min.css')
})

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
    var currentVersion = $('#current-version')
    currentVersion.innerText = stats.latestRelease
    currentVersion.setAttribute('aria-label', currentVersion.getAttribute('aria-label') + stats.latestRelease)

    var latestUpdate = $('#latest-update')
    latestUpdate.innerText = stats.recentActivity
    latestUpdate.setAttribute('aria-label', latestUpdate.getAttribute('aria-label') + stats.recentActivity)

    var downloads = $('#downloads-last-month')
    downloads.innerText = stats.downloadsLastMonth
    downloads.setAttribute('aria-label', downloads.getAttribute('aria-label') + stats.downloadsLastMonth)

    document.getElementsByClassName('stats')[0].style.opacity = 1
  }
}

function ordinalSuffix (i) {
  i = parseInt(i)
  const j = i % 10
  const k = i % 100
  if (j === 1 && k !== 11) {
    return i + 'st'
  }
  if (j === 2 && k !== 12) {
    return i + 'nd'
  }
  if (j === 3 && k !== 13) {
    return i + 'rd'
  }
  return i + 'th'
}

fetch('https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month')
  .then(response => response.json())
  .then(response => {
    $('.jsdelivr-info').innerHTML =
      'sweetalert2 is the <strong>' + ordinalSuffix(response.rank) + '</strong>' +
      ' most popular package on jsDelivr, with ' +
      '<strong>' + parseInt(response.total).toLocaleString() + '</strong>' +
      ' CDN hits in the last month'
  })

$('.cryptocurrencies') && $('.cryptocurrencies').addEventListener('click', (e) => {
  const wallets = {
    bitcoin: '12BxefvPMtHePgfPRDL1SaZYSG4GwQmWoP',
    ethereum: '0x36e2b10666e2c0dc343901895ba3697b5d3214d1',
    bitcoincash: 'qqxs402qszgwuue00gwxw996lzhpa8up2unqm0y46g'
  }
  const showCryptocurrency = () => {
    const cryptocurrency = Swal.getInput().value
    const wallet = wallets[cryptocurrency]
    Swal.update({
      html: `
        <strong class="${cryptocurrency}">${wallet}</strong>
        <a href="${cryptocurrency}:${wallet}">
          <img src="/images/qr-code-${cryptocurrency}.png" class="cryptocurrency-qr-code">
        </a>
      `
    })
  }
  Swal.fire({
    title: 'Choose your cryptocurrency',
    input: 'select',
    inputOptions: {
      bitcoin: 'Bitcoin',
      ethereum: 'Ether',
      bitcoincash: 'Bitcoin Cash'
    },
    inputValue: 'bitcoin',
    onOpen: () => {
      Swal.getInput().onchange = showCryptocurrency
      showCryptocurrency()
    }
  })

  e.preventDefault()
})

Array.from(document.querySelectorAll('.popup-types button')).forEach(button => {
  button.onclick = (e) => {
    var type = e.target.getAttribute('class').slice(5)
    Swal.fire(type + '!', '', type)
  }
})

// BuySellAds
if (typeof _bsa !== 'undefined' && _bsa) {
  _bsa.init('default', 'CKYDK5QE', 'placement:sweetalert2githubio', {
    target: '.bsa-cpc',
    align: 'horizontal',
    disable_css: 'true'
  })
}

function setBuySellAdsFooter () {
  if (typeof _bsa !== 'undefined' && _bsa && $('body > .bsa-cpc').textContent) {
    window.Swal = Swal.mixin({
      footer: $('body > .bsa-cpc')
    })
  }
}

var observer = new MutationObserver(setBuySellAdsFooter)
observer.observe($('body > .bsa-cpc'), { childList: true })

// Do not show 'Add to homescreen' prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
})

Array.from(document.querySelectorAll('pre.code-sample')).forEach(pre => {
  pre.addEventListener('click', (e) => {
    if (e.offsetY < 0) {
      const codepenValue = {
        js_external: 'https://cdn.jsdelivr.net/npm/sweetalert2',
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      }
      if (pre.getAttribute('data-codepen-html')) {
        codepenValue.html = pre.getAttribute('data-codepen-html')
      }
      if (pre.getAttribute('data-codepen-css-external')) {
        codepenValue.css_external = pre.getAttribute('data-codepen-css-external')
      }

      codepenValue.js = ''
      if (pre.getAttribute('data-codepen-js-before')) {
        codepenValue.js = pre.getAttribute('data-codepen-js-before') + '\n'
      }
      codepenValue.js += pre.innerText.replace(/\/images/g, window.location.href + 'images')
      if (pre.getAttribute('data-codepen-js-after')) {
        codepenValue.js += '\n' + pre.getAttribute('data-codepen-js-after')
      }

      $('#codepen-data').value = JSON.stringify(codepenValue)
      $('#codepen-form').submit()
    }
  })
})

// Theme selector
$('#theme').addEventListener('change', () => {
  $('#theme-styles').setAttribute('href', $('#theme').value)
})

// Version selector
$('#version').addEventListener('change', () => {
  switch ($('#version').value) {
    case '7.x':
      window.location.assign('v7.html')
      break
    default:
      window.location.assign('/')
      break
  }
})

// BuySellAdd native.js (fixed footer)
_native.init('CK7DKKQI', {
  targetClass: 'native-js'
})

// Define window.executeExample for use in HTML
window.executeExample = async (id) => {
  const exampleFn = examples[id].fn
  console.log(`Executing example ${id}...`)
  try {
    await exampleFn()
  } catch (error) {
    console.error(error)
  }
  console.log(`Executed example ${id}.`)
}
