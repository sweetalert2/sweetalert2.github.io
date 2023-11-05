import { examples } from '../examples'
import { CodeExample } from './CodeExample'

export function ConfigurationParams() {
  return (
    <>
      <div className="mobile-hidden">
        <h3 id="configuration">Configuration Params</h3>

        <p className="center">Here are the keys that you can use if you pass an object into sweetAlert2:</p>

        <table id="api">
          <thead>
            <tr className="titles">
              <th>
                Argument
                <br />(<i>Default value</i>)
              </th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr id="title">
              <td>
                <a className="hover-anchor" href="#title" children="#" />
                <h4>title</h4>
                <br />
                <i>''</i>
              </td>
              <td>The title of the popup, as HTML.</td>
            </tr>
            <tr id="titleText">
              <td>
                <a className="hover-anchor" href="#titleText" children="#" />
                <h4>titleText</h4>
                <br />
                <i>''</i>
              </td>
              <td>The title of the popup, as text. Useful to avoid HTML injection.</td>
            </tr>
            <tr id="html">
              <td>
                <a className="hover-anchor" href="#html" children="#" />
                <h4>html</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                A HTML description for the popup.
                <br />
                If <strong>text</strong> and <strong>html</strong> parameters are provided in the same time,
                <strong>html</strong> will be used.
                <br />
                [Security] SweetAlert2 does NOT sanitize this parameter. It is the developer's responsibility to escape
                any user input when using the <strong>html</strong> option, so XSS attacks would be prevented.
              </td>
            </tr>
            <tr id="text">
              <td>
                <a className="hover-anchor" href="#text" children="#" />
                <h4>text</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                A description for the popup.
                <br />
                If <strong>text</strong> and <strong>html</strong> parameters are provided in the same time,
                <strong>html</strong> will be used.
              </td>
            </tr>
            <tr id="icon">
              <td>
                <a className="hover-anchor" href="#icon" children="#" />
                <h4>icon</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                The icon of the popup. SweetAlert2 comes with 5 built-in icon which will show a corresponding icon
                animation: <strong>warning</strong>, <strong>error</strong>, <strong>success</strong>,{' '}
                <strong>info</strong>, and <strong>question</strong>. It can either be put in the array under the key
                "icon" or passed as the third parameter of the function.
              </td>
            </tr>
            <tr id="iconColor">
              <td>
                <a className="hover-anchor" href="#iconColor" children="#" />
                <h4>iconColor</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>Use this to change the color of the icon.</td>
            </tr>
            <tr id="iconHtml">
              <td>
                <a className="hover-anchor" href="#iconHtml" children="#" />
                <h4>iconHtml</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>The custom HTML content for an icon.</td>
            </tr>
            <tr id="showClass">
              <td>
                <a className="hover-anchor" href="#showClass" children="#" />
                <h4>showClass</h4>
                <br />
                <i>
                  <CodeExample
                    code={`{
  popup: 'swal2-show',
  backdrop: 'swal2-backdrop-show',
  icon: 'swal2-icon-show'
}`}
                    withoutCodepen
                  />
                </i>
              </td>
              <td>CSS classes for animations when showing a popup (fade in)</td>
            </tr>
            <tr id="hideClass">
              <td>
                <a className="hover-anchor" href="#hideClass" children="#" />
                <h4>hideClass</h4>
                <br />
                <i>
                  <CodeExample
                    code={`{
  popup: 'swal2-hide',
  backdrop: 'swal2-backdrop-hide',
  icon: 'swal2-icon-hide'
}`}
                    withoutCodepen
                  />
                </i>
              </td>
              <td>CSS classes for animations when hiding a popup (fade out)</td>
            </tr>
            <tr id="footer">
              <td>
                <a className="hover-anchor" href="#footer" children="#" />
                <h4>footer</h4>
                <br />
                <i>''</i>
              </td>
              <td>The footer of the popup. Can be either plain text or HTML.</td>
            </tr>
            <tr id="backdrop">
              <td>
                <a className="hover-anchor" href="#backdrop" children="#" />
                <h4>backdrop</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a{' '}
                <strong>boolean</strong> or a <strong>string</strong> which will be assigned to the CSS{' '}
                <strong>background</strong> property.
              </td>
            </tr>
            <tr id="toast">
              <td>
                <a className="hover-anchor" href="#toast" children="#" />
                <h4>toast</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Whether or not an alert should be treated as a toast notification. This option is normally coupled with
                the
                <strong>position</strong> parameter and a timer. Toasts are NEVER autofocused.
              </td>
            </tr>
            <tr id="target">
              <td>
                <a className="hover-anchor" href="#target" children="#" />
                <h4>target</h4>
                <br />
                <i>'body'</i>
              </td>
              <td>The container element for adding popup into.</td>
            </tr>
            <tr id="input">
              <td>
                <a className="hover-anchor" href="#input" children="#" />
                <h4>input</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Input field type, can be <strong>text</strong>, <strong>email</strong>, <strong>password</strong>,{' '}
                <strong>number</strong>, <strong>tel</strong>, <strong>range</strong>, <strong>textarea</strong>,{' '}
                <strong>search</strong>, <strong>url</strong>, <strong>select</strong>, <strong>radio</strong>,{' '}
                <strong>checkbox</strong>, <strong>file</strong>, <strong>date</strong>, <strong>datetime-local</strong>
                , <strong>time</strong>, <strong>week</strong>, <strong>month</strong>.
              </td>
            </tr>
            <tr id="width">
              <td>
                <a className="hover-anchor" href="#width" children="#" />
                <h4>width</h4>
                <br />
                <i>'32em'</i>
              </td>
              <td>
                Popup window width, including paddings (<i>box-sizing: border-box</i>). Can be in any CSS unit (
                <strong>px</strong>, <strong>em/rem</strong>, <strong>%</strong>).
              </td>
            </tr>
            <tr id="padding">
              <td>
                <a className="hover-anchor" href="#padding" children="#" />
                <h4>padding</h4>
                <br />
                <i>'0 0 1.25em'</i>
              </td>
              <td>
                Popup window padding. Can be in any CSS unit (<strong>px</strong>, <strong>em/rem</strong>,{' '}
                <strong>%</strong>).
              </td>
            </tr>
            <tr id="color">
              <td>
                <a className="hover-anchor" href="#color" children="#" />
                <h4>color</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Color for title, content and footer (CSS <strong>color</strong> property). The default color is{' '}
                <strong>'#545454'</strong>.
              </td>
            </tr>
            <tr id="background">
              <td>
                <a className="hover-anchor" href="#background" children="#" />
                <h4>background</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup window background (CSS background property). The default background is <strong>'#fff'</strong>.
              </td>
            </tr>
            <tr id="position">
              <td>
                <a className="hover-anchor" href="#position" children="#" />
                <h4>position</h4>
                <br />
                <i>'center'</i>
              </td>
              <td>
                Popup window position, can be <strong>'top'</strong>, <strong>'top-start'</strong>,{' '}
                <strong>'top-end'</strong>, <strong>'center'</strong>, <strong>'center-start'</strong>,{' '}
                <strong>'center-end'</strong>, <strong>'bottom'</strong>, <strong>'bottom-start'</strong>, or{' '}
                <strong>'bottom-end'</strong>.
              </td>
            </tr>
            <tr id="grow">
              <td>
                <a className="hover-anchor" href="#grow" children="#" />
                <h4>grow</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Paired with window position, sets the direction the popup should grow in, can be set to
                <strong>'row'</strong>, <strong>'column'</strong>, <strong>'fullscreen'</strong>, or{' '}
                <strong>false</strong>.
              </td>
            </tr>
            <tr id="customClass">
              <td>
                <a className="hover-anchor" href="#customClass" children="#" />
                <h4>customClass</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                A custom CSS class for the popup:
                <CodeExample
                  code={`customClass: {
  container: '...',
  popup: '...',
  header: '...',
  title: '...',
  closeButton: '...',
  icon: '...',
  image: '...',
  htmlContainer: '...',
  input: '...',
  inputLabel: '...',
  validationMessage: '...',
  actions: '...',
  confirmButton: '...',
  denyButton: '...',
  cancelButton: '...',
  loader: '...',
  footer: '....',
  timerProgressBar: '....',
}`}
                  withoutCodepen
                />
              </td>
            </tr>
            <tr id="timer">
              <td>
                <a className="hover-anchor" href="#timer" children="#" />
                <h4>timer</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Auto close timer of the popup. Set in ms (milliseconds). See also{' '}
                <a href="#getTimerLeft">Swal.getTimerLeft()</a>, <a href="#stopTimer">Swal.stopTimer()</a>,{' '}
                <a href="#resumeTimer">Swal.resumeTimer()</a>, <a href="#toggleTimer">Swal.toggleTimer()</a>,{' '}
                <a href="#isTimerRunning">Swal.isTimerRunning()</a> and{' '}
                <a href="#increaseTimer">Swal.increaseTimer()</a>.
              </td>
            </tr>
            <tr id="timerProgressBar">
              <td>
                <a className="hover-anchor" href="#timerProgressBar" children="#" />
                <h4>timerProgressBar</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is
                useful with toasts.
              </td>
            </tr>
            <tr id="heightAuto">
              <td>
                <a className="hover-anchor" href="#heightAuto" children="#" />
                <h4>heightAuto</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                By default, SweetAlert2 sets html's and body's CSS <strong>height</strong> to{' '}
                <strong>auto !important</strong>. If this behavior isn't compatible with your project's layout, set{' '}
                <strong>heightAuto</strong> to <strong>false</strong>.
              </td>
            </tr>
            <tr id="allowOutsideClick">
              <td>
                <a className="hover-anchor" href="#allowOutsideClick" children="#" />
                <h4>allowOutsideClick</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                If set to <strong>false</strong>, the user can't dismiss the popup by clicking outside it.
                <br />
                You can also pass a custom function returning a boolean value, e.g. if you want to disable outside
                clicks for the loading state of a popup.
              </td>
            </tr>
            <tr id="allowEscapeKey">
              <td>
                <a className="hover-anchor" href="#allowEscapeKey" children="#" />
                <h4>allowEscapeKey</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                If set to <strong>false</strong>, the user can't dismiss the popup by pressing the <kbd>Esc</kbd> key.
                You can also pass a custom function returning a boolean value, e.g. if you want to disable the{' '}
                <kbd>Esc</kbd> key for the loading state of a popup.
              </td>
            </tr>
            <tr id="allowEnterKey">
              <td>
                <a className="hover-anchor" href="#allowEnterKey" children="#" />
                <h4>allowEnterKey</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                If set to <strong>false</strong>, the user can't confirm the popup by pressing the <kbd>Enter</kbd> or{' '}
                <kbd>Space</kbd> keys, unless they manually focus the confirm button. You can also pass a custom
                function returning a boolean value.
              </td>
            </tr>
            <tr id="stopKeydownPropagation">
              <td>
                <a className="hover-anchor" href="#stopKeydownPropagation" children="#" />
                <h4>stopKeydownPropagation</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                If set to <strong>false</strong>, SweetAlert2 will allow <strong>keydown</strong> events propagation to
                the document.
              </td>
            </tr>
            <tr id="keydownListenerCapture">
              <td>
                <a className="hover-anchor" href="#keydownListenerCapture" children="#" />
                <h4>keydownListenerCapture</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Useful for those who are using SweetAlert2 along with Bootstrap modals. By default{' '}
                <strong>keydownListenerCapture</strong> is <strong>false</strong> which means when a user hits{' '}
                <kbd>Esc</kbd>, both SweetAlert2 and Bootstrap modals will be closed. Set{' '}
                <strong>keydownListenerCapture</strong> to <strong>true</strong> to fix that behavior.
              </td>
            </tr>
            <tr id="showConfirmButton">
              <td>
                <a className="hover-anchor" href="#showConfirmButton" children="#" />
                <h4>showConfirmButton</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                If set to <strong>false</strong>, a "Confirm"-button will not be shown.
              </td>
            </tr>
            <tr id="showDenyButton">
              <td>
                <a className="hover-anchor" href="#showDenyButton" children="#" />
                <h4>showDenyButton</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                If set to <strong>true</strong>, a "Deny"-button will be shown. It can be useful when you want a popup
                with 3 buttons.
              </td>
            </tr>
            <tr id="showCancelButton">
              <td>
                <a className="hover-anchor" href="#showCancelButton" children="#" />
                <h4>showCancelButton</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                If set to <strong>true</strong>, a "Cancel"-button will be shown, which the user can click on to dismiss
                the modal.
              </td>
            </tr>
            <tr id="confirmButtonText">
              <td>
                <a className="hover-anchor" href="#confirmButtonText" children="#" />
                <h4>confirmButtonText</h4>
                <br />
                <i>'OK'</i>
              </td>
              <td>Use this to change the text on the "Confirm"-button.</td>
            </tr>
            <tr id="denyButtonText">
              <td>
                <a className="hover-anchor" href="#denyButtonText" children="#" />
                <h4>denyButtonText</h4>
                <br />
                <i>'No'</i>
              </td>
              <td>Use this to change the text on the "Deny"-button.</td>
            </tr>
            <tr id="cancelButtonText">
              <td>
                <a className="hover-anchor" href="#cancelButtonText" children="#" />
                <h4>cancelButtonText</h4>
                <br />
                <i>'Cancel'</i>
              </td>
              <td>Use this to change the text on the "Cancel"-button.</td>
            </tr>
            <tr id="confirmButtonColor">
              <td>
                <a className="hover-anchor" href="#confirmButtonColor" children="#" />
                <h4>confirmButtonColor</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Use this to change the background color of the "Confirm"-button. The default color is{' '}
                <strong>#3085d6</strong>
              </td>
            </tr>
            <tr id="denyButtonColor">
              <td>
                <a className="hover-anchor" href="#denyButtonColor" children="#" />
                <h4>denyButtonColor</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Use this to change the background color of the "Deny"-button. The default color is{' '}
                <strong>#dd6b55</strong>
              </td>
            </tr>
            <tr id="cancelButtonColor">
              <td>
                <a className="hover-anchor" href="#cancelButtonColor" children="#" />
                <h4>cancelButtonColor</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Use this to change the background color of the "Cancel"-button. The default color is{' '}
                <strong>#aaa</strong>
              </td>
            </tr>
            <tr id="confirmButtonAriaLabel">
              <td>
                <a className="hover-anchor" href="#confirmButtonAriaLabel" children="#" />
                <h4>confirmButtonAriaLabel</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                Use this to change the <strong>aria-label</strong> for the "Confirm"-button.
              </td>
            </tr>
            <tr id="denyButtonAriaLabel">
              <td>
                <a className="hover-anchor" href="#denyButtonAriaLabel" children="#" />
                <h4>denyButtonAriaLabel</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                Use this to change the <strong>aria-label</strong> for the "Deny"-button.
              </td>
            </tr>
            <tr id="cancelButtonAriaLabel">
              <td>
                <a className="hover-anchor" href="#cancelButtonAriaLabel" children="#" />
                <h4>cancelButtonAriaLabel</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                Use this to change the <strong>aria-label</strong> for the "Cancel"-button.
              </td>
            </tr>
            <tr id="buttonsStyling">
              <td>
                <a className="hover-anchor" href="#buttonsStyling" children="#" />
                <h4>buttonsStyling</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this
                parameter to <strong>false</strong>.
              </td>
            </tr>
            <tr id="reverseButtons">
              <td>
                <a className="hover-anchor" href="#reverseButtons" children="#" />
                <h4>reverseButtons</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> if you want to invert default buttons positions ("Confirm"-button on the
                right side).
              </td>
            </tr>
            <tr id="focusConfirm">
              <td>
                <a className="hover-anchor" href="#focusConfirm" children="#" />
                <h4>focusConfirm</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Set to <strong>false</strong> if you want to focus the first element in tab order instead of
                "Confirm"-button by default.
              </td>
            </tr>
            <tr id="returnFocus">
              <td>
                <a className="hover-anchor" href="#returnFocus" children="#" />
                <h4>returnFocus</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Set to <strong>false</strong> if you don't want to return the focus to the element that invoked the
                modal after the modal is closed.
              </td>
            </tr>
            <tr id="focusDeny">
              <td>
                <a className="hover-anchor" href="#focusDeny" children="#" />
                <h4>focusDeny</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> if you want to focus the "Deny"-button by default.
              </td>
            </tr>
            <tr id="focusCancel">
              <td>
                <a className="hover-anchor" href="#focusCancel" children="#" />
                <h4>focusCancel</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> if you want to focus the "Cancel"-button by default.
              </td>
            </tr>
            <tr id="showCloseButton">
              <td>
                <a className="hover-anchor" href="#showCloseButton" children="#" />
                <h4>showCloseButton</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> to show close button in top right corner of the popup.
              </td>
            </tr>
            <tr id="closeButtonHtml">
              <td>
                <a className="hover-anchor" href="#closeButtonHtml" children="#" />
                <h4>closeButtonHtml</h4>
                <br />
                <i>'&amp;times;'</i>
              </td>
              <td>Use this to change the content of the close button.</td>
            </tr>
            <tr id="closeButtonAriaLabel">
              <td>
                <a className="hover-anchor" href="#closeButtonAriaLabel" children="#" />
                <h4>closeButtonAriaLabel</h4>
                <br />
                <i>'Close this dialog'</i>
              </td>
              <td>
                Use this to change the <strong>aria-label</strong> for the close button.
              </td>
            </tr>
            <tr id="loaderHtml">
              <td>
                <a className="hover-anchor" href="#loaderHtml" children="#" />
                <h4>loaderHtml</h4>
                <br />
                <i>''</i>
              </td>
              <td>Use this to change the HTML content of the loader.</td>
            </tr>
            <tr id="showLoaderOnConfirm">
              <td>
                <a className="hover-anchor" href="#showLoaderOnConfirm" children="#" />
                <h4>showLoaderOnConfirm</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> to disable buttons and show the loader instead of the Confirm button. Use
                it in combination with the{' '}
                <a href="#preConfirm">
                  <strong>preConfirm</strong>
                </a>{' '}
                parameter.
              </td>
            </tr>
            <tr id="showLoaderOnDeny">
              <td>
                <a className="hover-anchor" href="#showLoaderOnDeny" children="#" />
                <h4>showLoaderOnDeny</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                Set to <strong>true</strong> to disable buttons and show the loader instead of the Deny button. Use it
                in combination with the{' '}
                <a href="#preDeny">
                  <strong>preDeny</strong>
                </a>{' '}
                parameter.
              </td>
            </tr>
            <tr id="scrollbarPadding">
              <td>
                <a className="hover-anchor" href="#scrollbarPadding" children="#" />
                <h4>scrollbarPadding</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Set to <strong>false</strong> to disable body padding adjustment when the page scrollbar gets hidden
                while the popup is shown
              </td>
            </tr>
            <tr id="preConfirm">
              <td>
                <a className="hover-anchor" href="#preConfirm" children="#" />
                <h4>preConfirm</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Function to execute before confirming, may be async (Promise-returning) or sync. <br />
                Returned (or resolved) value can be:
                <ul>
                  <li>
                    <strong>false</strong> to prevent a popup from closing
                  </li>
                  <li>
                    anything else to pass that value as the <strong>result.value</strong> of{' '}
                    <strong>Swal.fire()</strong>
                  </li>
                  <li>
                    <strong>undefined</strong> to keep the default <strong>result.value</strong>
                  </li>
                </ul>
                See <a href="#ajax-request">usage example</a>.
              </td>
            </tr>
            <tr id="preDeny">
              <td>
                <a className="hover-anchor" href="#preDeny" children="#" />
                <h4>preDeny</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Function to execute before denying, may be async (Promise-returning) or sync. <br />
                Returned (or resolved) value can be:
                <ul>
                  <li>
                    <strong>false</strong> to prevent a popup from closing
                  </li>
                  <li>
                    anything else to pass that value as the <strong>result.value</strong> of{' '}
                    <strong>Swal.fire()</strong>
                  </li>
                  <li>
                    <strong>undefined</strong> to keep the default <strong>result.value</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr id="returnInputValueOnDeny">
              <td>
                <a className="hover-anchor" href="#returnInputValueOnDeny" children="#" />
                <h4>returnInputValueOnDeny</h4>
                <br />
                <i>false</i>
              </td>
              <td>
                If you want to return the input value as <strong>result.value</strong> when denying the popup, set to{' '}
                <strong>true</strong>. Otherwise, the denying will set <strong>result.value</strong> to{' '}
                <strong>false</strong>.
              </td>
            </tr>
            <tr id="imageUrl">
              <td>
                <a className="hover-anchor" href="#imageUrl" children="#" />
                <h4>imageUrl</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>Add a customized icon for the popup. Should contain a string with the path or URL to the image.</td>
            </tr>
            <tr id="imageWidth">
              <td>
                <a className="hover-anchor" href="#imageWidth" children="#" />
                <h4>imageWidth</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                If imageUrl is set, you can specify imageWidth to describes image width. Can be in any CSS unit (
                <strong>px</strong>, <strong>em/rem</strong>, <strong>%</strong>).
              </td>
            </tr>
            <tr id="imageHeight">
              <td>
                <a className="hover-anchor" href="#imageHeight" children="#" />
                <h4>imageHeight</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Custom image height. Can be in any CSS unit (<strong>px</strong>, <strong>em/rem</strong>,{' '}
                <strong>%</strong>).
              </td>
            </tr>
            <tr id="imageAlt">
              <td>
                <a className="hover-anchor" href="#imageAlt" children="#" />
                <h4>imageAlt</h4>
                <br />
                <i>''</i>
              </td>
              <td>An alternative text for the custom image icon.</td>
            </tr>
            <tr id="inputLabel">
              <td>
                <a className="hover-anchor" href="#inputLabel" children="#" />
                <h4>inputLabel</h4>
                <br />
                <i>''</i>
              </td>
              <td>Input field label.</td>
            </tr>
            <tr id="inputPlaceholder">
              <td>
                <a className="hover-anchor" href="#inputPlaceholder" children="#" />
                <h4>inputPlaceholder</h4>
                <br />
                <i>''</i>
              </td>
              <td>Input field placeholder.</td>
            </tr>
            <tr id="inputValue">
              <td>
                <a className="hover-anchor" href="#inputValue" children="#" />
                <h4>inputValue</h4>
                <br />
                <i>''</i>
              </td>
              <td>
                Input field initial value. <br />
                <br />
                If the input type is <strong>select</strong>, <strong>inputValue</strong> will represent the selected{' '}
                <strong>&lt;option&gt;</strong> tag. <br />
                <br />
                If the input type is <strong>checkbox</strong>, <strong>inputValue</strong> will represent the{' '}
                <strong>checked</strong> state. <br />
                <br />
                If the input type is <strong>email</strong>, <strong>number</strong>, <strong>tel</strong>,
                <strong>text</strong>, <strong>email</strong>, <strong>number</strong>, <strong>tel</strong>
                or <strong>textarea</strong>, a Promise can be accepted as <strong>inputValue</strong>.
              </td>
            </tr>
            <tr id="inputOptions">
              <td>
                <a className="hover-anchor" href="#inputOptions" children="#" />
                <h4>inputOptions</h4>
                <br />
                <i>{}</i>
              </td>
              <td>
                If <strong>input</strong> parameter is set to <strong>"select"</strong> or <strong>"radio"</strong>, you
                can provide options. Can be a Map or a plain object, with keys that represent option values and values
                that represent option text. You can also provide plain object or Map as values that will represented a
                group of options, being the label of this <strong>&lt;optgroup&gt;</strong> the key. Finally, you can
                also provide a Promise that resolves with one of those types.
              </td>
            </tr>
            <tr id="inputAutoFocus">
              <td>
                <a className="hover-anchor" href="#inputAutoFocus" children="#" />
                <h4>inputAutoFocus</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Automatically focus the input when popup is shown. Set this parameter to <strong>false</strong> to
                disable auto-focusing.
              </td>
            </tr>
            <tr id="inputAutoTrim">
              <td>
                <a className="hover-anchor" href="#inputAutoTrim" children="#" />
                <h4>inputAutoTrim</h4>
                <br />
                <i>true</i>
              </td>
              <td>
                Automatically remove whitespaces from both ends of a result string. Set this parameter to{' '}
                <strong>false</strong> to disable auto-trimming.
              </td>
            </tr>
            <tr id="inputAttributes">
              <td>
                <a className="hover-anchor" href="#inputAttributes" children="#" />
                <h4>inputAttributes</h4>
                <br />
                <i>{}</i>
              </td>
              <td>
                HTML input attributes (e.g. <strong>min</strong>, <strong>max</strong>, <strong>autocomplete</strong>,{' '}
                <strong>accept</strong>), that are added to the input field. Object keys will represent attributes
                names, object values will represent attributes values.
              </td>
            </tr>
            <tr id="inputValidator">
              <td>
                <a className="hover-anchor" href="#inputValidator" children="#" />
                <h4>inputValidator</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Validator for input field, may be async (Promise-returning) or sync. <br />
                Returned (or resolved) value can be:
                <ul>
                  <li>
                    a <strong>falsy</strong> value (<strong>undefined</strong>, <strong>null</strong>,
                    <strong>false</strong>) for indicating <i>success</i>
                  </li>
                  <li>
                    a string value (error message) for indicating <i>failure</i>
                  </li>
                </ul>
                See <a href="#input-select">usage example</a>.
              </td>
            </tr>
            <tr id="validationMessage">
              <td>
                <a className="hover-anchor" href="#validationMessage" children="#" />
                <h4>validationMessage</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>A custom validation message for default validators (email, url).</td>
            </tr>
            <tr id="progressSteps">
              <td>
                <a className="hover-anchor" href="#progressSteps" children="#" />
                <h4>progressSteps</h4>
                <br />
                <i>[]</i>
              </td>
              <td>Progress steps, useful for queues.</td>
            </tr>
            <tr id="currentProgressStep">
              <td>
                <a className="hover-anchor" href="#currentProgressStep" children="#" />
                <h4>currentProgressStep</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>Current active progress step.</td>
            </tr>
            <tr id="progressStepsDistance">
              <td>
                <a className="hover-anchor" href="#progressStepsDistance" children="#" />
                <h4>progressStepsDistance</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Distance between progress steps. Can be in any CSS unit (<strong>px</strong>, <strong>em/rem</strong>,{' '}
                <strong>%</strong>).
              </td>
            </tr>
            <tr id="willOpen">
              <td>
                <a className="hover-anchor" href="#willOpen" children="#" />
                <h4>willOpen</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Synchronously runs before the popup is shown on screen. Provides popup DOM element
                as the argument. In previous versions, this hook was named <strong>onBeforeOpen</strong>.
              </td>
            </tr>
            <tr id="didOpen">
              <td>
                <a className="hover-anchor" href="#didOpen" children="#" />
                <h4>didOpen</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Asynchronously runs after the popup has been shown on screen. Provides popup DOM
                element as the argument. In previous versions, this hook was named <strong>onOpen</strong>.
              </td>
            </tr>
            <tr id="didRender">
              <td>
                <a className="hover-anchor" href="#didRender" children="#" />
                <h4>didRender</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the popup
                is repainted on the screen).
                <br />
                Provides popup DOM element as the argument.
                <br />
                Typically, this will happen after <strong>Swal.fire()</strong> or <strong>Swal.update()</strong>.<br />
                If you want to perform changes in the popup's DOM, that survive <strong>Swal.update()</strong>, prefer
                <strong>didRender</strong> over <strong>willOpen</strong>.
                <br />
                In previous versions, this hook was named <strong>onRender</strong>.
              </td>
            </tr>
            <tr id="willClose">
              <td>
                <a className="hover-anchor" href="#willClose" children="#" />
                <h4>willClose</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to
                another popup being fired). Provides popup DOM element as the argument. In previous versions, this hook
                was named <strong>onClose</strong>.
              </td>
            </tr>
            <tr id="didClose">
              <td>
                <a className="hover-anchor" href="#didClose" children="#" />
                <h4>didClose</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not
                due to another popup being fired). In previous versions, this hook was named{' '}
                <strong>onAfterClose</strong>.
              </td>
            </tr>
            <tr id="didDestroy">
              <td>
                <a className="hover-anchor" href="#didDestroy" children="#" />
                <h4>didDestroy</h4>
                <br />
                <i>undefined</i>
              </td>
              <td>
                Popup lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by
                another popup.
                <br />
                If you have cleanup operations that you need to reliably execute each time a popup is closed, prefer
                <strong>didDestroy</strong> over <strong>didClose</strong>.
                <br />
                In previous versions, this hook was named <strong>onDestroy</strong>.
              </td>
            </tr>
          </tbody>
        </table>

        <p className="center" id="mixin">
          You can easily reuse configuration by creating your own <strong>Swal</strong> with{' '}
          <strong>
            Swal.mixin({'{'}...options{'}'})
          </strong>
          :
        </p>
      </div>
      <ul className="examples">
        <li>
          <div className="ui">
            <p>Mixin example</p>
            <button className="show-example-btn" aria-label="Try me! Example: Mixin" onClick={examples.mixin.fn}>
              Try me!
            </button>
          </div>
          <CodeExample code={examples.mixin.fnString} />
        </li>
      </ul>
    </>
  )
}
