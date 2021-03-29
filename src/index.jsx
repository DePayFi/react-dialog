import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'

class ReactDialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
    }
  }

  close() {
    this.setState({ open: false })
  }

  render() {
    let _document = (this.props.document || document);
    if (this.state.open) {
      // enforces unmount otherwise
      return ReactDOM.createPortal(
        <Dialog
          close={this.close.bind(this)}
          closable={this.props.closable}
          document={_document}
        >
          {this.props.children}
        </Dialog>,
        _document.body,
      )
    }
    return null
  }
}

export { ReactDialog }
