export function CreatePortalDocs() {
  return (
    <>
      <p>
        We'll be using{' '}
        <a href="https://react.dev/reference/react-dom/createPortal" target="_blank">
          <strong>createPortal</strong>
        </a>{' '}
        to use the same state between the app and SweetAlert2.
      </p>

      <p>
        <strong>createPortal</strong> accepts two arguments: a React component that you'd like to render and a target
        DOM element. Use <strong>Swal.getTitle()</strong>, <strong>Swal.getHtmlContainer()</strong> or{' '}
        <strong>Swal.getFooter()</strong> as the target element:
      </p>

      <p>
        <strong>createPortal(&lt;Title /&gt;, Swal.getTitle())</strong> <br />
        <strong>createPortal(&lt;Content /&gt;, Swal.getHtmlContainer())</strong> <br />
        <strong>createPortal(&lt;Footer /&gt;, Swal.getFooter())</strong>
      </p>
    </>
  )
}
