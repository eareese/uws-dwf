var canvg = require('canvg-browser')

function initialize() {
  console.log('ready to continue')
}

window.addEventListener('load', function() {
  canvg('ky_canvas', 'seal.svg', {
    renderCallback: initialize
  })
})
