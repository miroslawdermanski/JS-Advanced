import { expect, assert } from 'chai'
import { PaymentPackage } from './11PaymentPackage.js'

describe('PaymentPackage class', function(){

    it('can instanciate obj with two params- string and number', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.typeOf(obj, 'object')
    })
    it('default value of VAT should be 20', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.VAT, 20)
    })
    it('default value of active should be true', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.active, true)
    })

    it('Accessor name', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.property(obj, 'name')
    })
    it('Accessor name', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.name, 'HR Services')
    })
    it('Accessor name', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.name = 'broski', 'broski')
    })

    it('Accessor value', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.property(obj, 'value')
    })
    it('Accessor value', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.value, 1500)
    })
    it('Accessor value', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.value = 1000, 1000)
    })
    it('should allow a value of zero', () => {
        let obj = new PaymentPackage('HR Services', 1500);
        obj.value = 0;
        assert.equal(obj.value, 0);
    });
    

    it('Accessor VAT', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.property(obj, 'VAT')
    })
    it('Accessor VAT', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.VAT, 20)
    })
    it('Accessor VAT', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.VAT = 10, 10)
    })

    it('Accessor active', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.property(obj, 'active')
    })
    it('Accessor active', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.active, true)
    })
    it('Accessor active', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.active = false, false)
    })

    it('toString()', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        assert.equal(obj.toString(), `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): ${1500 * (1+20/100)}`)
    })
    it('toString()', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        obj.active = false
        assert.equal(obj.toString(), `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): ${1500 * (1+20/100)}`)
    })
    it('toString()', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        obj.VAT = 10
        obj.value = 2000
        assert.equal(obj.toString(), `Package: HR Services\n- Value (excl. VAT): 2000\n- Value (VAT 10%): ${2000 * (1+10/100)}`)
    })

    it('throw error to empty or non-string param name', () => {
        expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(123, 1500)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage([], 1500)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage({}, 1500)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(undefined, 1500)).to.throw('Name must be a non-empty string')
        expect(() => new PaymentPackage(null, 1500)).to.throw('Name must be a non-empty string')
    })
    it('throw error to non-number or negative param value', () => {
        expect(() => new PaymentPackage('HR Services', '1500')).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('HR Services', -1500)).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('HR Services', [])).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('HR Services', {})).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('HR Services', undefined)).to.throw('Value must be a non-negative number')
        expect(() => new PaymentPackage('HR Services', null)).to.throw('Value must be a non-negative number')
    })

    it('VAT method', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        expect(() => obj.VAT = -20).to.throw('VAT must be a non-negative number')
        expect(() => obj.VAT = '20').to.throw('VAT must be a non-negative number')
        expect(() => obj.VAT = []).to.throw('VAT must be a non-negative number')
        expect(() => obj.VAT = {}).to.throw('VAT must be a non-negative number')
        expect(() => obj.VAT = undefined).to.throw('VAT must be a non-negative number')
        expect(() => obj.VAT = null).to.throw('VAT must be a non-negative number')
    })

    it('active property', () => {
        let obj = new PaymentPackage('HR Services', 1500)
        expect(obj.active).to.be.true
        expect(obj.active = false).to.be.false
        expect(() => obj.active = '').to.throw('Active status must be a boolean')
        expect(() => obj.active = 123).to.throw('Active status must be a boolean')
        expect(() => obj.active = []).to.throw('Active status must be a boolean')
        expect(() => obj.active = {}).to.throw('Active status must be a boolean')
        expect(() => obj.active = undefined).to.throw('Active status must be a boolean')
        expect(() => obj.active = null).to.throw('Active status must be a boolean')
    })
})