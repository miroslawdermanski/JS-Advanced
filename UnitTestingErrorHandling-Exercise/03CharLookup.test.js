import { expect, assert } from 'chai'
import { lookupChar } from './03CharLookup.js'

describe("Char Lookup", function () {
    it("should return undefined if param1 is not a string", () => {
        let result = lookupChar(1, 2);
        expect(result).to.be.undefined;
        result = lookupChar([], 2);
        expect(result).to.be.undefined;
        result = lookupChar({}, 2);
        expect(result).to.be.undefined;
        result = lookupChar(null, 1);
        expect(result).to.be.undefined;
    });
    it("should return undefined if param2 is not an integer number", () => {
        let result = lookupChar("a", "b");
        expect(result).to.be.undefined;
        result = lookupChar("a", 1.2);
        expect(result).to.be.undefined;
        result = lookupChar("a", {});
        expect(result).to.be.undefined;
        result = lookupChar("a", []);
        expect(result).to.be.undefined;
        result = lookupChar("a", null);
        expect(result).to.be.undefined;
    });
    it("should return incorrect index if param 2 is not in range", () => {
        let result = lookupChar("abc", 3);
        expect(result).to.equal("Incorrect index");
        result = lookupChar("abc", -1);
        expect(result).to.equal("Incorrect index");
        result = lookupChar("abc", 4);
        expect(result).to.equal("Incorrect index");
    });
    it("should return the specified char if index is in range", () => {
        let result = lookupChar("abc", 1);
        expect(result).to.equal("b");
        result = lookupChar("abc", 0);
        expect(result).to.equal("a");
        result = lookupChar("abc", 2);
        expect(result).to.equal("c");
    });
});