## Quickstart

```
yarn add depay-react-dialog
```

or 

```
npm install --save depay-react-dialog
```

```javascript
import ReactDialog from 'depay-react-dialog'

render() {
  return(
    ...
    <ReactDialog>
      <h1>I am a dialog</h1>
    </ReactDialog>
  )
}
```

## Functionalities

### Render

```javascript
import ReactDialog from 'depay-react-dialog'

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

`closable (boolean)`: Indicates if dialog is currently closable, prevents closing dialog in case this is set to true.

```
  <ReactDialog closable={false}>
    <h1>I am a unclosable dialog</h1>
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
