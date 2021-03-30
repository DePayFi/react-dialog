import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

const renderStyle = function (styles) {
  let background =
    typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)'

  return (
    `
    .ReactDialog {
      align-items: center;
      bottom: 0;
      display: flex;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100vw;
    }

    .ReactDialogBackground {
      background: ` +
    background +
    `;
      bottom: 0;
      display: block;
      height: 100vh;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: all 0.4s ease;
      width: 100vw;
    }

    .ReactDialog.ReactDialogOpen .ReactDialogBackground {
      opacity: 1;
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
  )
}

class Dialog extends React.Component {
  constructor(props) {
    super(props)

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
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  componentWillUnmount() {
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : '']
    const style = renderStyle({ background: this.props.background })
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
