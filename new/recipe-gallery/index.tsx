import ReactDOM from 'react-dom/client'
import { Nav } from '../src/components'

export function RecipeGallery() {
  return (
    <>
      <Nav recipeGallery showBackToRecipeGalleryLink={false} />
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
          <a href="./sweetalert2-react.html">React example</a>
        </li>
        <li>
          <a href="./sweetalert2-react-router.html">React Router example</a>
        </li>
        <li>
          <a href="./sweetalert2-formik.html">Formik example</a>
        </li>
        <li>
          <a href="./three-buttons-dialog.html">Yes/No/Cancel Dialog</a>
        </li>
        <li>
          <a href="./draw-attention.html">Draw Attention / Persistent Dialog</a>
        </li>
      </ul>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeGallery />)
