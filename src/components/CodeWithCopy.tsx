import { useRef, useState } from 'react'

type CodeWithCopyProps = React.HTMLAttributes<HTMLElement>

/**
 * A <code> element with a hover-revealed click-to-copy button.
 * Strips `.unselectable` children (e.g. "$ " prompts) from the copied text.
 */
export function CodeWithCopy({ children, ...props }: CodeWithCopyProps) {
  const codeRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  /** @param {React.MouseEvent} e */
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!codeRef.current) return
    const clone = codeRef.current.cloneNode(true) as HTMLElement
    clone.querySelectorAll('.unselectable').forEach((el) => el.remove())
    navigator.clipboard.writeText(clone.textContent?.trim() ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span className="code-with-copy">
      <code ref={codeRef} {...props}>
        {children}
      </code>
      <button className="copy-btn" onClick={handleCopy} aria-label="Copy to clipboard">
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
          </svg>
        )}
      </button>
    </span>
  )
}
