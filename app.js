'use strict';

/*
    Создание таймеров

*/

console.log(1);

const boomTimer = setTimeout(() => {
    console.log('Boom');
}, 1000)

setTimeout((message, message2) => {
    console.log(message);
    console.log(message2);
}, 2000, 'Bash!', 'Boom!')

/* Отмена Таймара */
clearTimeout(boomTimer)

/*  */

const messages = ['Krya', 'Gav'];
setTimeout((message, message2) => {
    console.log(message);
    console.log(message2);
}, 2000, ...messages)

console.log(3);



