## Quickstart

```
yarn add depay-react-dialog
```

or 

```
npm install --save depay-react-dialog
```

```javascript
import { ReactDialog } from 'depay-react-dialog'

  /*...*/

  close() {
    if(this.state == something) {
      this.setState({ showDialog: false })
    }
  }

  /*...*/

  <ReactDialog close={this.close} open={this.showDialog}>
    <h1>I am a dialog</h1>
    <button onclick={this.close}>Close Dialog</button>
  </ReactDialog>
```

## Functionalities

### Render

```javascript
import { ReactDialog } from 'depay-react-dialog'

render() {
  return(
    ...
    <ReactDialog>
      <h1>I am a dialog</h1>
    </ReactDialog>
  )
}
```

#### Props

`close (function)`: A function living in the dialog parent that is called from the ReactDialog on a close attempt. The parent has to take care if a dialog is closable, and needs to set it's own state accordingly.

```javascript
  close() {
    if(this.state == something) {
      this.setState({ showDialog: false })
    }
  }

  /*...*/

  <ReactDialog close={this.close} open={this.showDialog}>
    <h1>I am a dialog</h1>
    <button onclick={this.close}>Close Dialog</button>
  </ReactDialog>
```

`document (Document)`: Allows to forward a different document where the dialog is supposed to live in (created through ReactDOM portal).

```javascript

  <ReactDialog document={someIframe.document}>
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

### Release

```
npm publish
```
