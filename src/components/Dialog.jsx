import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

const style = `
  .ReactDialog {
    align-items: center;
    background: rgba(0,0,0,0);
    bottom: 0;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: background 0.4s ease;
    width: 100vw;
  }

  .ReactDialog.ReactDialogOpen {
    background: rgba(0,0,0,0.4);
  }

  .ReactDialogBackground {
    bottom: 0;
    display: block;
    height: 100vh;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
  }

  .ReactDialogInner {
    opacity: 0;
    position: relative;
    top: -17vh;
    transition: all 0.4s ease;
  }

  .ReactDialog.ReactDialogOpen .ReactDialogInner {
    opacity: 1.0;
    top: -15vh;
  }
`

class Dialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
    }
  }

  closeDialog() {
    if (this.props.closable === false) {
      return
    }
    this.setState({ open: false }, () => {
      setTimeout(() => this.props.close(), 400)
    })
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeDialog()
    }
  }

  onClickBackground(event) {
    this.closeDialog()
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 1)
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  componentWillUnmount() {
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : '']
    return (
      <div className={classNames.join(' ')}>
        <style>{style}</style>
        <div className="ReactDialogBackground" onClick={this.onClickBackground.bind(this)} />
        <div className="ReactDialogInner">{this.props.children}</div>
      </div>
    )
  }
}

export default Dialog
