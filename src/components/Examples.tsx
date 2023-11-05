import { examples } from '../examples'
import { CodeExample } from './CodeExample'

export function Examples() {
  return (
    <>
      <h3 id="examples">Examples</h3>
      <ul className="examples">
        <li id="message-example">
          <div className="ui">
            <p>A basic message</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A basic message"
              onClick={examples.basicMessage.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.basicMessage.fnString} />
        </li>

        <li id="title-text-example">
          <div className="ui">
            <p>A title with a text under</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A title with a text under"
              onClick={examples.titleText.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.titleText.fnString} />
        </li>

        <li id="serror-example">
          <div className="ui">
            <p>A modal with a title, an error icon, a text, and a footer</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A modal with a title, an error icon, a text, and a footer"
              onClick={examples.errorType.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.errorType.fnString} />
        </li>

        <li id="long-text">
          <div className="ui">
            <p>A modal window with a long content inside:</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A modal window with a long content inside"
              onClick={examples.longText.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.longText.fnString} />
        </li>

        <li id="custom-html">
          <div className="ui">
            <p>Custom HTML description and buttons with ARIA labels</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: Custom HTML description and buttons"
              onClick={examples.customHtml.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample
            code={examples.customHtml.fnString}
            codepenCssExternal="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
          />
        </li>

        <li id="three-buttons">
          <div className="ui">
            <p>A dialog with three buttons</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A dialog with three buttons"
              onClick={examples.threeButtons.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.threeButtons.fnString} />
        </li>

        <li id="custom-position">
          <div className="ui">
            <p>A custom positioned dialog</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A custom positioned dialog"
              onClick={examples.customPosition.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.customPosition.fnString} />
        </li>

        <li id="custom-animation">
          <div className="ui">
            <p>
              Custom animation with{' '}
              <a
                href="https://animate.style/"
                target="_blank"
                rel="noreferrer noopener"
                tabIndex={-1}
                className="nowrap"
              >
                Animate.css <i className="fa fa-external-link"></i>
              </a>
            </p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: jQuery HTML with custom animation"
              onClick={examples.customAnimation.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample
            code={examples.customAnimation.fnString}
            codepenCssExternal="https://cdn.jsdelivr.net/npm/animate.css@4/animate.min.css"
          />
        </li>

        <li id="confirm-dialog">
          <div className="ui">
            <p>A confirm dialog, with a function attached to the "Confirm"-button</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A confirm dialog, with a function attached to the 'Confirm'-button"
              onClick={examples.warningConfirm.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.warningConfirm.fnString} />
        </li>

        <li id="dismiss-handle">
          <div className="ui">
            <p>... and by passing a parameter, you can execute something else for "Cancel"</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: passing a parameter, you can execute something else for 'Cancel'"
              onClick={examples.handleDismiss.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample
            code={examples.handleDismiss.fnString}
            codepenCssExternal="https://sweetalert2.github.io/dist/bootstrap4-buttons.css"
          />
        </li>

        <li id="custom-image-example">
          <div className="ui">
            <p>A message with a custom image</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A message with a custom image"
              onClick={examples.customImage.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.customImage.fnString} />
        </li>

        <li id="custom-width-padding-background">
          <div className="ui">
            <p>A message with custom width, padding, background and animated Nyan Cat</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A message with custom width, padding and background"
              onClick={examples.customWidth.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.customWidth.fnString} />
        </li>

        <li id="timer-example">
          <div className="ui">
            <p>A message with auto close timer</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A message with auto close timer"
              onClick={examples.timer.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.timer.fnString} />
        </li>

        <li id="rtl">
          <div className="ui">
            <p>Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: A message in Arabic"
              onClick={examples.rtl.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.rtl.fnString} codepenHtml={`<body dir="rtl"></body>`} />
        </li>

        <li id="ajax-request">
          <div className="ui">
            <p>AJAX request example</p>
            <button
              className="show-example-btn"
              aria-label="Try me! Example: AJAX request"
              onClick={examples.ajaxRequest.fn}
            >
              Try me!
            </button>
          </div>
          <CodeExample code={examples.ajaxRequest.fnString} />
        </li>
      </ul>
    </>
  )
}
