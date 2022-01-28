import React from 'react'
import ReactDialogStyle from '../styles/ReactDialogStyle'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

class Dialog extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.onKeyDown.bind(this)

    this.state = {
      open: true,
    }
  }

  closeDialog() {
    this.props.close()
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeDialog()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open === false && prevProps.open === true) {
      this.setState({ open: false })
    }
  }

  onClickBackground(event) {
    this.closeDialog()
  }

  componentDidMount() {
    this.setState({ open: false }, () => {
      // make sure state is false first before opening the dialog
      // to ensure opening is animated
      setTimeout(() => {
        this.setState({ open: true })
      }, 10)
    })
    this.props.document.addEventListener('keydown', this.handler, true)
  }

  componentWillUnmount() {
    this.props.document.removeEventListener('keydown', this.handler, true)
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : '']
    const style = ReactDialogStyle({ background: this.props.background })
    return (
      <div className={classNames.join(' ')}>
        <style>{style}</style>
        <div className="ReactDialogRow">
          <div className="ReactDialogCell">
            <div className="ReactDialogBackground" onClick={this.onClickBackground.bind(this)} />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog
