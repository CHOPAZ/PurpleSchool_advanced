'use strict';

/*
   Создание дат

*/

const now = new Date();
console.log(now);//Thu Mar 09 2023 22:14:50 GMT+0500 (Екатеринбург, стандартное время)
console.log(new Date('01-01-2022'));//Sat Jan 01 2022 00:00:00 GMT+0500 (Екатеринбург, стандартное время)
console.log(new Date('02/01/2022'));//Tue Feb 01 2022 00:00:00 GMT+0500 (Екатеринбург, стандартное время)
console.log(new Date('10 янв 2023'));//invalid date;

/* В JS месяц идет с 0 */
console.log(new Date(2024, 10, 20));//Wed Nov 20 2024 00:00:00 GMT+0500 (Екатеринбург, стандартное время)

console.log(new Date(2024, 12, 51));//Thu Feb 20 2025 00:00:00 GMT+0500 (Екатеринбург, стандартное время)

console.log(new Date(2022, 11, 31, 10, 5, 10));//Sat Dec 31 2022 10:05:10 GMT+0500

console.log(new Date(0)); // Первый 0 - число миллесикунд с юникс времени  Thu Jan 01 1970 05:00:00

console.log(new Date(1 * 24 * 60 * 60 * 1000));//Fri Jan 02 1970 05:00:00

console.log(Date.now());// Time stampt - 1678382666177 - миллисекунды которые прошли с начала времени

console.log(new Date(Date.now()));// Thu Mar 09 2023 22:25:46 GMT+0500 - получили текущее время

/* Методы  */

console.log(now.getFullYear());//2023
console.log(now.getDate());//9 день
console.log(now.getDay());//4 -четвертый день недели четверг
console.log(now.getTime());//1678382907376

console.log(now.setFullYear(2030));//1899307939866
console.log(new Date(now.setFullYear(2030)));//Sat Mar 09 2030 22:32:59 GMT+0500

