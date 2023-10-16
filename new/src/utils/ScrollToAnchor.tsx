import { useEffect } from 'react'

export function ScrollToAnchor() {
  useEffect(() => {
    const hash = location.hash.slice(1) // safe hash for further use after navigation
    if (!hash) {
      return
    }

    const anchorElement = document.getElementById(hash)
    if (!anchorElement) {
      return
    }

    setTimeout(() => {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [])

  return null
}
