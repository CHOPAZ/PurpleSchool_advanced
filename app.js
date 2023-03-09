'use strict';

/*
    Разделитель чисел

*/

const bigNum1 = 350500000;
const bigNum2 = 350_500_000;

const payment = 20_10;
const payment2 = 2_0.1_0;

console.log(Number('350_500_000'));//NaN
console.log(Number('350500000'));//350500000
console.log(Number.parseInt('350_500_000'))//350 - некоректно
console.log(Number.parseFloat('350_500_000'))//350 - некоректно