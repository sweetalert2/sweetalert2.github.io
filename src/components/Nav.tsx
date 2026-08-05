import Swal from 'sweetalert2'
import { showSidebar } from '../utils'
import { DocSearch } from './DocSearch'
import { ThemeSelector } from '../utils/themableSwal'
import { IconBars } from './UiIcons'

export const sidebarUrl = 'https://github.com/sweetalert2/sweetalert2.github.io/blob/main/src/utils/sidebar.tsx'

export function Nav({
  recipeGallery = false,
  showBreadcrumbs = true,
}: {
  recipeGallery?: boolean
  showBreadcrumbs?: boolean
}) {
  return (
    <>
      <Sidebar />
      <button className="show-sidebar" onClick={() => showSidebar()} aria-label="Open navigation menu">
        <IconBars />
      </button>

      {recipeGallery ? (
        <>
          <div className="recipe-gallery-top-nav">
            {showBreadcrumbs ? (
              // Mirrors the BreadcrumbList JSON-LD the generator emits: Google
              // prefers breadcrumb markup to match a visible trail. The current
              // page is the <h1> below, so it is not repeated here.
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/">SweetAlert2</a>
                <span className="separator" aria-hidden="true">
                  /
                </span>
                <a href="/recipe-gallery/">Recipe Gallery</a>
              </nav>
            ) : null}
            <DocSearch />
          </div>
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
      <a href="/#frameworks-integrations" onClick={() => Swal.close()}>
        <span>Integrations</span>
      </a>
      <a href="/#themes" className="mobile-hidden" onClick={() => Swal.close()}>
        <span>Themes</span>
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
