import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'
import ShadowContainer from './utils/ShadowContainer'

const render = function(targetDocument: Document, content: HTMLElement){
  return ReactDOM.render(
    <Dialog
      content={ content }
    />,
    ShadowContainer(targetDocument)
  )
}

export { render }
