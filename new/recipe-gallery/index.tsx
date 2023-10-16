import ReactDOM from 'react-dom/client'
import { Nav } from "../src/components"

export function RecipeGallery() {
  return (
    <>
      <Nav recipeGallery showBackToRecipeGalleryLink={false} />
      <h1>Recipe Gallery</h1>
      <p className="center">A collection of easy-to-digest code examples for specific tasks in about 30 lines of code or less.</p>
      <a href="./sweetalert2-react.html">React example</a>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RecipeGallery />)
