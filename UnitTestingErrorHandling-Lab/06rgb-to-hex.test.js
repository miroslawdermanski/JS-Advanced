import { expect, assert } from 'chai'
import { rgbToHexColor } from './06rgb-to-hex.js'

describe('RGB-to-HEX', function (){

    it('should return undefined if any of the 3 inputs is NaN', () => {
        assert.equal(rgbToHexColor(1, 2, 'meh'), undefined)
        assert.equal(rgbToHexColor('meh', 2, 3), undefined)
        assert.equal(rgbToHexColor(1, 'meh', 3), undefined)
    });

    it('should return undefined if any of the inputs is not in range 0-255', () => {
        assert.equal(rgbToHexColor(1, 2, 256), undefined)
        assert.equal(rgbToHexColor(256, 2, 3), undefined)
        assert.equal(rgbToHexColor(1, 256, 3), undefined)

        assert.equal(rgbToHexColor(-1, 2, 3), undefined)
        assert.equal(rgbToHexColor(1, -2, 3), undefined)
        assert.equal(rgbToHexColor(1, 2, -3), undefined)
    })

    it('should return the color type in hex format', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000')
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00')
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF')
    })
})