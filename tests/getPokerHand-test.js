const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
const mocha = require('mocha');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

// Проверяем что все элементы являются числом

    it('should return `Оne or more elements are not a number` for [1, 1, 1, 1, a]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 'a']);

        assert.equal(actual, 'Оne or more elements are not a number');
    });

    it("Test Nadezhda"), () => {
        var i = "test";
        assert.equal("test1", i);
    }
    it("Test me"), () => {
        var i = "test";
        assert.equal("test1", i);
    }
});