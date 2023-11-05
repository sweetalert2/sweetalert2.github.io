import { useEffect } from 'react'
import docsearch from '@docsearch/js'

export function DocSearch() {
  useEffect(() => {
    docsearch({
      appId: '38BPOKYOZ2',
      apiKey: 'aa152d345260f94e9c0b177ed5437c9e',
      indexName: 'sweetalert2',
      container: '#docsearch',
    })
  }, [])

  return <div id="docsearch"></div>
}
