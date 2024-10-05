import { isOddOrEven } from './02EvenOdd.js'
import { expect, assert } from 'chai'

describe('Odd or Even', function (){

    it('should return even with even length of param', () => {
        let param = 'stri'
        expect(isOddOrEven(param)).to.equal('even')
    })

    it('should return odd if param length is odd', () => {
        let param = 'str'
        expect(isOddOrEven(param)).to.equal('odd')
    })

    it('should return undefined if param is not string', () => {
        let param = 123
        expect(isOddOrEven(param)).to.be.undefined
        param = {}
        expect(isOddOrEven(param)).to.be.undefined
        param = []
        expect(isOddOrEven(param)).to.be.undefined
    })
})