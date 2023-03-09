'use strict';

/*
   Сравнение дат

*/

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 3);

/* Под капотом JS сравнивает Time Stempt ( миллисекунды) */
console.log(first > second);//true
console.log(first < second); // false



/* В данном случае он сравнивает ссылки на объект, а они разные поэтому false */
const first1 = new Date(2024, 10, 4);
const second1 = new Date(2024, 10, 4);

console.log(first1 == second1);//false
console.log(first1 === second1);//false

/* Как же тогда сравнить */
console.log(first1.getTime() == second1.getTime());//true
console.log(first1.getTime() === second1.getTime());//true
console.log(Number(first1) === Number(second1));//true

