
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactDialog = {}, global.React, global.ReactDOM));
})(this, (function (exports, React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function ReactDialogStyle (styles) {
    let background =
      typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)';

    return `
    .ReactDialog {
      bottom: 0;
      display: flex;
      height: 100%;
      height: 100vh;
      left: 0;
      min-height: 100%;
      min-height: 100vh;
      overflow: hidden;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
      width: 100vw;
    }

    .ReactDialogInner {
      align-items: center;
      display: flex;
      flex: 1;
      justify-content: center;
    }

    .ReactDialogBackground {
      background: ${background};
      bottom: 0;
      display: block;
      height: 100%;
      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: 0;
      transition: opacity 0.4s ease;
      width: 100%;
    }

    .ReactDialog.ReactDialogOpen .ReactDialogBackground {
      opacity: 1;
    }

    .ReactDialogAnimation {
      display: inline-block;
      position: relative;
      opacity: 0;
      top: -17vh;
      transition: opacity 0.4s ease, top 0.4s ease;
    }

    .ReactDialog.ReactDialogOpen .ReactDialogAnimation {
      opacity: 1.0;
      top: -5vh;
    }
  `
  }

  const _jsxFileName$1 = "/Users/sebastian/Work/DePay/react-dialog/src/components/Dialog.jsx";
  class Dialog extends React__default["default"].Component {
    constructor(props) {
      super(props);

      this.handler = this.onKeyDown.bind(this);

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
      this.props.document.addEventListener('keydown', this.handler, true);
    }

    componentWillUnmount() {
      this.props.document.removeEventListener('keydown', this.handler, true);
    }

    render() {
      const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
      const style = ReactDialogStyle({ background: this.props.background });
      return (
        React__default["default"].createElement('div', { key:  this.props.dialogKey , className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 55}}
          , React__default["default"].createElement('style', {__self: this, __source: {fileName: _jsxFileName$1, lineNumber: 56}}, style)
          , React__default["default"].createElement('div', { className: "ReactDialogInner", __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 57}}
            , React__default["default"].createElement('div', { className: "ReactDialogBackground", onClick: this.onClickBackground.bind(this), __self: this, __source: {fileName: _jsxFileName$1, lineNumber: 58}} )
            , this.props.children
          )
        )
      )
    }
  }

  const _jsxFileName = "/Users/sebastian/Work/DePay/react-dialog/src/index.jsx";
  class ReactDialog extends React__default["default"].Component {
    constructor(props) {
      super(props);

      this.state = {
        open: props.open,
        dialogKey: new Date().getTime()
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
      let container = this.props.container || _document.body;
      if (this.state.open) {
        return ReactDOM__default["default"].createPortal(
          React__default["default"].createElement(Dialog, {
            dialogKey: this.props.dialogKey || this.state.dialogKey,
            background: this.props.background,
            close: this.props.close,
            document: _document,
            open: this.props.open, __self: this, __source: {fileName: _jsxFileName, lineNumber: 30}}
          
            , this.props.children
          ),
          container,
        )
      } else {
        // enforces unmount
        return null
      }
    }
  }

  exports.ReactDialog = ReactDialog;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
