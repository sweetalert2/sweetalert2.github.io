import Swal from 'sweetalert2'
import { ScrollToAnchor, showSidebar } from '../utils'
import { DocSearch } from './DocSearch'

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
      <i className="fa fa-bars" id="show-sidebar" onClick={() => showSidebar()}></i>
      <link rel="stylesheet" id="current-theme" />

      {recipeGallery ? (
        <div className="recipe-gallery-top-nav">
          {showBackToRecipeGalleryLink ? (
            <a href="/recipe-gallery/">
              <i className="fa fa-arrow-left"></i> Back to Recipe Gallery
            </a>
          ) : null}
          <DocSearch />
        </div>
      ) : null}

      <ScrollToAnchor />
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
      <a href="/#themes" onClick={() => Swal.close()}>
        <span>Themes</span>
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

function ThemeSelector() {
  return (
    <div className="theme-selector">
      <label>
        Theme:{' '}
        <select
          autoComplete="off"
          onChange={(event) => {
            const currentTheme = document.querySelector('#current-theme') as HTMLLinkElement
            currentTheme.href = event.target.value
          }}
        >
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-default/default.css">Default</option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark/dark.css">Dark</option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css">
            Bootstrap 4
          </option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css">Bulma</option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-minimal/minimal.css">Minimal</option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-borderless/borderless.css">Borderless</option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-material-ui/material-ui.css">
            Material UI
          </option>
          <option value="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-wordpress-admin/wordpress-admin.css">
            WordPress Admin
          </option>
        </select>
      </label>
    </div>
  )
}
