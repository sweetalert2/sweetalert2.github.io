import { Nav } from './components'
import { renderRecipe } from './utils'

function NotFound() {
  return (
    <>
      {/* recipeGallery renders the top nav with the search box; there is no gallery to go back to */}
      <Nav recipeGallery showBreadcrumbs={false} />

      <h1>Page not found</h1>

      <p className="center">
        That page doesn't exist. It may have been renamed, or the link that brought you here may be out of date.
      </p>

      <ul className="recipes-list">
        <li>
          <a href="/">SweetAlert2 documentation</a>
        </li>
        <li>
          <a href="/#examples">Examples</a>
        </li>
        <li>
          <a href="/#configuration">Configuration Params</a>
        </li>
        <li>
          <a href="/recipe-gallery/">Recipe Gallery</a>
        </li>
      </ul>
    </>
  )
}

renderRecipe(<NotFound />)
