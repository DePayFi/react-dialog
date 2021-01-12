import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'
import ShadowContainer from './utils/ShadowContainer'

interface renderParamenters {
  document: Document,
  content: HTMLElement,
  styles?: string
}

const render = function({
  document,
  content,
  styles = ''
}: renderParamenters){
  return ReactDOM.render(
    <Dialog
      content={ content }
    />,
    ShadowContainer({ 
      document,
      styles
    })
  )
}

export { render }
