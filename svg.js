const fs = require('fs')
const path = require('path')
const textToSVG = require('text-to-svg')
const input = process.argv[2]? process.argv[2]:false
const output = process.argv[3]? path.resolve(__dirname, 'src/assets/' + process.argv[3] + '.svg') :false
const fill = process.env.FILL? process.env.FILL:'white'
const stroke = process.env.STROKE? process.env.STROKE:'transparent'
const fontsize = process.env.FONTSIZE? process.env.FONTSIZE:72 

const font = path.resolve(__dirname, 'src/assets/CormorantInfant-SemiBold.ttf')
const attributes = {fill: fill, stroke: stroke}
const options = {x: 0, y: 0, fontSize: fontsize, anchor: 'top', attributes: attributes} 
let svg = ''

if (input) {

  textToSVG.load(font, (err, convert) => {
    if (err) {
      console.log(err)
    }

    svg = convert.getSVG(input, options)
    
    if (output) {
      fs.writeFileSync(output, svg)
    }

    else {
      console.log(svg)
    }
  })

}
