import React from 'react'

interface DialogProps {
  content: React.ReactNode
}

class Dialog extends React.Component<DialogProps> {
  render(): React.ReactNode {
    return this.props.content
  }
}

export default Dialog
