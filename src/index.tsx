import Dialog from './components/Dialog'
import DialogContext from './contexts/DialogContext'
import React from 'react'
import ReactDOM from 'react-dom'
import ShadowContainer from './utils/ShadowContainer'

interface renderParamenters {
  document: Document
  content: HTMLElement
  styles?: string
}

const render = function ({ document, content, styles = '' }: renderParamenters): void {
  ReactDOM.render(
    <Dialog content={content} />,
    ShadowContainer({
      document,
      styles,
    }),
  )
}

export { render, DialogContext }
