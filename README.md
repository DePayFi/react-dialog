## Quickstart

```
yarn add @depay/react-dialog
```

or 

```
npm install --save @depay/react-dialog
```

```javascript
import { ReactDialog } from '@depay/react-dialog'

  /*...*/

  close() {
    if(this.state == something) {
      this.setState({ showDialog: false })
    }
  }

  /*...*/

  <ReactDialog close={this.close} open={this.state.showDialog}>
    <div className="ReactDialogAnimation MyDialogStyle">
      <h1>I am a dialog</h1>
      <button onclick={this.close}>Close Dialog</button>
    </div>
  </ReactDialog>
```

## Demo

https://depayfi.github.io/react-dialog/dev.html

## Functionalities

### Render

```javascript
import { ReactDialog } from '@depay/react-dialog'

render() {
  return(
    ...
    <ReactDialog close={this.close} open={this.state.showDialog}>
      <div className="ReactDialogAnimation MyDialogStyle">
        <h1>I am a dialog</h1>
        <button onclick={this.close}>Close Dialog</button>
      </div>
    </ReactDialog>
  )
}
```

Please apply the `ReactDialogAnimation` class to the child element that you want to be animated as part of the dialog opening animation.

#### Props

`close (function)`: A function living in the dialog parent that is called from the ReactDialog on a close attempt. The parent has to take care if a dialog is closable, and needs to set it's own state accordingly.

```javascript
  close() {
    if(this.state == something) {
      this.setState({ showDialog: false })
    }
  }

  /*...*/

  <ReactDialog close={this.close} open={this.state.showDialog}>
    <h1>I am a dialog</h1>
    <button onclick={this.close}>Close Dialog</button>
  </ReactDialog>
```

`background (string)`: Background passed as CSS to the `ReactDialogBackground`.

```javascript
  <ReactDialog background={'rgba(255,255,255,0.6)'} close={this.close} open={this.state.showDialog}>
    <h1>I am a dialog with white background.</h1>
  </ReactDialog>
```

`document (Document)`: Allows to forward a different document where the dialog is supposed to live in.

```javascript

  <ReactDialog document={someIframe.document}>
    <h1>I am a dialog</h1>
    <button onclick={this.close}>Close Dialog</button>
  </ReactDialog>
```

`container (HTMLElement)`: Allows to provide a explicit container where the dialog is supposed to be rendered into.

```javascript

  <ReactDialog container={document.getElementById('app')}>
    <h1>I am a dialog</h1>
    <button onclick={this.close}>Close Dialog</button>
  </ReactDialog>
```

## Development

### Get started

```
yarn install
yarn start
```

### Testing

#### Debug Cypress

Starts cypress in `--headed` and `--no-exit`

```
test:cypress:debug
```

Test and debug single cypress file:

```
yarn test:cypress:debug --spec "cypress/integration/close.js"
```

### Release

```
npm publish
```
