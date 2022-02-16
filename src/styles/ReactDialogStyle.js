export default function (styles) {
  let background =
    typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)'

  return `
    .ReactDialog {
      bottom: 0;
      display: flex;
      height: 100%;
      left: 0;
      min-height: 100%;
      overflow: hidden;
      position: fixed;
      right: 0;
      top: 0;
      width: 100%;
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
