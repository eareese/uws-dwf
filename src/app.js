import './lib/svg_todataurl.js'
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`)

function offset(el) {
  /* Calculates the X/Y coordinates of an element relative to the document.
     source: plainjs.com
  */
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function Seal (image, els) {
  let s = Snap('#ky_home').add(image)
  let sealEl = s.select('#seal')
  let topText = s.select('#motto_top')
  let btmText = s.select('#motto_btm')

  function update () {
    topText.attr({ '#text': els.input.top.value })
    btmText.attr({ '#text': els.input.btm.value })
  }
  function toImage (data) {
    els.img.onload = function() {
      let yOffset = offset(els.link).top
      window.scrollTo(0, yOffset)
    }
    els.img.src = data
  }
  return {
    seal: s,
    init: function () {
      update()
      els.input.top.addEventListener('input', update)
      els.input.btm.addEventListener('input', update)
      els.link.addEventListener('click', function () {
        sealEl.node.toDataURL('image/png', {
          callback: function (data) {
            toImage(data)
          }
        })
      })
    }
  }
}

window.addEventListener('load', function () {
  const ELEMENTS = {
    link: document.getElementById('get_img'),
    img: document.getElementById('seal2img'),
    input: {
      top: document.getElementById('text_top'),
      btm: document.getElementById('text_btm')
    }
  }

  Snap.load('seal.svg', function (data) {
    let sl = Seal(data, ELEMENTS)
    sl.init()
  })
})
