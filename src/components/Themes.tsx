import { CodeExample } from './CodeExample'

export function Themes() {
  return (
    <>
      <h3 id="themes">
        <a href="https://github.com/sweetalert2/sweetalert2-themes" target="_blank">
          Themes <i className="fa fa-external-link"></i>
        </a>
      </h3>
      <div className="themes center-container">
        <br />
        <h4>Dark</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/dark" target="_blank">
          <img src="images/themes-dark.png" alt="theme dark" />
        </a>

        <br />
        <h4>Minimal</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/minimal" target="_blank">
          <img src="images/themes-minimal.png" alt="theme minimal" />
        </a>

        <br />
        <h4>Borderless</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/borderless" target="_blank">
          <img src="images/themes-borderless.png" alt="theme borderless" />
        </a>

        <br />
        <h4>Bootstrap 4</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/bootstrap-4" target="_blank">
          <img src="images/themes-bootstrap-4.png" alt="theme bootstrap 4" />
        </a>

        <br />
        <h4>Bulma</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/bulma" target="_blank">
          <img src="images/themes-bulma.png" alt="theme bulma" />
        </a>

        <br />
        <h4>Material UI</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/material-ui" target="_blank">
          <img src="images/themes-material-ui.png" alt="theme material ui" />
        </a>

        <br />
        <h4>WordPress Admin</h4>
        <br />
        <a href="https://github.com/sweetalert2/sweetalert2-themes/tree/main/wordpress-admin" target="_blank">
          <img src="images/themes-wordpress-admin.png" alt="theme material ui" />
        </a>

        <h3>Themes Installation</h3>
        <p className="code-label">You can install all themes at once:</p>
        <pre>
          <code>
            <span className="unselectable">$ </span>npm install @sweetalert2/themes
          </code>
        </pre>

        <p className="code-label">
          Or just a single theme <strong>@sweetalert2/theme-&lt;theme_name&gt;</strong>, e.g.:
        </p>
        <pre>
          <code>
            <span className="unselectable">$ </span>npm install @sweetalert2/theme-dark
          </code>
        </pre>

        <p className="code-label">Or from jsdelivr CDN, e.g.:</p>
        <CodeExample
          code={`
<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
          `.trim()}
          language="xml"
          withoutCodepen
        />

        <h3>Themes Usage</h3>
        <p className="code-label">With CSS:</p>
        <CodeExample
          code={`
<!-- Include a required theme -->
<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">
<script src="sweetalert2/dist/sweetalert2.min.js"></script>
          `.trim()}
          language="xml"
          withoutCodepen
        />

        <p className="code-label">With SASS:</p>
        <CodeExample
          code={`
// your-app.js
import Swal from 'sweetalert2/src/sweetalert2.js'

// your-app.scss
@import '@sweetalert2/themes/dark/dark.scss';
          `.trim()}
          withoutCodepen
        />
      </div>
    </>
  )
}
