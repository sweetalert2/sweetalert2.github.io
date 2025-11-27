import { CodeExample } from './CodeExample'

// screenshots are generated from sweetalert2 repo -> sandbox -> width: 450 -> take node screenshot

export function Themes() {
  return (
    <>
      <div className="mobile-hidden">
        <h3 id="themes">Themes</h3>
        <table id="themes-table">
          <thead>
            <tr className="titles">
              <th>Theme</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h4>dark</h4>
                <img src="/images/themes-dark.png" alt="SweetAlert2 Dark Theme" width={300} style={{ marginTop: 10 }} />
              </td>
              <td>
                Dark theme is included by default. To use it, just set the <strong>theme</strong> parameter to{' '}
                <strong>'dark'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`Swal.fire({
  title: 'Dark theme',
  theme: 'dark'
})`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <h4>auto</h4>
                <div className="theme-comparison">
                  <img src="/images/themes-auto-light.png" alt="SweetAlert2 Auto Theme Light" />
                  <img src="/images/themes-auto-dark.png" alt="SweetAlert2 Auto Theme Dark" />
                </div>
              </td>
              <td>
                Auto theme is also included in default SweetAlert2 styles, it automatically adapts to the browser's
                theme (light or dark). To use it, just set the <strong>theme</strong> parameter to{' '}
                <strong>'auto'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`Swal.fire({
  title: 'Auto theme',
  theme: 'auto'
})`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <h4>bootstrap-5</h4>
                <div className="theme-comparison">
                  <img src="/images/themes-bootstrap-5-light.png" alt="SweetAlert2 Bootstrap 5 Theme Light" />
                  <img src="/images/themes-bootstrap-5-dark.png" alt="SweetAlert2 Bootstrap 5 Theme Dark" />
                </div>
              </td>
              <td>
                Bootstrap 5 theme is a separate CSS file that automatically adapts to the browser's theme (light or
                dark). To use it, you need to import the theme's CSS file and set the <strong>theme</strong> parameter
                to <strong>'bootstrap-5'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`import 'sweetalert2/themes/bootstrap-5.css'

Swal.fire({
  title: 'Bootstrap 5 theme',
  theme: 'bootstrap-5'
  // theme: 'bootstrap-5-light' // light theme only
  // theme: 'bootstrap-5-dark' // dark theme only
})`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <h4>bootstrap-4</h4>
                <div className="theme-comparison">
                  <img src="/images/themes-bootstrap-4-light.png" alt="SweetAlert2 Bootstrap 4 Theme Light" />
                  <img src="/images/themes-bootstrap-4-dark.png" alt="SweetAlert2 Bootstrap 4 Theme Dark" />
                </div>
              </td>
              <td>
                Bootstrap 4 theme is a separate CSS file that automatically adapts to the browser's theme (light or
                dark). To use it, you need to import the theme's CSS file and set the <strong>theme</strong> parameter
                to <strong>'bootstrap-4'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`import 'sweetalert2/themes/bootstrap-4.css'

Swal.fire({
  title: 'Bootstrap 4 theme',
  theme: 'bootstrap-4'
  // theme: 'bootstrap-4-light' // light theme only
  // theme: 'bootstrap-4-dark' // dark theme only
})`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <h4>material-ui</h4>
                <div className="theme-comparison">
                  <img src="/images/themes-material-ui-light.png" alt="SweetAlert2 Material UI Theme Light" />
                  <img src="/images/themes-material-ui-dark.png" alt="SweetAlert2 Material UI Theme Dark" />
                </div>
              </td>
              <td>
                Material UI theme is a separate CSS file that automatically adapts to the browser's theme (light or
                dark). To use it, you need to import the theme's CSS file and set the <strong>theme</strong> parameter
                to <strong>'material-ui'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`import 'sweetalert2/themes/material-ui.css'

Swal.fire({
  title: 'Material UI theme',
  theme: 'material-ui'
  // theme: 'material-ui-light' // light theme only
  // theme: 'material-ui-dark' // dark theme only
})`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <h4>bulma</h4>
                <div className="theme-comparison">
                  <img src="/images/themes-bulma-light.png" alt="SweetAlert2 Bulma Theme Light" />
                  <img src="/images/themes-bulma-dark.png" alt="SweetAlert2 Bulma Theme Dark" />
                </div>
              </td>
              <td>
                Bulma theme is a separate CSS file that automatically adapts to the browser's theme (light or dark). To
                use it, you need to import the theme's CSS file and set the <strong>theme</strong> parameter to{' '}
                <strong>'bulma'</strong>:
                <br />
                <br />
                <CodeExample
                  code={`import 'sweetalert2/themes/bulma.css'

Swal.fire({
  title: 'Bulma theme',
  theme: 'bulma'
  // theme: 'bulma-light' // light theme only
  // theme: 'bulma-dark' // dark theme only
})`}
                  withoutCodepen
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
