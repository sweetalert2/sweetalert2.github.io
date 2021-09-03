/* global MutationObserver, fetch, _bsa */
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/atom-one-dark.css'
import examples from './examples'
import showSidebar from './sidebar'

// fallback in case jsdelivr failed to deliver
if (typeof Swal === 'undefined') {
  window.Swal = require('sweetalert2')
}

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Render `<pre data-example-id="...">` elements
const escapeHtml = (text) => {
  const map = {
    '<': '&lt;',
    '>': '&gt;',
  }
  return text.replace(/[<>]/g, function (m) { return map[m] })
}
for (const preElement of $$('pre[data-example-id]')) {
  preElement.className = 'code-sample'
  const example = examples[preElement.dataset.exampleId]
  if (example.fnString.slice(0, 5) === 'async') {
    preElement.dataset.codepenJsBefore = '(async () => {\n'
    preElement.dataset.codepenJsAfter = '\n})()'
  }
  const codeElement = document.createElement('code')
  codeElement.className = 'lang-javascript'
  codeElement.innerHTML = unindent(example.fnString.split('\n').slice(1, -1)).join('\n')
  codeElement.innerHTML = escapeHtml(codeElement.innerHTML)
  preElement.appendChild(codeElement)
}
function unindent (lines) {
  const baseIndent = [...lines[0]].findIndex(char => char !== ' ')
  return lines.map(line => line.slice(baseIndent))
}

// Syntax highlighting with highlight.js
hljs.configure({ cssSelector: 'pre:not([data-highlighjs-ignore]) code' })
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.highlightAll()

document.addEventListener('DOMContentLoaded', () => {
  const loadStyleSheet = (src, addToHead = true) => { // eslint-disable-line
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = src
    if (addToHead) {
      document.head.appendChild(link)
    }
  }

  loadStyleSheet('/styles/buysellads.css')
  loadStyleSheet('/styles/carbon-ads.css')
  loadStyleSheet('/styles/native-js.css')
  loadStyleSheet('/styles/bootstrap4-buttons.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css')
  loadStyleSheet('https://cdn.jsdelivr.net/npm/animate.css@4.0.0/animate.min.css')

  const themes = ['default', 'dark', 'bootstrap-4', 'minimal', 'borderless', 'material-ui']
  themes.forEach((theme) => {
    loadStyleSheet(`https://cdn.jsdelivr.net/npm/@sweetalert2/theme-${theme}/${theme}.css`, false)
  })

  Swal.bindClickHandler()

  Swal.mixin({
    toast: true
  }).bindClickHandler('data-swal-toast-template')
})

const stats = {}

if ($('.stats')) {
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
    .catch(() => {
      // ignore
    })

  // recent activity
  fetch('https://api.github.com/repos/sweetalert2/sweetalert2/commits')
    .then(response => response.json())
    .then(response => {
      if (!response[0] || !response[0].commit) {
        return
      }
      let recentActivity = response[0].commit.author.date
      recentActivity = new Date(recentActivity)
      const today = new Date()
      const diffDays = parseInt((today - recentActivity) / (1000 * 60 * 60 * 24))
      switch (diffDays) {
        case 0: recentActivity = 'today'; break
        case 1: recentActivity = 'yesterday'; break
        default: recentActivity = `${diffDays} days ago`; break
      }
      stats.recentActivity = recentActivity
      showStats()
    })
    .catch(() => {
      // ignore
    })

  // number of downloads last month
  fetch('https://api.npmjs.org/downloads/point/last-month/sweetalert2')
    .then(response => response.json())
    .then(response => {
      stats.downloadsLastMonth = response.downloads.toLocaleString()
      showStats()
    })
    .catch(() => {
      // ignore
    })
}

function navigatorShare (e) {
  e.preventDefault()
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: location.origin
    })
      .catch(console.error)
  } else {
    openPopup(this.href)
  }
}
function openPopup (href) {
  window.open(href, 'popup', 'width=600,height=600')
}
if ($('.social-buttons')) {
  $('.facebook-button').addEventListener('click', navigatorShare)
  $('.twitter-button').addEventListener('click', function (e) {
    e.preventDefault()
    openPopup(this.href)
  })
}

function showStats () {
  if (stats.latestRelease && stats.recentActivity && stats.downloadsLastMonth) {
    const currentVersion = $('#current-version')
    currentVersion.innerText = stats.latestRelease
    currentVersion.setAttribute('aria-label', currentVersion.getAttribute('aria-label') + stats.latestRelease)

    const latestUpdate = $('#latest-update')
    latestUpdate.innerText = stats.recentActivity
    latestUpdate.setAttribute('aria-label', latestUpdate.getAttribute('aria-label') + stats.recentActivity)

    const downloads = $('#downloads-last-month')
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
    return `${i}st`
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`
  }
  return `${i}th`
}

fetch('https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month')
  .then(response => response.json())
  .then(response => {
    if (response.rank && response.total) {
      $('.jsdelivr-info').innerHTML =
        `sweetalert2 is the <strong>${ordinalSuffix(response.rank)}</strong>` +
        ` most popular package on jsDelivr, with ` +
        `<strong>${parseInt(response.total).toLocaleString()}</strong>` +
        ` CDN hits in the last month`
    }
  })
  .catch(() => {
    // ignore
  })

$('.paypal') && $('.paypal').addEventListener('click', (e) => {
  const currencies = {
    'UW5EA4KTHM4B6': 'United States dollar (US$)',
    'TKTWHJGUWLR7E': 'Euro (€)',
    'FE4JP23V88G3C': 'Japanese yen (¥)',
    'QJ3KEXBUHCL3C': 'Pound sterling (£)',
    'SG3T6NCCQFYE2': 'Australian dollar (A$)',
    '4SB64A93A7VZ8': 'Canadian dollar (C$)',
    'UGHWAA7MRH7MQ': ' Swiss franc (CHF)',
    'CPZP4SJAFZKAU': 'Hong Kong dollar (HK$)',
    'F42C5XL3M3JCQ': 'New Zealand dollar (NZ$)',
    'GRRZTRQLA4NWL': 'Swedish krona (kr)',
    '386ALCBUUFXES': 'Singapore dollar (S$)',
    'XFPKPQDZWFKAW': 'Norwegian krone (kr)',
    'WSXP62LE49PPN': 'Mexican peso ($)',
    '98BDRFSZAPV3Q': 'Russian ruble (₽)',
    'LYFEH4N33DHQC': 'Brazilian real (R$)',
    '5HL8BJ97RRANU': 'New Taiwan dollar (NT$)',
    'T7RD9MRR3MXTG': 'Danish krone (kr)',
    'SHAUMPM36UNP6': 'Polish złoty (zł)',
  }
  Swal.fire({
    title: 'Choose your currency',
    input: 'select',
    inputOptions: currencies,
    inputValue: 'USD',
  }).then((result) => {
    if (result.value) {
      location.assign(`https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${result.value}`)
    }
  })

  e.preventDefault()
})

$('.cryptocurrencies') && $('.cryptocurrencies').addEventListener('click', (e) => {
  const wallets = {
    bitcoin: '1K8GdfmiDXeKd1CWFRgmTf3V8kQXD92NJ7',
    ethereum: '0x192096161eB2273f12b1cB4E31aBB09Bfc03a7F3',
    bitcoincash: 'qz28x66hrljtdz3052p8ya3cmkwwva5avy0msz2ej3',
    stellar: 'GDUM4VJZYDNRHBTKUQBOPC374AP6MMMVOJDMSHIPEJPEMBCY4ZHH6NDY',
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
      ethereum: 'Ethereum',
      bitcoincash: 'Bitcoin Cash',
      stellar: 'Stellar',
    },
    inputValue: 'bitcoin',
    didOpen: () => {
      Swal.getInput().onchange = showCryptocurrency
      showCryptocurrency()
    },
    width: 550
  })

  e.preventDefault()
})

Array.from($$('.popup-icons button')).forEach(button => {
  button.onclick = (e) => {
    const icon = e.target.getAttribute('data-icon')
    Swal.fire(`Icon ${icon}`, '', icon)
  }
})

// BuySellAds
if (typeof _bsa !== 'undefined' && _bsa) {
  // Default
  _bsa.init('default', 'CKYDK5QE', 'placement:sweetalert2githubio', {
    target: '.bsa-cpc',
    align: 'horizontal',
    disable_css: 'true' // eslint-disable-line
  })
  // Fixed footer, taken from https://codepen.io/team/buysellads/pen/vPLazv
  _bsa.init('custom', 'CK7DKKQI', 'placement:sweetalert2githubio', {
    target: '#native-js-footer',
    template: `
      <div style="background-color: ##backgroundColor##" class="native-fixed">
        <a style="color: ##textColor##" class="native-link" href="##link##">
          <div class="native-sponsor" style="background-color: ##textColor##; color: ##backgroundColor##">Sponsor</div>
          <div class="native-text">##company## — ##description##</div>
        </a>
      </div>
    `
  })
}

function setBuySellAdsFooter () {
  if (typeof _bsa !== 'undefined' && _bsa && $('body > .bsa-cpc').textContent) {
    window.Swal = Swal.mixin({
      footer: $('body > .bsa-cpc')
    })
  }
}

if ($('body > .bsa-cpc')) {
  const observer = new MutationObserver(setBuySellAdsFooter)
  observer.observe($('body > .bsa-cpc'), { childList: true })
}

Array.from($$('#api tr[id]')).forEach(tr => {
  const anchor = document.createElement('a')
  anchor.innerText = '#'
  anchor.className = 'hover-anchor'
  anchor.href = `/#${tr.id}`
  tr.querySelector('td').appendChild(anchor)
})

Array.from($$('pre.code-sample')).forEach(pre => {
  pre.addEventListener('click', (e) => {
    if (e.offsetY < 0) {
      const codepenValue = {
        js_external: 'https://cdn.jsdelivr.net/npm/sweetalert2@11', // eslint-disable-line
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      }
      if (pre.getAttribute('data-codepen-html')) {
        codepenValue.html = pre.getAttribute('data-codepen-html').replace(/\\n/g, '\n')
      }
      if (pre.getAttribute('data-codepen-css-external')) {
        codepenValue.css_external = pre.getAttribute('data-codepen-css-external') // eslint-disable-line
      }

      codepenValue.js = ''
      if (pre.getAttribute('data-codepen-js-before')) {
        codepenValue.js = `${pre.getAttribute('data-codepen-js-before')}\n`
      }
      codepenValue.js += pre.innerText.replace(/\/images/g, `${window.location.href}images`)
      if (pre.getAttribute('data-codepen-js-after')) {
        codepenValue.js += `\n${pre.getAttribute('data-codepen-js-after')}`
      }

      $('#codepen-data').value = JSON.stringify(codepenValue)
      $('#codepen-form').submit()
    }
  })
})

// Show sidebar
$('#show-sidebar').addEventListener('click', () => {
  showSidebar()
})

Array.from($$('nav a[href^="#"]')).forEach((link) => {
  link.addEventListener('click', () => {
    if (Swal.getPopup() && Swal.getPopup().contains(link)) {
      Swal.close()
    }
  })
})

// Theme selector
if ($('#theme')) {
  $('#theme').addEventListener('change', () => {
    $('#theme-styles').setAttribute('href', $('#theme').value)
  })
}

// Version selector
if ($('#version')) {
  $('#version').addEventListener('change', () => {
    switch ($('#version').value) {
      case '9.x':
        window.location.assign('v9.html')
        break
      case '10.x':
        window.location.assign('v10.html')
        break
      default:
        window.location.assign('/')
        break
    }
  })
}

// Define window.executeExample for use in HTML
window.executeExample = async (id) => {
  const exampleFn = examples[id].fn
  try {
    await exampleFn()
  } catch (error) {
    console.error(error)
  }
}
