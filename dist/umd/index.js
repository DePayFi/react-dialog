
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactDialog = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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
  class Dialog extends React__default['default'].Component {
      constructor() {
          super(...arguments);
          this.state = {
              open: false,
          };
      }
      componentDidMount() {
          setTimeout(() => {
              this.setState({ open: true });
          }, 1);
      }
      render() {
          const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
          return (React__default['default'].createElement("div", { className: classNames.join(' ') },
              React__default['default'].createElement("style", null, style),
              React__default['default'].createElement("div", { className: "ReactDialogInner" }, this.props.content)));
      }
  }

  var DialogContext = React__default['default'].createContext({});

  const render = function ({ container, content }) {
      ReactDOM__default['default'].render(React__default['default'].createElement(Dialog, { content: content }), container);
  };

  exports.DialogContext = DialogContext;
  exports.render = render;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
