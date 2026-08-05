// Inline replacements for the handful of Font Awesome 4 icons this site used
// for its own chrome. FA4 is EOL and pulled a whole icon webfont from a CDN for
// three glyphs. These size off the inherited font-size and inherit text colour.
//
// All are decorative: every call site has adjacent text or its own aria-label,
// so they are hidden from assistive tech.

const decorative = {
  'width': '1em',
  'height': '1em',
  'aria-hidden': true,
  'focusable': 'false',
} as const

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function IconBars() {
  return (
    <svg {...decorative} className="ui-icon" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="5" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="17" width="18" height="2" rx="1" />
    </svg>
  )
}

export function IconExternalLink() {
  return (
    <svg {...decorative} className="ui-icon" viewBox="0 0 24 24" {...stroke}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  )
}
