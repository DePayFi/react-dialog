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

class Dialog extends React.Component {constructor(...args) { super(...args); Dialog.prototype.__init.call(this); }
  __init() {this.state = {
    open: false,
  };}

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 1);
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
    return (
      React.createElement('div', { className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName, lineNumber: 50}}
        , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 51}}, style)
        , React.createElement('div', { className: "ReactDialogInner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 52}}, this.props.content)
      )
    )
  }
}

const _jsxFileName$1 = "/Users/sebastian/Work/DePay/depay-react-dialog/src/index.jsx";
const renderDialog = function ({ container, content }) {
  ReactDOM.render(React.createElement(Dialog, { content: content, __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 6}} ), container);
};

export { renderDialog };
