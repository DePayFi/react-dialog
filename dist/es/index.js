import React from 'react';
import ReactDOM from 'react-dom';

function ReactDialogStyle (styles) {
  let background =
    typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)';

  return (
    `
    .ReactDialog {
      bottom: 0;
      display: table-row-group;
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: 0;
      user-select: none;
      width: 100%;
    }

    .ReactDialogRow {
      display: table-row;
      height: 100%;
      width: 100%;
    }

    .ReactDialogCell {
      display: table-cell;
      height: 100%;
      vertical-align: middle;
      width: 100%;
      text-align: center;
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
      transition: opacity 0.4s ease;
      width: 100vw;
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
  )
}

const _jsxFileName = "/Users/sebastian/Work/DePay/depay-react-dialog/src/components/Dialog.jsx";


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
    const classNames = ['ReactDialog', this.state.open ? 'ReactDialogOpen' : ''];
    const style = ReactDialogStyle({ background: this.props.background });
    return (
      React.createElement('div', { className: classNames.join(' '), __self: this, __source: {fileName: _jsxFileName, lineNumber: 54}}
        , React.createElement('style', {__self: this, __source: {fileName: _jsxFileName, lineNumber: 55}}, style)
        , React.createElement('div', { className: "ReactDialogRow", __self: this, __source: {fileName: _jsxFileName, lineNumber: 56}}
          , React.createElement('div', { className: "ReactDialogCell", __self: this, __source: {fileName: _jsxFileName, lineNumber: 57}}
            , React.createElement('div', { className: "ReactDialogBackground", onClick: this.onClickBackground.bind(this), __self: this, __source: {fileName: _jsxFileName, lineNumber: 58}} )
            , this.props.children
          )
        )
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
    let _document = this.props.document || document;
    if (this.state.open) {
      return ReactDOM.createPortal(
        React.createElement(Dialog, {
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

export { ReactDialog };
