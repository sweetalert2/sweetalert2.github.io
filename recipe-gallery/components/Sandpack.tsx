import type { SandpackFile } from '@codesandbox/sandpack-react'
import { Sandpack as SandpackReact } from '@codesandbox/sandpack-react'
import { cobalt2 } from '@codesandbox/sandpack-themes'

type SandpackProps = {
  dependencies?: Record<string, string>
  entry?: string
  files: Record<string, SandpackFile | string>
  editorHeight?: number
  previewHeight?: number
}

export function Sandpack({
  dependencies = {},
  entry = 'App.ts',
  editorHeight = 600,
  previewHeight = 350,
  files,
}: SandpackProps) {
  if (!files['/index.html']) {
    files['/index.html'] = {
      code: `<style>body { font-family: sans-serif; }</style>`,
      hidden: true,
    }
  }
  return (
    <SandpackReact
      theme={cobalt2}
      customSetup={{
        dependencies: {
          sweetalert2: 'latest',
          ...dependencies,
        },
        entry,
      }}
      files={files}
      options={{
        showLineNumbers: true,
        recompileMode: 'delayed',
        recompileDelay: 3000,
        classes: {
          'sp-editor': `sp-h${editorHeight}`,
          'sp-preview': `sp-h${previewHeight}`,
        },
      }}
    />
  )
}
