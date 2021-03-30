import Dialog from './components/Dialog'
import React from 'react'
import ReactDOM from 'react-dom'

class ReactDialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: props.open,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open === false && prevProps.open === true) {
      setTimeout(() => {
        this.setState({ open: false })
      }, 400)
    } else if (this.props.open === true && prevProps.open === false) {
      this.setState({ open: true })
    }
  }

  render() {
    let _document = this.props.document || document
    if (this.state.open) {
      return ReactDOM.createPortal(
        <Dialog open={this.props.open} close={this.props.close} document={_document}>
          {this.props.children}
        </Dialog>,
        _document.body,
      )
    } else {
      // enforces unmount
      return null
    }
  }
}

export { ReactDialog }
