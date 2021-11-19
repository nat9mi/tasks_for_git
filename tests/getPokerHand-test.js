const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
const mocha = require('mocha');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    // Напишите тесты
    it('Summa = 5 ', () => {
        let numberOne = 2;
        let numberTwo = 3;
        let text = "Summa = ";
        
        function summa(numberOne, numberTwo){
        let result = text + (numberOne + numberTwo);
        return result;
        }
      
        assert.equal(summa(numberOne, numberTwo), "Summa = 5");
        });
});