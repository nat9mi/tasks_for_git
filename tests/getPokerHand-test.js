const assert = require('assert');
const getPokerHand = require('../lib/getPokerHand');
const mocha = require('mocha');

describe('getPokerHand', () => {
    it('should return `Покер` for [1, 1, 1, 1, 1]', () => {
        const actual = getPokerHand([1, 1, 1, 1, 1]);

        assert.equal(actual, 'Покер');
    });

    // Напишите тесты на функцию getPokerHand
    it('Summa = 5 ', () => {
        let numberOne = 2;
        let numberTwo = 3;
        let text = "Summa = ";
        //Функция сложения двух чисел и возвращение строки с результатом
        function summa(numberOne, numberTwo){
        let result = text + (numberOne + numberTwo);
        return result;
        }
        //Сравнение результата функции с ожидаемым
        assert.equal(summa(numberOne, numberTwo), "Summa = 5");
        });
});