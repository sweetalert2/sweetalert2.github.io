#!/usr/bin/env node
'use strict'

import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
]

function generateHtml(title, scriptSrc) {
  return `<!DOCTYPE html>
<html lang="en">
  <load ="partials/head.html" title="${title}" />
  <body>
    <div class="app-root"></div>
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>
`
}

// Generate HTML files for all recipes
const recipeDir = resolve(__dirname, '../recipe-gallery')
mkdirSync(recipeDir, { recursive: true })

for (const recipe of recipes) {
  const htmlPath = resolve(recipeDir, `${recipe.name}.html`)
  const html = generateHtml(recipe.title, `./${recipe.name}.tsx`)
  writeFileSync(htmlPath, html, 'utf-8')
  console.log(`Generated: ${recipe.name}.html`)
}

console.log(`\n✓ Generated ${recipes.length} recipe HTML files`)
