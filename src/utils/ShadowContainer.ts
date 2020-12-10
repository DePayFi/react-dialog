import ReactDOM from 'react-dom'

const shadowContainerId = 'ReactDialogShadowContainer'

export default function ShadowContainer():HTMLElement {

  let container = document.getElementById(shadowContainerId)
  if(container) { 
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
  }

  container = document.createElement('div')
  container.setAttribute('id', 'ReactDialogShadowContainer')
  document.body.appendChild(container)
  
  let shadow
  let insideContainer = document.createElement('div')
  insideContainer.setAttribute('id', 'ReactDialogInsideContainer')
  if(container.shadowRoot) {
    shadow = container.shadowRoot
  } else {
    shadow = container.attachShadow({ mode: 'closed' })
  }
  shadow.appendChild(insideContainer)
  
  return insideContainer
}
