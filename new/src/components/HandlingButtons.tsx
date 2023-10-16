export function HandlingButtons() {
  return (
    <div className="center-container">
      <h3 id="handling-buttons">Handling Buttons (Confirm, Deny, Cancel)</h3>
      <p className="center">
        When the user clicks a button, the Promise returned by <strong>Swal.fire()</strong> will be resolved with the{' '}
        <strong>SweetAlertResult</strong> object:
      </p>
      <table className="dismiss-reasons">
        <thead>
          <tr className="titles">
            <th>Key</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>isConfirmed</strong>
            </td>
            <td>
              The "Confirm" button was clicked, the <strong>value</strong> will contain the result
            </td>
          </tr>
          <tr>
            <td>
              <strong>isDenied</strong>
            </td>
            <td>
              The "Deny" button was clicked, the <strong>value</strong> will be <strong>false</strong>.<br />
              Alternatively, if there's an input in a popup, you can use <strong>
                returnInputValueOnDeny: true
              </strong>{' '}
              to return the input's value.
            </td>
          </tr>
          <tr>
            <td>
              <strong>isDismissed</strong>
            </td>
            <td>
              The "Cancel" button was clicked, the <strong>dismiss</strong> will be
              <strong className="nowrap">Swal.DismissReason.cancel</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>value</strong>
            </td>
            <td>
              The value from the popup, possible values:
              <ul>
                <li>
                  <strong>true</strong> for simple confirmed dialogs
                </li>
                <li>
                  <strong>false</strong> for denied popups
                </li>
                <li>any value for popups with inputs</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>dismiss</strong>
            </td>
            <td>
              The dismissal reason, see the <a href="#handling-dismissals">Handling Dismissals</a> section for details
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
