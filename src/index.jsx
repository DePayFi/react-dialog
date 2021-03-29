import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'

const renderDialog = function ({ container, content }) {
  ReactDOM.render(<Dialog content={content} />, container)
}

export { renderDialog }
