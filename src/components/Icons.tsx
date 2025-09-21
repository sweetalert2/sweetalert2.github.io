import type { SweetAlertIcon } from 'sweetalert2'
import Swal from 'sweetalert2'

export function Icons() {
  const showExample = (icon: SweetAlertIcon) => {
    Swal.fire({
      icon,
      title: `Icon ${icon}`,
    })
  }

  return (
    <>
      <h3 id="icons">Icons</h3>
      <table className="popup-icons">
        <tbody>
          <tr>
            <td>
              <h4>success</h4>
            </td>
            <td>
              <div className="swal2-icon swal2-success">
                <div className="swal2-success-circular-line-left"></div>
                <span className="swal2-success-line-tip"></span> <span className="swal2-success-line-long"></span>
                <div className="swal2-success-ring"></div>
                <div className="swal2-success-fix"></div>
                <div className="swal2-success-circular-line-right"></div>
              </div>
            </td>
            <td>
              <button
                className="show-example-btn"
                onClick={() => showExample('success')}
                aria-label="Try me! Example: success modal"
              >
                Try me!
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <h4>error</h4>
            </td>
            <td>
              <div className="swal2-icon swal2-error">
                <span className="swal2-x-mark">
                  <span className="swal2-x-mark-line-left"></span>
                  <span className="swal2-x-mark-line-right"></span>
                </span>
              </div>
            </td>
            <td>
              <button
                className="show-example-btn"
                onClick={() => showExample('error')}
                aria-label="Try me! Example: error modal"
              >
                Try me!
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <h4>warning</h4>
            </td>
            <td>
              <div className="swal2-icon swal2-warning">
                <div className="swal2-icon-content">!</div>
              </div>
            </td>
            <td>
              <button
                className="show-example-btn"
                onClick={() => showExample('warning')}
                aria-label="Try me! Example: warning modal"
              >
                Try me!
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <h4>info</h4>
            </td>
            <td>
              <div className="swal2-icon swal2-info">
                <div className="swal2-icon-content">i</div>
              </div>
            </td>
            <td>
              <button
                className="show-example-btn"
                onClick={() => showExample('info')}
                aria-label="Try me! Example: info modal"
              >
                Try me!
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <h4>question</h4>
            </td>
            <td>
              <div className="swal2-icon swal2-question">
                <div className="swal2-icon-content">?</div>
              </div>
            </td>
            <td>
              <button
                className="show-example-btn"
                onClick={() => showExample('question')}
                aria-label="Try me! Example: question modal"
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
