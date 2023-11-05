export function HandlingDismissals() {
  return (
    <div className="center-container">
      <h3 id="handling-dismissals">Handling Dismissals</h3>

      <p className="center">
        When an alert is dismissed by the user, the Promise returned by <strong>Swal.fire()</strong> will be resolved
        with an object{' '}
        <strong className="nowrap">
          {'{'} isDismissed: true, dismiss: reason {'}'}
        </strong>{' '}
        documenting the reason it was dismissed:
      </p>

      <table className="dismiss-reasons">
        <thead>
          <tr className="titles">
            <th>Reason</th>
            <th>Description</th>
            <th>Related configuration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4 className="nowrap">Swal.DismissReason.backdrop</h4>
            </td>
            <td>The user clicked the backdrop.</td>
            <td>
              <a href="#allowOutsideClick">allowOutsideClick</a>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="nowrap">Swal.DismissReason.cancel</h4>
            </td>
            <td>The user clicked the cancel button.</td>
            <td>
              <a href="#showCancelButton">showCancelButton</a>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="nowrap">Swal.DismissReason.close</h4>
            </td>
            <td>The user clicked the close button.</td>
            <td>
              <a href="#showCloseButton">showCloseButton</a>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="nowrap">Swal.DismissReason.esc</h4>
            </td>
            <td>
              The user clicked the <kbd>Esc</kbd> key.
            </td>
            <td>
              <a href="#allowEscapeKey">allowEscapeKey</a>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="nowrap">Swal.DismissReason.timer</h4>
            </td>
            <td>The timer ran out, and the alert closed automatically.</td>
            <td>
              <a href="#timer">timer</a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="center">
        If a popup is dismissed by <strong className="nowrap">Swal.close()</strong>, the Promise will be resolved with
        an object{' '}
        <strong className="nowrap">
          {'{'} isDismissed: true {'}'}
        </strong>{' '}
        (<strong>dismiss</strong> will be
        <strong>undefined</strong>).
      </p>
    </div>
  )
}
