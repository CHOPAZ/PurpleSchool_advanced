'use strict';

/*
    Интернационализация дат

*/


const date = new Date();

console.log(new Date());//Thu Mar 09 2023 23:20:42 GMT+0500 (Екатеринбург, стандартное время)

console.log(new Intl.DateTimeFormat('ru-RU').format(date));//09.03.2023

const option1 = {
    hour: 'numeric',
    minute: 'numeric'
}

const option2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long'
}

console.log(new Intl.DateTimeFormat('ru-RU', option1).format(date));//23:22
console.log(new Intl.DateTimeFormat('en-US', option2).format(date));//March at 11:23 PM
console.log(new Intl.DateTimeFormat('ru-RU', option2).format(date));//март в 23:24

console.log(navigator.language);//ru-RU
console.log(new Intl.DateTimeFormat(navigator.language, option1).format(date))//23:27