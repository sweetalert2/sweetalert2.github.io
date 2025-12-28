import ReactDOM from 'react-dom/client'

/**
 * Renders a React component into the app-root element.
 * This utility removes duplicated ReactDOM.createRoot code across recipe pages.
 */
export function renderRecipe(component: React.ReactElement) {
  ReactDOM.createRoot(document.querySelector('.app-root')!).render(component)
}
