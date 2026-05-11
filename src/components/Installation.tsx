import { useEffect, useState } from 'react'
import { CodeExample } from './CodeExample'
// import { Partners } from './Partners'

export function Installation() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('npm install sweetalert2')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <>
      <div className="center-container download-section">
        <h3 id="download">Download &amp; install</h3>
        <div
          style={{
            position: 'relative',
            marginBottom: '24px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f8f9fa',
          }}
        >
          <pre
            style={{
              margin: 0,
              padding: '20px',
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              fontSize: '15px',
              lineHeight: '1.6',
              overflowX: 'auto',
            }}
          >
            <code>
              <span className="unselectable" style={{ color: '#858585', marginRight: '8px' }}>
                ${' '}
              </span>
              <span style={{ color: '#ce9178' }}>npm install sweetalert2</span>
            </code>
          </pre>
          <button
            onClick={handleCopy}
            title="Copy to clipboard"
            aria-label="Copy installation command"
            style={{
              'position': 'absolute',
              'top': '12px',
              'right': '12px',
              'padding': '10px 16px',
              'backgroundColor': copied ? '#10b981' : '#3b82f6',
              'color': 'white',
              'border': 'none',
              'borderRadius': '8px',
              'cursor': 'pointer',
              'fontSize': '13px',
              'fontWeight': '600',
              'letterSpacing': '0.3px',
              'transition': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              'boxShadow': copied ? '0 4px 12px rgba(16, 185, 129, 0.4)' : '0 4px 12px rgba(59, 130, 246, 0.3)',
              'transform': copied ? 'scale(0.98)' : 'scale(1)',
              'display': 'flex',
              'alignItems': 'center',
              'gap': '6px',
              'backdropFilter': 'blur(10px)',
              'WebkitBackdropFilter': 'blur(10px)',
              'opacity': 0.95,
              '&:hover': {
                opacity: 1,
              },
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#2563eb'
                e.currentTarget.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#3b82f6'
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
          >
            <span style={{ fontSize: '16px' }}>{copied ? '✓' : '📋'}</span>
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <p>
          Or grab from{' '}
          <a href="https://www.jsdelivr.com/package/npm/sweetalert2" target="_blank" rel="noopener" className="nowrap">
            jsDelivr CDN <i className="fa fa-external-link"></i>
          </a>
        </p>
        <CodeExample
          code={`<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>`}
          language="xml"
          withoutCodepen
        />
        <JsdelivrInfo />
      </div>

      {/* <Partners /> */}

      <div className="center-container">
        <h3 id="usage">Usage</h3>
        <div>
          <p>1. Import the plugin:</p>
          <CodeExample
            code={`import Swal from 'sweetalert2'

// or via CommonJS
const Swal = require('sweetalert2')`}
            withoutCodepen
          />
          <div className="mobile-hidden">
            <p>It's also possible to import JS and CSS separately, e.g. if you need to customize styles:</p>
            <CodeExample
              code={`import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'`}
              withoutCodepen
            />
            <p>2. Call the sweetAlert2-function after the page has loaded</p>
          </div>
          <CodeExample
            code={`Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})`}
            withoutCodepen
          />
          <p>As an old-school alternative, you can initialize the plugin by referencing the necessary files:</p>
          <CodeExample code={`<script src="sweetalert2.all.min.js"></script>`} withoutCodepen />
          <p className="mobile-hidden">Or with the stylesheet separately if desired:</p>
          <CodeExample
            code={`<script src="sweetalert2.min.js"></script>
<link rel="stylesheet" href="sweetalert2.min.css">`}
            language="xml"
            withoutCodepen
          />
        </div>
      </div>

      <div className="center-container">
        <h3 id="frameworks-integrations">Integrations with major frameworks</h3>
        <div className="frameworks-integrations">
          <div>
            <a
              href="https://github.com/sweetalert2/sweetalert2-react-content"
              target="_blank"
              rel="noopener"
              aria-label="React integration"
            >
              React
              <br />
              <img src="/images/react.svg" width="125" alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/avil13/vue-sweetalert2"
              target="_blank"
              rel="noopener"
              aria-label="Vue integration"
            >
              Vue
              <br />
              <img src="/images/vue.png" width="125" alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/sweetalert2/ngx-sweetalert2"
              target="_blank"
              rel="noopener"
              aria-label="Angular integration"
            >
              Angular
              <br />
              <img src="/images/angular.svg" width="125" alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/sweetalert2/sweetalert2-laravel"
              target="_blank"
              rel="noopener"
              aria-label="Laravel integration"
            >
              Laravel
              <br />
              <img src="/images/laravel.svg" width="125" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function JsdelivrInfo() {
  const [jsdelivrRank, setJsdelivrRank] = useState('')
  const [jsdelivrTotal, setJsdelivrTotal] = useState('')

  function ordinalSuffix(i: string) {
    const n = parseInt(i)
    const j = n % 10
    const k = n % 100
    if (j === 1 && k !== 11) {
      return `${i}st`
    }
    if (j === 2 && k !== 12) {
      return `${i}nd`
    }
    if (j === 3 && k !== 13) {
      return `${i}rd`
    }
    return `${i}th`
  }

  useEffect(() => {
    fetch('https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month')
      .then((response) => response.json())
      .then((response) => {
        if (response.rank && response.total) {
          setJsdelivrRank(response.rank)
          setJsdelivrTotal(response.total)
        }
      })
      .catch(() => {
        // ignore
      })
  }, [])

  if (jsdelivrRank && jsdelivrTotal) {
    return (
      <p className="jsdelivr-info mobile-hidden">
        sweetalert2 is the <strong>{ordinalSuffix(jsdelivrRank)}</strong> most popular package on jsDelivr, with{' '}
        <strong>{parseInt(jsdelivrTotal).toLocaleString()}</strong> CDN hits in the last month
      </p>
    )
  }
}
