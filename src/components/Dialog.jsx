import React from 'react'

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
  state = {
    open: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 1)
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : '']
    return (
      <div className={classNames.join(' ')}>
        <style>{style}</style>
        <div className="ReactDialogInner">{this.props.content}</div>
      </div>
    )
  }
}

export default Dialog
