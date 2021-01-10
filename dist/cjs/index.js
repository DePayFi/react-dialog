
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');

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
