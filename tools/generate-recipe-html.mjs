#!/usr/bin/env node
'use strict'

import { dirname, resolve } from 'path'
import { mkdirSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const SITE_URL = 'https://sweetalert2.github.io'

// `description` becomes the page's meta description, so each one should say what
// the recipe actually demonstrates. Avoid double quotes: these are emitted into
// an HTML attribute.
const recipes = [
  {
    name: 'index',
    title: 'SweetAlert2 Recipe Gallery - Code Examples for Specific Tasks',
    description:
      'A collection of easy-to-digest SweetAlert2 code examples for specific tasks, each in about 30 lines of code or less.',
  },
  {
    name: 'queue-with-progress-steps',
    title: 'Queue with Progress Steps',
    description:
      'Chain several SweetAlert2 popups into a wizard using Swal.mixin() with progressSteps and currentProgressStep.',
  },
  {
    name: 'bootstrap-custom-loader',
    title: 'Bootstrap 5 + custom loader',
    description:
      'Style SweetAlert2 with Bootstrap 5 buttons via buttonsStyling: false and customClass, plus a custom loader animation.',
  },
  {
    name: 'custom-icon',
    title: 'Custom Success Icon',
    description:
      'Replace the built-in SweetAlert2 success icon with your own inline SVG using iconHtml and a customClass animation.',
  },
  {
    name: 'sweetalert2-laravel',
    title: 'SweetAlert2 + Laravel',
    description:
      'Show SweetAlert2 popups from a Laravel application using the sweetalert2-laravel package, with the same API options.',
  },
  {
    name: 'sweetalert2-react',
    title: 'SweetAlert2 + React',
    description:
      'Render React components inside a SweetAlert2 popup with sweetalert2-react-content, including a controlled input.',
  },
  {
    name: 'sweetalert2-react-router',
    title: 'SweetAlert2 + React Router',
    description:
      'Use SweetAlert2 with React Router, rendering router-aware links inside a popup via createPortal and didOpen.',
  },
  {
    name: 'three-buttons-dialog',
    title: 'Yes/No/Cancel Dialog',
    description:
      'Build a Yes / No / Cancel dialog with showDenyButton and showCancelButton, reordering the buttons with customClass.',
  },
  {
    name: 'modal-with-iframe',
    title: 'Modal with iframe inside',
    description: 'Embed a YouTube iframe inside a SweetAlert2 popup using the built-in embed-iframe theme.',
  },
  {
    name: 'draw-attention',
    title: 'Draw Attention / Persistent Dialog',
    description:
      'Make a SweetAlert2 popup shake instead of closing when the backdrop is clicked, using allowOutsideClick and animate.css.',
  },
  {
    name: 'colored-toasts',
    title: 'Colored Toasts',
    description:
      'Create colored SweetAlert2 toast notifications with Swal.mixin(), iconColor and a timer progress bar.',
  },
  {
    name: 'crop-image',
    title: 'Crop User Image',
    description:
      'Let users crop an image inside a SweetAlert2 popup with Cropper.js, updating a live preview as they drag.',
  },
  {
    name: 'login-form',
    title: 'Login Form',
    description: 'Collect a username and password in one SweetAlert2 popup using two inputs and preConfirm validation.',
  },
  {
    name: 'input-datepicker',
    title: 'Date input powered by react-day-picker',
    description: 'Render a react-day-picker date range calendar inside a SweetAlert2 popup using createPortal.',
  },
  {
    name: 'i18n-l10n',
    title: 'Internationalization (i18n) and localization (l10n)',
    description:
      'Translate SweetAlert2 popup text with i18next for internationalization (i18n) and localization (l10n).',
  },
  {
    name: 'input-number-input-range',
    title: 'input[number] + input[range]',
    description: 'Keep a number input and a range slider in sync inside a single SweetAlert2 popup.',
  },
  {
    name: 'validation-message-custom-icon',
    title: 'Validation Message with a Custom Icon',
    description: 'Add an icon to the SweetAlert2 validation message with showValidationMessage and a customClass.',
  },
  {
    name: 'blurred-backdrop',
    title: 'Blurred Backdrop',
    description: 'Blur the page behind a SweetAlert2 popup with a CSS filter applied while swal2-shown is active.',
  },
  {
    name: 'sidebars-drawers',
    title: 'Sidebars and Drawers',
    description:
      'Turn SweetAlert2 popups into left, right, top and bottom drawers using position and animate.css show and hide classes.',
  },
  {
    name: 'pdf-viewer',
    title: 'PDF Viewer',
    description: 'Render a PDF inside a SweetAlert2 popup onto a canvas with pdf.js.',
  },
  {
    name: 'google-maps',
    title: 'Google Maps',
    description: 'Embed a Google Maps iframe inside a SweetAlert2 popup using the embed-iframe theme.',
  },
]

/**
 * Serialise a JSON-LD object for embedding in a <script> tag.
 * `<` is escaped so a value can never terminate the script element early.
 * @param {object} data
 * @returns {string}
 */
function jsonLd(data) {
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c')
}

/**
 * BreadcrumbList for a recipe page: SweetAlert2 > Recipe Gallery > <recipe>.
 * The gallery index itself stops at the second level. The final crumb omits
 * `item`, since it is the current page.
 * @param {{name: string, title: string}} recipe
 * @returns {string}
 */
function breadcrumbJsonLd(recipe) {
  const crumbs = [{ '@type': 'ListItem', 'position': 1, 'name': 'SweetAlert2', 'item': `${SITE_URL}/` }]

  if (recipe.name === 'index') {
    crumbs.push({ '@type': 'ListItem', 'position': 2, 'name': 'Recipe Gallery' })
  } else {
    crumbs.push({
      '@type': 'ListItem',
      'position': 2,
      'name': 'Recipe Gallery',
      'item': `${SITE_URL}/recipe-gallery/`,
    })
    crumbs.push({ '@type': 'ListItem', 'position': 3, 'name': recipe.title })
  }

  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs,
  })
}

/**
 * @param {{name: string, title: string, description: string}} recipe
 * @param {string} scriptSrc
 * @param {string} canonical Site-root-relative canonical path
 * @param {string} structuredData JSON-LD payload for the page
 * @returns {string}
 */
function generateHtml(recipe, scriptSrc, canonical, structuredData) {
  // Brand the <title> for recognisability in search results, unless the recipe
  // title already says SweetAlert2 (avoids "SweetAlert2 + React - SweetAlert2").
  const title = recipe.title.includes('SweetAlert2') ? recipe.title : `${recipe.title} - SweetAlert2`

  return `<!DOCTYPE html>
<html lang="en">
  <load
    ="partials/head.html"
    title="${title}"
    description="${recipe.description}"
    canonical="${canonical}"
  />
  <body>
    <div class="app-root"></div>
    <script type="application/ld+json">
${structuredData}
    </script>
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
  const html = generateHtml(recipe, `./${recipe.name}.tsx`, canonicalPath(recipe.name), breadcrumbJsonLd(recipe))
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
