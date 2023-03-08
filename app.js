'use strict';

/*
    Оператор остатка от деления

*/

console.log(15 / 2); //7.5
console.log(15 % 2); //14 / 2 + 1 = 15 ( 1-остаток)
console.log(14 % 2); //0

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;
function isEvenFunc(n) {
    return n % 2 === 0
}
console.log(isEven(15)); //false
console.log(isEven(14)); //true

console.log(isOdd(15));//true
console.log(isOdd(14));//false