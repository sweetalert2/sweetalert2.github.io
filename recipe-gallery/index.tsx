import { Nav, Prtnr } from '../src/components'
import { renderRecipe } from '../src/utils'

function Recipe() {
  return (
    <>
      <Nav recipeGallery showBackToRecipeGalleryLink={false} />
      <Prtnr />
      <h1>Recipe Gallery</h1>
      <p className="center">
        A collection of easy-to-digest code examples for specific tasks in about 30 lines of code or less.
      </p>
      <ul className="recipes-list">
        <li>
          <a href="./queue-with-progress-steps.html">Queue with Progress Steps</a>
        </li>
        <li>
          <a href="./bootstrap-custom-loader.html">Bootstrap 5 + custom loader</a>
        </li>
        <li>
          <a href="./custom-icon.html">Custom Icon</a>
        </li>
        <li>
          <a href="./sweetalert2-react.html">React example</a>
        </li>
        <li>
          <a href="./sweetalert2-react-router.html">React Router example</a>
        </li>
        <li>
          <a href="./three-buttons-dialog.html">Yes/No/Cancel Dialog</a>
        </li>
        <li>
          <a href="./modal-with-iframe.html">Modal with iframe inside</a>
        </li>
        <li>
          <a href="./draw-attention.html">Draw Attention / Persistent Dialog</a>
        </li>
        <li>
          <a href="./colored-toasts.html">Colored Toasts</a>
        </li>
        <li>
          <a href="./crop-image.html">Crop User Image with Cropper.js</a>
        </li>
        <li>
          <a href="./login-form.html">Login Form</a>
        </li>
        <li>
          <a href="./input-datepicker.html">Date input powered by react-day-picker</a>
        </li>
        <li>
          <a href="./i18n-l10n.html">Internationalization (i18n) and localization (l10n)</a>
        </li>
        <li>
          <a href="./input-number-input-range.html">input[number] + input[range]</a>
        </li>
        <li>
          <a href="./validation-message-custom-icon.html">Validation Message with a Custom Icon</a>
        </li>
        <li>
          <a href="./blurred-backdrop.html">Blurred Backdrop</a>
        </li>
        <li>
          <a href="./sidebars-drawers.html">Sidebars and Drawers (Left, Right, Top, Bottom)</a>
        </li>
        <li>
          <a href="./sweetalert2-laravel.html">Laravel Example</a>
        </li>
        <li>
          <a href="./pdf-viewer.html">PDF Viewer</a>
        </li>
      </ul>
    </>
  )
}

renderRecipe(<Recipe />)
