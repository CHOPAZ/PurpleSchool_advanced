'use strict';

/*
   операции с датами

*/

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2025, 11, 15);
console.log(Number(date1));// тот же time stempt 1731610800000
console.log(Number(date2));//1734202800000
console.log(date2 - date1);//2592000000


function getDaysBetweenDates(dateFirst, dateSecond) {
    return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24)
}
console.log(getDaysBetweenDates(date1, date2));
