import ReactDOM from 'react-dom'

const shadowContainerId = 'ReactDialogShadowContainer'

export default function ShadowContainer(targetDocument: Document):HTMLElement {

  let container = targetDocument.getElementById(shadowContainerId)
  if(container) { 
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
  }

  container = targetDocument.createElement('div')
  container.setAttribute('id', 'ReactDialogShadowContainer')
  targetDocument.body.appendChild(container)
  
  let shadow
  let insideContainer = targetDocument.createElement('div')
  insideContainer.setAttribute('id', 'ReactDialogInsideContainer')
  if(container.shadowRoot) {
    shadow = container.shadowRoot
  } else {
    shadow = container.attachShadow({ mode: 'open' })
  }
  shadow.appendChild(insideContainer)
  
  return insideContainer
}
