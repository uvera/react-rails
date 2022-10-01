const ReactDOM = require("react-dom")
let createRoot = null
const ReactDOMClient = require("react-dom/client")
createRoot = ReactDOMClient.createRoot

export function supportsHydration() {
  return typeof ReactDOM.hydrate === "function" || typeof ReactDOM.hydrateRoot === "function"
}

export function reactHydrate(node, component) {
  if (typeof ReactDOM.hydrateRoot === "function") {
    return ReactDOM.hydrateRoot(node, component)
  } else {
    return ReactDOM.hydrate(component, node)
  }
}

export function createReactRootLike(node) {
  return createRoot ? createRoot(node) : legacyReactRootLike(node)
}

function legacyReactRootLike(node) {
  const root = {
    render(component) {
      return ReactDOM.render(component, node)
    }
  }
  return root
}
