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
    if (this.state.open) {
      // enforces unmount otherwise
      return ReactDOM.createPortal(
        <Dialog close={this.close.bind(this)} closable={this.props.closable}>
          {this.props.children}
        </Dialog>,
        (this.props.document || document).body,
      )
    }
    return null
  }
}

ReactDialog.propTypes = {
  document: PropTypes.node,
  children: PropTypes.node.isRequired,
  closable: PropTypes.bool,
}

export { ReactDialog }
