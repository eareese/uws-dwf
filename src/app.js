const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);



function changeMottos(s, mottos) {
  let tm = s.select('#motto_top')
  tm.attr({ '#text': mottos.top })
  let bm = s.select('#motto_btm')
  bm.attr({ '#text': mottos.btm })
}

function continueDrawing(s) {
  let topInput = document.getElementById("text_top");
  let btmInput = document.getElementById("text_btm");
  topInput.addEventListener('input', function() {
    changeMottos(s, {top: topInput.value, btm: btmInput.value})
  })
  btmInput.addEventListener('input', function() {
    changeMottos(s, {top: topInput.value, btm: btmInput.value})
  })
  changeMottos(s, {top: topInput.value, btm: btmInput.value})
}

function drawSeal() {
  Snap.load('seal.svg', function(data) {
    let s = Snap('#ky_home')
    continueDrawing(s.add(data))
  })
}

window.addEventListener('load', function() {
  drawSeal()
})
