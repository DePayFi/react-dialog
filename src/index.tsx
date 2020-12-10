import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'

const render = function(container: HTMLElement, content: HTMLElement){
  console.log(content)
  return ReactDOM.render(
    <Dialog
      content={ content }
    />,
    container
  )
}

export { Dialog, render }
