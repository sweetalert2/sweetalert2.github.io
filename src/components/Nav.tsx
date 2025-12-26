import Swal from 'sweetalert2'
import { showSidebar } from '../utils'
import { DocSearch } from './DocSearch'
import { ThemeSelector } from '../utils/themableSwal'
// import { Partners } from './Partners'

export const sidebarUrl = 'https://github.com/sweetalert2/sweetalert2.github.io/blob/main/src/utils/sidebar.tsx'

export function Nav({
  recipeGallery = false,
  showBackToRecipeGalleryLink = true,
}: {
  recipeGallery?: boolean
  showBackToRecipeGalleryLink?: boolean
}) {
  return (
    <>
      <Sidebar />
      <i className="fa fa-bars show-sidebar" onClick={() => showSidebar()}></i>

      {recipeGallery ? (
        <>
          <div className="recipe-gallery-top-nav">
            {showBackToRecipeGalleryLink ? (
              <a href="/recipe-gallery/">
                <i className="fa fa-arrow-left"></i> Back to Recipe Gallery
              </a>
            ) : null}
            <DocSearch />
          </div>
          {/* <Partners /> */}
        </>
      ) : null}
    </>
  )
}

export function Sidebar() {
  return (
    <nav className="mobile-hidden">
      <a href="/#examples" onClick={() => Swal.close()}>
        <span>Examples</span>
      </a>
      <a href="/recipe-gallery/" className="recipe-gallery" onClick={() => Swal.close()}>
        <span>Recipe Gallery</span>
      </a>
      <a href="/#download" onClick={() => Swal.close()}>
        <span>Installation</span>
      </a>
      <a href="/#usage" onClick={() => Swal.close()}>
        <span>Usage</span>
      </a>
      <a href="/#themes" onClick={() => Swal.close()}>
        <span>Themes</span>
      </a>
      <a href="/#frameworks-integrations" onClick={() => Swal.close()}>
        <span>Integrations</span>
      </a>
      <a href="/#configuration" className="mobile-hidden" onClick={() => Swal.close()}>
        <span>Configuration Params</span>
      </a>
      <a href="/#declarative-templates" className="mobile-hidden" onClick={() => Swal.close()}>
        <span>Declarative Templates</span>
      </a>
      <a href="/#handling-buttons" onClick={() => Swal.close()}>
        <span>Handling Buttons</span>
      </a>
      <a href="/#handling-dismissals" onClick={() => Swal.close()}>
        <span>Handling Dismissals</span>
      </a>
      <a href="/#icons" onClick={() => Swal.close()}>
        <span>Icons</span>
      </a>
      <a href="/#input-types" onClick={() => Swal.close()}>
        <span>Input Types</span>
      </a>
      <a href="/#methods" className="mobile-hidden" onClick={() => Swal.close()}>
        <span>Methods</span>
      </a>
      <a href="/#sponsors" onClick={() => Swal.close()}>
        <span>Sponsors</span>
      </a>
      <a href="/#nsfw-sponsors" onClick={() => Swal.close()}>
        <span>NSFW Sponsors</span>
      </a>
      <ThemeSelector />
    </nav>
  )
}
