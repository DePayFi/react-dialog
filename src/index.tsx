import Dialog from './components/Dialog'
import DialogContext from './contexts/DialogContext'
import React from 'react'
import ReactDOM from 'react-dom'

interface renderParamenters {
  container: HTMLElement
  content: HTMLElement
}

const render = function ({ container, content }: renderParamenters): void {
  ReactDOM.render(
    <Dialog content={content} />,
    container
  )
}

export { render, DialogContext }
