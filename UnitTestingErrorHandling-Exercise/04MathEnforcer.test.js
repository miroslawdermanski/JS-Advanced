import {expect, assert} from 'chai'
import {mathEnforcer} from './04MathEnforcer.js'

describe("Math Enforcer", function () {
    describe("addFive", function () {
        it("should return undefined if param is not a number", () => {
            assert.isUndefined(mathEnforcer.addFive("a"));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
        });
        it("should return the number plus five", () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.1), 6.1);
        });
    });

    describe("subtractTen", function () {
        it("should return undefined if param is not a number", () => {
            assert.isUndefined(mathEnforcer.subtractTen("a"));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
        });
        it("should return the number minus ten", () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(1.1).toFixed(1), -8.9);
            assert.equal(mathEnforcer.subtractTen(15), 5);
        });
    });

    describe("sum", function () {
        it("should return undefined if param is not a number", () => {
            assert.isUndefined(mathEnforcer.sum("a", 1));
            assert.isUndefined(mathEnforcer.sum([], 1));
            assert.isUndefined(mathEnforcer.sum({}, 1));
            assert.isUndefined(mathEnforcer.sum(1, "a"));
            assert.isUndefined(mathEnforcer.sum(1, []));
            assert.isUndefined(mathEnforcer.sum(1, {}));
        });
        it("should return the sum of the two numbers", () => {
            assert.equal(mathEnforcer.sum(0, 0), 0);
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(-5, 5), 0);
            assert.equal(mathEnforcer.sum(1.1, 2.2).toFixed(1), 3.3);
        });
    });
});