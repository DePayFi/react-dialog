
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import React from 'react';
import ReactDOM from 'react-dom';

class Dialog extends React.Component {
    render() {
        return this.props.content;
    }
}

const shadowContainerId = 'ReactDialogShadowContainer';
function ShadowContainer() {
    let container = document.getElementById(shadowContainerId);
    if (container) {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
    }
    container = document.createElement('div');
    container.setAttribute('id', 'ReactDialogShadowContainer');
    document.body.appendChild(container);
    let shadow;
    let insideContainer = document.createElement('div');
    insideContainer.setAttribute('id', 'ReactDialogInsideContainer');
    if (container.shadowRoot) {
        shadow = container.shadowRoot;
    }
    else {
        shadow = container.attachShadow({ mode: 'closed' });
    }
    shadow.appendChild(insideContainer);
    return insideContainer;
}

const render = function (content) {
    return ReactDOM.render(React.createElement(Dialog, { content: content }), ShadowContainer());
};

export { render };
