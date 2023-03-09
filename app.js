'use strict';

/*
   Работа с BigInt

*/

/* Проблема, если число больше 9007199254740991, то работа с ним считается не безапасной(SAFE) */
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991 - максимальное доступное число для чисел
console.log(Number.MIN_SAFE_INTEGER);// -9007199254740991 - 
console.log(2**53 - 1);// 9007199254740991

/* BigInt - позволяет работать с числами больше чем 9007199254740991 */

console.log(12312312312312312312321123n);//12312312312312312312321123n
console.log(BigInt(12312312312312312312321123));//12312312312312311989665792n
console.log(BigInt('12312312312312312312321123'));//12312312312312312312321123n

console.log(10n + 10n);//20n
// console.log(10n + 10);//Ошибка   Cannot mix BigInt and other types, use explicit conversions
console.log(10n * 10n);// 100n;

console.log(10n * BigInt(10));//100n

console.log(10n < 20);//true
console.log(10n == 10);//true
console.log(10n === 10);//false

console.log(10n / 3n);//3n
console.log(10 / 3);//3.3333333333335

/* BigInt не может иметь плавущую точку */