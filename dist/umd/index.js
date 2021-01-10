
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactDialog = {}, global.React, global.ReactDOM));
}(this, (function (exports, React, ReactDOM) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  class Dialog extends React__default['default'].Component {
      render() {
          return this.props.content;
      }
  }

  const shadowContainerId = 'ReactDialogShadowContainer';
  function ShadowContainer(targetDocument) {
      let container = targetDocument.getElementById(shadowContainerId);
      if (container) {
          ReactDOM__default['default'].unmountComponentAtNode(container);
          container.remove();
      }
      container = targetDocument.createElement('div');
      container.setAttribute('id', 'ReactDialogShadowContainer');
      targetDocument.body.appendChild(container);
      let shadow;
      let insideContainer = targetDocument.createElement('div');
      insideContainer.setAttribute('id', 'ReactDialogInsideContainer');
      if (container.shadowRoot) {
          shadow = container.shadowRoot;
      }
      else {
          shadow = container.attachShadow({ mode: 'open' });
      }
      shadow.appendChild(insideContainer);
      return insideContainer;
  }

  const render = function (targetDocument, content) {
      return ReactDOM__default['default'].render(React__default['default'].createElement(Dialog, { content: content }), ShadowContainer(targetDocument));
  };

  exports.render = render;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
