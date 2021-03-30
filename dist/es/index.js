import React from 'react';
import ReactDOM from 'react-dom';

const _jsxFileName = "/Users/sebastian/Work/DePay/depay-react-dialog/src/components/Dialog.jsx";


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
`;

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  closeDialog() {
    this.props.close();
  }

  onKeyDown(event) {
    if (event.key === 'Escape') {
      this.closeDialog();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.open === false && prevProps.open === true) {
      this.setState({ open: false });
    }
  }

  onClickBackground(event) {
    this.closeDialog();
  }

  componentDidMount() {
    this.setState({ open: false }, () => {
      // make sure state is false first before opening the dialog
      // to ensure opening is animated
      setTimeout(() => {
        this.setState({ open: true });
      }, 10);
    });
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  componentWillUnmount() {
    this.props.document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  render() {
    console.log('RENDER child', this.state.open);
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
    return (
      React.createElement('div', { className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName, lineNumber: 97}}
        , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 98}}, style)
        , React.createElement('div', { className: "ReactDialogBackground", onClick: this.onClickBackground.bind(this), __self: this, __source: {fileName: _jsxFileName, lineNumber: 99}} )
        , React.createElement('div', { className: "ReactDialogInner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 100}}, this.props.children)
      )
    )
  }
}

const _jsxFileName$1 = "/Users/sebastian/Work/DePay/depay-react-dialog/src/index.jsx";
class ReactDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.open === false && prevProps.open === true) {
      setTimeout(() => {
        this.setState({ open: false });
      }, 400);
    } else if (this.props.open === true && prevProps.open === false) {
      this.setState({ open: true });
    }
  }

  render() {
    console.log('RENDER parent', this.state.open);
    let _document = this.props.document || document;
    if (this.state.open) {
      return ReactDOM.createPortal(
        React.createElement(Dialog, { open: this.props.open, close: this.props.close, document: _document, __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 29}}
          , this.props.children
        ),
        _document.body,
      )
    } else {
      // enforces unmount
      return null
    }
  }
}

export { ReactDialog };
