import { examples } from '../examples'
import { CodeExample } from './CodeExample'
// import { Partners } from './Partners'

export function Showcase() {
  return (
    <>
      <div className="showcase normal">
        <div className="normal-alert">Normal alert</div>
        <button onClick={examples.normalAlert.fn}>Show normal alert</button>
        <CodeExample code={examples.normalAlert.fnString} />
        <div className="vs-icon"></div>
      </div>

      <div className="showcase sweet">
        <img src="/images/SweetAlert2.png" height="30" alt="SweetAlert2" />
        <button
          className="show-example-btn"
          aria-label="Show SweetAlert2 success message"
          onClick={examples.sweetAlert.fn}
        >
          Show success message
        </button>
        <CodeExample code={examples.sweetAlert.fnString} />
      </div>

      {/* <Partners /> */}
    </>
  )
}
