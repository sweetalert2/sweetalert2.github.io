import hljs from 'highlight.js/lib/core'
import langJavascript from 'highlight.js/lib/languages/javascript'
import langXml from 'highlight.js/lib/languages/xml'

import { useEffect, useRef } from 'react'
import type { MouseEventHandler, MutableRefObject } from 'react'

type CodeExampleProps = {
  code: string
  language?: 'javascript' | 'xml'
  codepenHtml?: string
  codepenCssExternal?: string
  withoutCodepen?: boolean
} & React.HTMLAttributes<HTMLPreElement>

export function CodeExample({
  code,
  language = 'javascript',
  codepenHtml,
  codepenCssExternal,
  withoutCodepen,
  ...props
}: CodeExampleProps) {
  const codeRef = useRef() as MutableRefObject<HTMLElement>
  const codepenForm = useRef() as MutableRefObject<HTMLFormElement>
  const codepenFormData = useRef() as MutableRefObject<HTMLInputElement>

  const isAsync = !!code.match(/(^|\n)\w.*await/)

  useEffect(() => {
    if (
      !codeRef.current ||
      codeRef.current.classList.contains('hljs') // already highlighted
    ) {
      return
    }
    if (language === 'javascript') {
      hljs.registerLanguage('javascript', langJavascript)
    } else if (language === 'xml') {
      hljs.registerLanguage('xml', langXml)
    }
    hljs.highlightElement(codeRef.current)
  }, [codeRef, language])

  const openInCodepen: MouseEventHandler = (event) => {
    if (event.nativeEvent.offsetY < 0) {
      type CodepenValue = {
        js_external: string
        css: string
        html?: string
        css_external?: string
        js?: string
      }
      const codepenValue: CodepenValue = {
        js_external: 'https://cdn.jsdelivr.net/npm/sweetalert2@11',
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}',
      }
      codepenValue.html = codepenHtml
      codepenValue.css_external = codepenCssExternal
      codepenValue.js = ''
      if (isAsync) {
        codepenValue.js += `(async () => {\n`
        code = code.replace(/(^|\n)/g, '$1  ')
      }
      codepenValue.js += code.replace(/\/images/g, `${window.location.href}images`)
      if (isAsync) {
        codepenValue.js += `\n})()`
      }
      // submit form
      codepenFormData.current.value = JSON.stringify(codepenValue)
      codepenForm.current.submit()
    }
  }

  return (
    <>
      <pre className={withoutCodepen ? '' : 'code-sample'} onClick={openInCodepen} {...props}>
        <code ref={codeRef}>{code}</code>
      </pre>
      <form action="https://codepen.io/pen/define" method="POST" target="_blank" ref={codepenForm}>
        <input type="hidden" name="data" ref={codepenFormData} />
      </form>
    </>
  )
}
