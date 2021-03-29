'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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

class Dialog extends React__default['default'].Component {constructor(...args) { super(...args); Dialog.prototype.__init.call(this); }
  __init() {this.state = {
    open: false,
  };}

  closeDialog() {
    this.setState({ open: false }, () => {
      setTimeout(() => this.props.close, 400);
    });
  }

  onKeyDown(event) {
    if(event.key === 'Escape') { 
      this.closeDialog();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true });
    }, 1);
    document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  render() {
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
    return (
      React__default['default'].createElement('div', { className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
        , React__default['default'].createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}, style)
        , React__default['default'].createElement('div', { className: "ReactDialogInner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 71}},  this.props.children )
      )
    )
  }
}

const _jsxFileName$1 = "/Users/sebastian/Work/DePay/depay-react-dialog/src/index.jsx";
class ReactDialog extends React__default['default'].Component {constructor(...args) { super(...args); ReactDialog.prototype.__init.call(this); }
  __init() {this.state = {
    open: true
  };}

  close() {
    this.setState({open: false});
  }

  render() {
    if(this.state.open) { // enforces unmount otherwise
      return ReactDOM__default['default'].createPortal(
        React__default['default'].createElement(Dialog, {
          close:  this.close.bind(this) ,
          closable:  this.props.closable , __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 17}}
        ,  this.props.children ),
        (this.props.document || document).body
      )
    }
    return null;
  }
}

exports.ReactDialog = ReactDialog;
