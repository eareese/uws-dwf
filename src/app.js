const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);


function Seal(image, els) {
  let s = Snap('#ky_home').add(image)
  let topText = s.select('#motto_top')
  let btmText = s.select('#motto_btm')

  function update() {
    topText.attr({ '#text': els.input.top.value })
    btmText.attr({ '#text': els.input.btm.value })

    els.link.download = "fancy-generated-name.svg"
    els.link.href = s.toDataURL()
  }
  return {
    seal: s,
    wireUp: function() {
      update()
      els.input.top.addEventListener('input', update)
      els.input.btm.addEventListener('input', update)
    }
  }
}

window.addEventListener('load', function() {
  let elements = {
    link: document.getElementById('get_img'),
    input: {
      top: document.getElementById('text_top'),
      btm: document.getElementById('text_btm')
    }
  }

  Snap.load('seal.svg', function(data) {
    let sl = Seal(data, elements)
    sl.wireUp()
  })
})
