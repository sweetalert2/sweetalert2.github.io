import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { examples } from '../examples'
import { CodeExample } from './CodeExample'

export function DeclarativeTemplates() {
  const template = `
<template id="my-template">
  <swal-title>
    Save changes to "Untitled 1" before closing?
  </swal-title>
  <swal-icon type="warning" color="red"></swal-icon>
  <swal-button type="confirm">
    Save As
  </swal-button>
  <swal-button type="cancel">
    Cancel
  </swal-button>
  <swal-button type="deny">
    Close without Saving
  </swal-button>
  <swal-param name="allowEscapeKey" value="false" />
  <swal-param
    name="customClass"
    value='{ "popup": "my-popup" }' />
  <swal-function-param
    name="didOpen"
    value="popup => console.log(popup)" />
</template>`.trim()

  const declarativeTriggeringTemplate = `
<template id="my-template">
  <swal-title>Hey!</swal-title>
</template>

<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>`.trim()

  useEffect(() => {
    Swal.bindClickHandler()

    Swal.mixin({
      toast: true,
    }).bindClickHandler('data-swal-toast-template')
  }, [])

  return (
    <>
      <div className="center-container mobile-hidden">
        <h3 id="declarative-templates">Declarative templates and declarative triggering</h3>
        <p className="center">
          There's also the declarative way to define a popup, via the
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"
            target="_blank"
            rel="noreferrer noopener"
            tabIndex={-1}
          >
            <strong>&lt;template&gt;</strong>
          </a>
          tag. This is handy when you want to define popup on server side (SSR).
        </p>
      </div>

      <ul className="examples mobile-hidden">
        <li id="declarative-template">
          <div className="ui">
            <p>Declarative template example</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: Declarative template"
              onClick={examples.declarativeTemplate.fn}
            >
              Try me!
            </button>
          </div>
          <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <div
              dangerouslySetInnerHTML={{
                __html: template,
              }}
            />
            <CodeExample code={template} language="xml" withoutCodepen />
            <CodeExample code={examples.declarativeTemplate.fnString} codepenHtml={template} />
          </div>
        </li>
      </ul>

      <div className="center-container mobile-hidden">
        <p className="center">Supported template elements:</p>
        <CodeExample
          code={`
<swal-title>…</swal-title>
<swal-html>…</swal-html>
<swal-footer>…</swal-footer>
<swal-param name="…" value="…" />
<swal-function-param name="…" value="…" />
<swal-button type="…" color="…" aria-label="…">…</swal-button>
<swal-image src="…" width="…" height="…" alt="…" />
<swal-icon type="…" color="…">…</swal-icon>
<swal-input type="…" label="…" placeholder="…" value="…" />
<swal-input-option value="…">…</swal-input-option>
`.trim()}
          language="xml"
          withoutCodepen
        />
      </div>

      <div className="center-container mobile-hidden">
        <p id="declarative-triggering" className="center">
          And you can even trigger SweetAlert2 popups declaratively! Use the <strong>bindClickHandler()</strong> method
          for that:
        </p>
      </div>

      <ul className="examples mobile-hidden">
        <li>
          <div className="ui">
            <button className="show-example-btn" data-swal-template="#my-template" style={{ margin: '1em 0' }}>
              Trigger modal
            </button>
            <button className="show-example-btn" data-swal-toast-template="#my-template">
              Trigger toast
            </button>
          </div>
          <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <CodeExample
              code={`
<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>
              `.trim()}
              language="xml"
              withoutCodepen
            />
            <CodeExample
              code={examples.declarativeTriggering.fnString}
              codepenHtml={declarativeTriggeringTemplate}
              style={{ marginTop: '10px' }}
            />
          </div>
        </li>
      </ul>
    </>
  )
}
