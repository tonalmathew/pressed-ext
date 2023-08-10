import pressed from '@tonalmathew/pressed'

function activate() {
  pressed.use({
    preventDefault: true,
    upperCase: true,
    styles: {
      backgroundColor: 'cadetblue',
      color: 'white',
    }
  })
  pressed.modify({ 'Control': 'Ctrl', 'Meta': 'Win', ' ': 'Space' })
  pressed.dShift()
}

chrome.runtime.onMessage.addListener(
  function (request) {
    if (request.action === "activate") {
      activate()
    }
    else if (request.action === "deactivate") {
      document.getElementById('pressed').remove()
    }
  }
);