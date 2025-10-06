import { useEffect, useState } from 'react'
import type { SweetAlertTheme } from 'sweetalert2'
import Swal from 'sweetalert2'

import 'sweetalert2/themes/borderless.css'
import 'sweetalert2/themes/minimal.css'
import 'sweetalert2/themes/bulma.css'
import 'sweetalert2/themes/bootstrap-4.css'

declare global {
  interface Window {
    Swal: typeof Swal
  }
}

window.Swal = Swal

export const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState<SweetAlertTheme>('light')

  useEffect(() => {
    window.Swal = window.Swal.mixin({ theme: currentTheme })
  }, [currentTheme])

  return (
    <div className="theme-selector">
      <label>
        Theme:{' '}
        <select
          autoComplete="off"
          value={currentTheme}
          onChange={(event) => {
            setCurrentTheme(event.target.value as SweetAlertTheme)
          }}
        >
          <option value="light">Default (light)</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
          <option value="bootstrap-4">Bootstrap 4</option>
          <option value="minimal">Minimal</option>
          <option value="borderless">Borderless</option>
          <option value="bulma">Bulma</option>
        </select>
      </label>
    </div>
  )
}
