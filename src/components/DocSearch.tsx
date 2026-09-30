import { useEffect } from 'react'
import docsearch from '@docsearch/js/docsearch'

export function DocSearch() {
  useEffect(() => {
    const instance = docsearch({
      appId: '38BPOKYOZ2',
      apiKey: 'aa152d345260f94e9c0b177ed5437c9e',
      indices: ['sweetalert2'],
      container: '#docsearch',
    })

    return () => {
      instance.destroy()
    }
  }, [])

  return <div id="docsearch"></div>
}
