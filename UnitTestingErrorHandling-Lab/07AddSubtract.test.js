import { expect, assert } from 'chai'
import { createCalculator } from './07AddSubtract.js'

describe('AddSubtract', function (){

    it('should return object with functions: add(), subtract(), get()', () => {
        const calculator = createCalculator()
        assert.typeOf(calculator, 'object')
        assert.typeOf(calculator.add, 'function')
        assert.typeOf(calculator.subtract, 'function')
        assert.typeOf(calculator.get, 'function')
    })

    it('should correctly add numbers', () => {
        const calculator = createCalculator()
        calculator.add(5)
        expect(calculator.get()).to.equal(5)
    })

    it('should correctly subtract numbers', () => {
        const calculator = createCalculator()
        calculator.subtract(5)
        expect(calculator.get()).to.equal(-5)
    })

    it('should correctly add and subtract numbers as strings', () => {
        const calculator = createCalculator()
        calculator.add('5')
        expect(calculator.get()).to.equal(5)
        calculator.subtract('5')
        expect(calculator.get()).to.equal(0)
    })

    it('should not allow internal sum to be modified from outside', () => {
        const calculator = createCalculator()
        calculator.value = 10
        expect(calculator.get()).to.equal(0)
    })

    it('should handle non-numeric operations', () => {
        const calculator = createCalculator()
        calculator.add('abc')
        expect(calculator.get()).to.be.NaN
    })

    it('should execute multiple operations correctly', () => {
        const calculator = createCalculator()
        calculator.add(5)
        calculator.subtract(3)
        calculator.add(2)
        calculator.subtract(3)
        expect(calculator.get()).to.equal(1)
    })
})