export function Methods() {
  return (
    <>
      <div className="mobile-hidden">
        <h3 id="methods">Methods</h3>
        <table>
          <thead>
            <tr className="titles">
              <th>Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h4>Swal.isVisible()</h4>
              </td>
              <td>Determine if popup is shown.</td>
            </tr>
            <tr>
              <td>
                <h4>
                  Swal.mixin({`{`} ...options {`}`})
                </h4>
              </td>
              <td>
                Returns an extended version of <strong>Swal</strong> containing <strong>params</strong> as defaults.
                Useful for reusing Swal configuration.
              </td>
            </tr>
            <tr id="update">
              <td>
                <h4>
                  Swal.update({`{`}...options{`}`})
                </h4>
              </td>
              <td>Updates popup options.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.close()</h4>
              </td>
              <td>
                Close the currently open SweetAlert2 popup programmatically, the Promise returned by
                <strong>Swal.fire()</strong> will be resolved with an empty object{' '}
                <strong className="nowrap">{`{}`}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getContainer()</h4>
              </td>
              <td>Get the popup container which contains the backdrop and the popup itself.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getPopup()</h4>
              </td>
              <td>Get the popup.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getTitle()</h4>
              </td>
              <td>Get the popup title.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getProgressSteps()</h4>
              </td>
              <td>Get the progress steps.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getCloseButton()</h4>
              </td>
              <td>Get the close button.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getIcon()</h4>
              </td>
              <td>
                Get the <a href="#icons">icon</a>.
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getIconContent()</h4>
              </td>
              <td>
                Get the <a href="#icons">icon</a> content (without border).
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getHtmlContainer()</h4>
              </td>
              <td>
                Gets the DOM element where the <strong>html</strong>/<strong>text</strong> parameter is rendered to.
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getImage()</h4>
              </td>
              <td>
                Get the <a href="#image">image</a>.
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getActions()</h4>
              </td>
              <td>Get the actions block (buttons container).</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getFooter()</h4>
              </td>
              <td>Get the popup footer.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getFocusableElements()</h4>
              </td>
              <td>Get all focusable elements in the popup.</td>
            </tr>
            <tr id="getConfirmButton">
              <td>
                <h4>Swal.getConfirmButton()</h4>
              </td>
              <td>Get the "Confirm" button.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getDenyButton()</h4>
              </td>
              <td>Get the "Deny" button.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getCancelButton()</h4>
              </td>
              <td>Get the "Cancel" button.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.enableButtons()</h4>
              </td>
              <td>Enable "Confirm" and "Cancel" buttons.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.disableButtons()</h4>
              </td>
              <td>Disable "Confirm" and "Cancel" buttons.</td>
            </tr>
            <tr id="showLoading">
              <td>
                <h4>Swal.showLoading()</h4>
              </td>
              <td>
                Shows loader (spinner), this is useful with AJAX requests.
                <br />
                <br />
                By default the loader be shown instead of the "Confirm" button, but if you want another button to be
                replaced with a loader, just pass it like this:
                <strong className="nowrap">Swal.showLoading(Swal.getDenyButton())</strong>
              </td>
            </tr>
            <tr id="hideLoading">
              <td>
                <h4>Swal.hideLoading()</h4>
              </td>
              <td>Hides loader and shows back the button which was hidden by .showLoading()</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.isLoading()</h4>
              </td>
              <td>
                Determine if popup is in the loading state. Related methods:
                <a href="#showLoading" className="nowrap">
                  Swal.showLoading()
                </a>{' '}
                and
                <a href="#hideLoading" className="nowrap">
                  Swal.hideLoading()
                </a>
              </td>
            </tr>
            <tr id="getTimerLeft">
              <td>
                <h4>Swal.getTimerLeft()</h4>
              </td>
              <td>
                Returns the time left in case when <a href="#timer">timer</a> parameter is set.
              </td>
            </tr>
            <tr id="stopTimer">
              <td>
                <h4>Swal.stopTimer()</h4>
              </td>
              <td>
                Stops the timer in case when <a href="#timer">timer</a> parameter is set. Returns the time left
              </td>
            </tr>
            <tr id="resumeTimer">
              <td>
                <h4>Swal.resumeTimer()</h4>
              </td>
              <td>
                Resume the <a href="#timer">timer</a> previously stopped. Returns the time left
              </td>
            </tr>
            <tr id="toggleTimer">
              <td>
                <h4>Swal.toggleTimer()</h4>
              </td>
              <td>
                Toggle state of the <a href="#timer">timer</a> between stopped and running. Returns the time left
              </td>
            </tr>
            <tr id="isTimerRunning">
              <td>
                <h4>Swal.isTimerRunning()</h4>
              </td>
              <td>
                Returns the status of a <a href="#timer">timer</a>: <strong>true</strong> if is running,
                <strong>false</strong> if it's paused
              </td>
            </tr>
            <tr id="increaseTimer">
              <td>
                <h4>Swal.increaseTimer(ms)</h4>
              </td>
              <td>
                Increase the <a href="#timer">timer</a> by <strong>ms</strong> milliseconds. Returns the time left
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.clickConfirm()</h4>
              </td>
              <td>Click the "Confirm"-button programmatically.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.clickDeny()</h4>
              </td>
              <td>Click the "Deny"-button programmatically.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.clickCancel()</h4>
              </td>
              <td>Click the "Cancel"-button programmatically.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getInput()</h4>
              </td>
              <td>
                Get the input DOM node, this method works with <a href="#input">input parameter</a>.
              </td>
            </tr>
            <tr>
              <td>
                <h4>Swal.disableInput()</h4>
              </td>
              <td>Disable input. A disabled input element is unusable and un-clickable.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.enableInput()</h4>
              </td>
              <td>Enable input.</td>
            </tr>
            <tr id="showValidationMessage">
              <td>
                <h4>Swal.showValidationMessage(message)</h4>
              </td>
              <td>Show the validation message DOM node.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.resetValidationMessage()</h4>
              </td>
              <td>Hide the validation message DOM node.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.getValidationMessage()</h4>
              </td>
              <td>Get the validation message DOM node.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.isValidParameter(param)</h4>
              </td>
              <td>Determine if parameter name is valid.</td>
            </tr>
            <tr>
              <td>
                <h4>Swal.isUpdatableParameter(param)</h4>
              </td>
              <td>
                Determine if parameter name is valid for <a href="#update">Swal.update()</a> method.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
