'use strict';

/*
    Упражнение - Функция случайного числа

*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomNumber(1, 20));