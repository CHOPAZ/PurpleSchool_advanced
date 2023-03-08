'use strict';

/*
    Конвертация и проверка чисел

*/

console.log(10 === 10.0); //true

/* Js под капотом число представляет в бинарном виде ( 0 1 ), лимит хранения 64 бит вроде */

console.log(0.1 + 0.2); // 0.30000000000000004 - это связано из-за формата хранения и недостаточно точности работы JS с числами

/* Если нужна точность работы с числами, есть определенные библиотеки */

console.log(0.2 + 0.2); //0.4 - тут все верно

/*Проблема именно в хранении числа 0.1 в бинарном формате не имеет достаточной точности для вычисления */

/* Как преобразовывать строку в число */
console.log(Number('10')); // 10;
console.log(+'20');//20
console.log(Number.parseInt('10', 2));//2 - разница в том, что parseInt принимает второй, опциональный параметр - в какой системе мы будем конвертировать 
console.log(Number.parseInt('10', 2)); // 2
console.log(Number.parseInt('11 sec', 10)); // 11
console.log(Number.parseInt('sec 11', 10));// NaN
console.log(Number.parseInt('11.5', 10))//11
console.log(Number.parseFloat('11.5', 10))//11.5


/* P.s лучше использовать с Number.parsseInt/Float */

console.log(Number.isNaN(Number('10')));//false - потому что  Number('10') смогло преобразовать в число, и проверка на isNaN не прошла
console.log(Number.isNaN(Number('10asf1')));// true

/* Есть кейсы которые isNaN не отработает */
console.log(Number.isNaN(Number(10 / 0))); // false - потому что 10 / 0 будет Infinity (бесконечность)
console.log(Number.isFinite(10 / 0)); //false - показывает что оно является конечным числом, т.к бесконечность это false

console.log(Number.isInteger(10));//true
console.log(Number.isInteger(10.4));//false

