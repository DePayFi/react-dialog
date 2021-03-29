
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import React from 'react';
import ReactDOM from 'react-dom';

class Dialog extends React.Component {
    render() {
        return this.props.content;
    }
}

var DialogContext = React.createContext({});

const render = function ({ container, content }) {
    ReactDOM.render(React.createElement(Dialog, { content: content }), container);
};

export { DialogContext, render };
