'use strict';

/*
    Округление

*/

/* Округление числа до ближвйщего целого */
console.log(Math.round(1.5));// 2
console.log(Math.round(1.6));// 2
console.log(Math.round(1.4));// 1
console.log(Math.round(1.3));// 1

/* Округление до верхнего значения */
console.log(Math.ceil(1.1));//2
console.log(Math.ceil(1.3));//2
console.log(Math.ceil(1.7));//2
console.log(Math.ceil(0.7));//1

/* Округления до нижнего значения */
console.log(Math.floor(1.1));//1
console.log(Math.floor(1.9));//1
console.log(Math.floor(0.9));//0

/* Округления число до целого */
console.log(Math.trunc(2.9));//2
console.log(Math.trunc(2.1));//2
console.log(Math.trunc(1.1111111));//1

/* Округление до определенного знака. ВОЗВРАЩАЕТ СТРОКУ */
console.log(1.49999.toFixed(1));// 1.5 - string
console.log(Number(1.49999.toFixed(1)));// 1.5 - number