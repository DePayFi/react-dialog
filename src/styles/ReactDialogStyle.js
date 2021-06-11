export default function(styles) {
  let background =
    typeof styles === 'object' && styles.background ? styles.background : 'rgba(0,0,0,0.4)'

  return (
    `
    .ReactDialog {
      bottom: 0;
      display: table;
      height: 100%;
      left: 0;
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

    .ReactDialogInner {
      display: inline-block;
      opacity: 0;
      position: relative;
      top: -17vh;
      transition: opacity 0.4s ease, top 0.4s ease;
    }

    .ReactDialog.ReactDialogOpen .ReactDialogInner {
      opacity: 1.0;
      top: -5vh;
    }
  `
  )
}
