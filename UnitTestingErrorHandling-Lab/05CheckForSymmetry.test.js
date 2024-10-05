import { isSymmetric } from "./05CheckForSymmetry.js";
import {expect, assert} from 'chai'

describe('IsSymmetric', function () {

    it('should return true if input array is symmetric', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true
    })

    it('should return true if input is symmetric array', () => {
        expect(isSymmetric(['miro', 'stefan', 'messi', 'stefan', 'miro'])).to.be.true
    })

    it('Should return false for non-symmetric with mixed types', function () {
        expect(isSymmetric([1, '1'])).to.be.false
    });

    it('should return false if input is not of type array', () => {
        expect(isSymmetric("string")).to.be.false
    });

    it('should return false for non-array inputs like numbers', () => {
        expect(isSymmetric(123)).to.be.false;
    });

    it('should return false for any non-symmetric array input', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false
    })

    it('should return false if input is null', () => {
        expect(isSymmetric(null)).to.be.false
    })

    it('should return false if input is object', () => {
        expect(isSymmetric({})).to.be.false
    })

    it('should return false if input is empty', () => {
        expect(isSymmetric()).to.be.false
    })

    it('should return false if input is undefined', () => {
        expect(isSymmetric(undefined)).to.be.false
    })

    it('should return false if input is args not in array', () => {
        expect(isSymmetric(1, 'err', 4, 'bruh')).to.be.false
    })

    it('should return false if input is empty string', () => {
        expect(isSymmetric('')).to.be.false
    })
})