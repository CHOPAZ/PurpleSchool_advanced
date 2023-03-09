'use strict';

/*
  Интернационализация чисел

*/

console.log(23000);//23000

const options = {
    style: 'currency',
    currency: 'RUB'
}

const options2 = {
    style: 'currency',
    currency: 'USD'
}

const options3 = {
    style: 'decimal'
}

const options4 = {
    style: 'percent'
}

const options5 = {
    style: 'unit',
    unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-RU', options).format(23000));//23 000,00 ₽
console.log(new Intl.NumberFormat('en-US', options2).format(23000));//$23,000.00
console.log(new Intl.NumberFormat('ru-RU', options3).format(23000));//23 000
console.log(new Intl.NumberFormat('ru-RU', options4).format(0.1));//10%
console.log(new Intl.NumberFormat('ru-RU', options5).format(25));//25 °C