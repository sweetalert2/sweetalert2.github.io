#!/usr/bin/node
const execSync = require('child_process').execSync
const npmPrefix = execSync('npm config get prefix').toString().trim()

let puppeteer
try {
  // eslint-disable-next-line import/no-absolute-path
  puppeteer = require(`${npmPrefix}/lib/node_modules/puppeteer`)
} catch (e) {
  console.error('\n❗  For using this tool please install puppeteer globally: npm i -g puppeteer\n')
  process.exit(1)
}

const theme = process.argv[2]
if (!theme) {
  console.error('\nUsage: ./tools/theme-screenshot.js <theme_name>\n e.g. ./tools/theme-screenshot.js dark')
  process.exit(1)
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  })
  const page = await browser.newPage()
  await page.goto('https://sweetalert2.github.io/')

  await page.setViewport({
    width: 1280,
    height: 800,
  })

  await page.waitForTimeout(1000)

  await page.select('#theme', `//cdn.jsdelivr.net/npm/@sweetalert2/theme-${theme}/${theme}.css`)

  await page.waitForTimeout(1000)

  const executionContext = await page.mainFrame().executionContext()
  const { width, height } = await executionContext.evaluate(
    (theme) => {
      document.body.innerHTML = ''
      window.Swal.fire({
        title: theme,
        input: 'text',
        showClass: '',
        footer: '',
      })
      window.Swal.getContainer().style.padding = 0
      window.Swal.getContainer().style.gridTemplateRows = 'auto auto auto 0'
      const popup = window.Swal.getPopup()
      const conputedStyle = window.getComputedStyle(popup)

      return {
        width: parseInt(conputedStyle.getPropertyValue('width')) + 20,
        height: parseInt(conputedStyle.getPropertyValue('height')) + 20,
      }
    },
    theme
  )

  await page.waitForTimeout(1000)

  await page.setViewport({
    width,
    height,
  })

  await page.waitForTimeout(1000)

  await page.screenshot({
    path: `./images/themes-${theme}.png`
  })

  await browser.close()
})()
