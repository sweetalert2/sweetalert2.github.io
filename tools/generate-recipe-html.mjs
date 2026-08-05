#!/usr/bin/env node
'use strict'

import { dirname, resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://sweetalert2.github.io'

const recipes = [
  { name: 'index', title: 'SweetAlert2 Recipe Gallery - Code Examples for Specific Tasks' },
  { name: 'queue-with-progress-steps', title: 'Queue with Progress Steps' },
  { name: 'bootstrap-custom-loader', title: 'Bootstrap 5 + custom loader' },
  { name: 'custom-icon', title: 'Custom Success Icon' },
  { name: 'sweetalert2-laravel', title: 'SweetAlert2 + Laravel' },
  { name: 'sweetalert2-react', title: 'SweetAlert2 + React' },
  { name: 'sweetalert2-react-router', title: 'SweetAlert2 + React Router' },
  { name: 'three-buttons-dialog', title: 'Yes/No/Cancel Dialog' },
  { name: 'modal-with-iframe', title: 'Modal with iframe inside' },
  { name: 'draw-attention', title: 'Draw Attention / Persistent Dialog' },
  { name: 'colored-toasts', title: 'Colored Toasts' },
  { name: 'crop-image', title: 'Crop User Image' },
  { name: 'login-form', title: 'Login Form' },
  { name: 'input-datepicker', title: 'Date input powered by react-day-picker' },
  { name: 'i18n-l10n', title: 'Internationalization (i18n) and localization (l10n)' },
  { name: 'input-number-input-range', title: 'input[number] + input[range]' },
  { name: 'validation-message-custom-icon', title: 'Validation Message with a Custom Icon' },
  { name: 'blurred-backdrop', title: 'Blurred Backdrop' },
  { name: 'sidebars-drawers', title: 'Sidebars and Drawers' },
  { name: 'pdf-viewer', title: 'PDF Viewer' },
  { name: 'google-maps', title: 'Google Maps' },
]

/**
 * @param {string} title
 * @param {string} scriptSrc
 * @param {string} canonical Site-root-relative canonical path
 * @returns {string}
 */
function generateHtml(title, scriptSrc, canonical) {
  return `<!DOCTYPE html>
<html lang="en">
  <load ="partials/head.html" title="${title}" canonical="${canonical}" />
  <body>
    <div class="app-root"></div>
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>
`
}

/**
 * Site-root-relative canonical path for a recipe.
 * The gallery index is canonicalised to the directory URL, since GitHub Pages
 * serves it at both /recipe-gallery/ and /recipe-gallery/index.html.
 * @param {string} name
 * @returns {string}
 */
function canonicalPath(name) {
  return name === 'index' ? '/recipe-gallery/' : `/recipe-gallery/${name}.html`
}

// Generate HTML files for all recipes
const recipeDir = resolve(__dirname, '../recipe-gallery')
mkdirSync(recipeDir, { recursive: true })

for (const recipe of recipes) {
  const htmlPath = resolve(recipeDir, `${recipe.name}.html`)
  const html = generateHtml(recipe.title, `./${recipe.name}.tsx`, canonicalPath(recipe.name))
  writeFileSync(htmlPath, html, 'utf-8')
  console.log(`Generated: ${recipe.name}.html`)
}

console.log(`\n✓ Generated ${recipes.length} recipe HTML files`)

// Generate sitemap.xml from the same list, so it cannot drift from the pages
// that actually exist. Deliberately no <lastmod>: the site rebuilds on a daily
// cron, so a build timestamp would claim every page changed daily.
const urls = ['/', ...recipes.map((recipe) => canonicalPath(recipe.name))]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`).join('\n')}
</urlset>
`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), sitemap, 'utf-8')
console.log(`✓ Generated sitemap.xml with ${urls.length} URLs`)
