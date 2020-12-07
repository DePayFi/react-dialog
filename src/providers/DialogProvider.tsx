import React from 'react'
import DialogContext from '../contexts/DialogContext'

interface DialogProviderProps {
  closeContainer: () => any
}

class DialogProvider extends React.Component<DialogProviderProps> {
  state = {
    closable: true,
  }

  setClosable(closable: boolean) {
    this.setState({
      closable,
    })
  }

  render() {
    return (
      <DialogContext.Provider
        value={{
          closeContainer: this.props.closeContainer,
          setClosable: this.setClosable.bind(this),
          closable: this.state.closable,
        }}
      >
        {this.props.children}
      </DialogContext.Provider>
    )
  }
}

export default DialogProvider
