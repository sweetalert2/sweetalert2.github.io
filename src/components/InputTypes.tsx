import { examples } from '../examples'
import { CodeExample } from './CodeExample'

export function InputTypes() {
  return (
    <>
      <h3 id="input-types">Input Types</h3>
      <table className="input-types">
        <tbody>
          <tr id="input-text">
            <td>
              <h4>text</h4>
            </td>
            <td>
              <CodeExample code={examples.textInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type text"
                onClick={examples.textInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-email">
            <td>
              <h4>email</h4>
            </td>
            <td>
              <CodeExample code={examples.emailInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type email"
                onClick={examples.emailInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-url">
            <td>
              <h4>url</h4>
            </td>
            <td>
              <CodeExample code={examples.urlInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type url"
                onClick={examples.urlInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-password">
            <td>
              <h4>password</h4>
            </td>
            <td>
              <CodeExample code={examples.passwordInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type password"
                onClick={examples.passwordInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-textarea">
            <td>
              <h4>textarea</h4>
            </td>
            <td>
              <CodeExample code={examples.textareaInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type textarea"
                onClick={examples.textareaInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-select">
            <td>
              <h4>select</h4>
            </td>
            <td>
              <CodeExample code={examples.selectInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type select"
                onClick={examples.selectInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-radio">
            <td>
              <h4>radio</h4>
            </td>
            <td>
              <CodeExample code={examples.radioInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type radio"
                onClick={examples.radioInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-checkbox">
            <td>
              <h4>checkbox</h4>
            </td>
            <td>
              <CodeExample code={examples.checkboxInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type checkbox"
                onClick={examples.checkboxInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-date">
            <td>
              <h4>date</h4>
            </td>
            <td>
              <CodeExample code={examples.dateInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type date"
                onClick={examples.dateInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-file">
            <td>
              <h4>file</h4>
            </td>
            <td>
              <CodeExample code={examples.fileInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type file"
                onClick={examples.fileInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="input-range">
            <td>
              <h4>range</h4>
            </td>
            <td>
              <CodeExample code={examples.rangeInput.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: input type range"
                onClick={examples.rangeInput.fn}
              >
                Try me!
              </button>
            </td>
          </tr>

          <tr id="multiple-inputs" className="mobile-hidden">
            <td colSpan={3}>
              <p>
                Multiple inputs aren't supported, you can achieve them by using <strong>html</strong> and{' '}
                <strong>preConfirm</strong> parameters.
                <br />
                Inside the <strong>preConfirm()</strong> function you can return (or, if async, resolve with) the custom
                result:
              </p>
            </td>
          </tr>

          <tr id="multiple-inputs-example" className="mobile-hidden">
            <td></td>
            <td>
              <CodeExample code={examples.multipleInputs.fnString} />
            </td>
            <td>
              <button
                className="show-example-btn"
                aria-label="Try me! Example: multiple inputs"
                onClick={examples.multipleInputs.fn}
              >
                Try me!
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
