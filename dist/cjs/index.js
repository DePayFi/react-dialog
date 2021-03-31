'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

const _jsxFileName = "/Users/sebastian/Work/DePay/depay-react-dialog/src/components/Dialog.jsx";


const renderStyle = function (styles) {
  let background =
    typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)';

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
      top: -5vh;
    }
  `
  )
};

class Dialog extends React__default['default'].Component {
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
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
    const style = renderStyle({ background: this.props.background });
    return (
      React__default['default'].createElement('div', { className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName, lineNumber: 107}}
        , React__default['default'].createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 108}}, style)
        , React__default['default'].createElement('div', { className: "ReactDialogBackground", onClick: this.onClickBackground.bind(this), __self: this, __source: {fileName: _jsxFileName, lineNumber: 109}} )
        , React__default['default'].createElement('div', { className: "ReactDialogInner", __self: this, __source: {fileName: _jsxFileName, lineNumber: 110}}, this.props.children)
      )
    )
  }
}

const _jsxFileName$1 = "/Users/sebastian/Work/DePay/depay-react-dialog/src/index.jsx";
class ReactDialog extends React__default['default'].Component {
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
    let _document = this.props.document || document;
    if (this.state.open) {
      return ReactDOM__default['default'].createPortal(
        React__default['default'].createElement(Dialog, {
          background: this.props.background,
          close: this.props.close,
          document: _document,
          open: this.props.open, __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 28}}
        
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

exports.ReactDialog = ReactDialog;
