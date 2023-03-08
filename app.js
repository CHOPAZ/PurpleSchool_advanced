'use strict';

/*
    Библиотека Math

*/
/* Квадратный корень */
console.log(Math.sqrt(36));// 6
console.log(36 ** (1/2))//6

/* Кубический корень */
console.log(Math.cbrt(27));// 3

/* Какой-то другой корень */
console.log(16 ** (1/4)); // 2 - корень 4 степени из 16

/* Определять знак числа. Исп. когда нужно взять знак нашего числа */
console.log(Math.sign(-100));//-1
console.log(Math.sign(35));//1

/* Сделать число обсолютным( по модулю) */
console.log(Math.abs(-100));//100
console.log(Math.abs(100));//100

/* Экспонента, логарифмы */
console.log(Math.exp(2))//7.38905609893065

/* Получение минимального или максимального числа */
console.log(Math.max(1, -2, 10, 0, 19)); // 19
console.log(Math.min(1, -2, 10, 0, 19)); // -2

console.log(Math.max(1, -2, '10', true, 19, '20')); // 20
console.log(Math.max(1, -2, '10', true, 19, '20s')); // NaN

/* Часто на практике */

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(arr));//NaN
console.log(Math.max(...arr));// 19

console.log(Math.random());//0.4317932297537139 и тд

