import { expect, assert } from "chai"
import {StringBuilder} from "./string-builder.js"

describe('Testing methods and functionality of StringBuilder class', function(){

    describe('Can be instantiated with a passed in string argument or without anything', function(){

        it('should create an object if param is string', () => {
            let obj = new StringBuilder('string')
            expect(obj).to.be.an('object')
        })
        it('should create an object if no param is passed', () => {
            let obj = new StringBuilder()
            expect(obj).to.be.an('object')
        })
        it('should throw error if param different to string is passed', () => {
            expect(() => new StringBuilder(123)).to.throw(TypeError)
            expect(() => new StringBuilder([])).to.throw(TypeError)
            expect(() => new StringBuilder({})).to.throw(TypeError)
        })
    })

    describe('append method', function(){

        it('should convert string param into array and adds it to the end of storage', () => {
            let obj = new StringBuilder('')
            obj.append('string')
            expect(obj._stringArray[obj._stringArray.length-1]).to.equal('g')
        })
        it('should throw error if param is a number', () => {
            let obj = new StringBuilder('')
            expect(() => obj.append(123)).to.throw(TypeError)
        })
        it('should throw error if param is an object', () => {
            let obj = new StringBuilder('')
            expect(() => obj.append({})).to.throw(TypeError)
        })
        it('should throw error if param is an array', () => {
            let obj = new StringBuilder('')
            expect(() => obj.append([])).to.throw(TypeError)
        })
    })

    describe('prepend method', function(){

        it('should convert string param into array and adds it to the beginning of storage', () => {
            let obj = new StringBuilder('')
            obj.prepend('string')
            expect(obj._stringArray[0]).to.equal('s')
        })
        it('should throw error if param is a number', () => {
            let obj = new StringBuilder('')
            expect(() => obj.prepend(123)).to.throw(TypeError)
        })
        it('should throw error if param is an object', () => {
            let obj = new StringBuilder('')
            expect(() => obj.prepend({})).to.throw(TypeError)
        })
        it('should throw error if param is an array', () => {
            let obj = new StringBuilder('')
            expect(() => obj.prepend([])).to.throw(TypeError)
        })
    })

    describe('insertAt method', function(){

        it('should convert string param into array and insert it at given position', () => {
            let obj = new StringBuilder('str')
            obj.insertAt('abc', 0)
            expect(obj._stringArray[0]).to.equal('a')
        })
        it('should convert string param into array and insert it at given position', () => {
            let obj = new StringBuilder('str')
            obj.insertAt('abc', 2)
            expect(obj._stringArray[2]).to.equal('a')
        })
        it('should convert string param into array and insert it at given position', () => {
            let obj = new StringBuilder('str')
            obj.insertAt('abc', 1)
            expect(obj._stringArray[1]).to.equal('a')
        })
    })

    describe('remove method', function(){

        it('should remove elements from storage from given index and length', () => {
            let obj = new StringBuilder('str')
            obj.remove(0, 1)
            expect(obj._stringArray[0]).to.equal('t')
        })
        it('should remove elements from storage from given index and length', () => {
            let obj = new StringBuilder('str')
            obj.remove(1, 1)
            expect(obj._stringArray[1]).to.equal('r')
        })
        it('should remove elements from storage from given index and length', () => {
            let obj = new StringBuilder('str')
            obj.remove(2, 1)
            expect(obj._stringArray[1]).to.equal('t')
        })
        it('should remove elements from storage from given index and length', () => {
            let obj = new StringBuilder('str')
            obj.remove(1, 2)
            expect(obj._stringArray[0]).to.equal('s')
        })
    })

    describe('toString method', function(){

        it('should return string will all els joined by empty string', () => {
            let obj = new StringBuilder('str')
            assert.equal(obj.toString(), 'str')    
        })
        it('should return string will all els joined by empty string', () => {
            let obj = new StringBuilder('')
            assert.equal(obj.toString(), '')    
        })
    })
})
