'use strict';

/*
  Обработка promises 

  promises возвращает 3 доп.метода
  1. catch - обработка ошибок
  2. finally - всегда выполняетя в результате
  3. then - для работы с fullfield, принимает responce , который будет получен после того как вернется запрос с данными
*/

fetch('https://dummyjson.com/products/1')
  .then((response) => {
    console.log(response);
    return response.json(); // тоже возвращает промис
  })
  .then((data) => {
    console.log(data); // получили уже данные
  });

/* Упростим  запись*/

const res = fetch('https://dummyjson.com/products/1')
  .then((response) => response.json())
  .then((data) => data);

console.log(res); //получим снова  Promise {<pending>}, а не данные как выше - код является асинхронным, поэтому когда мы пытаемся получить данные и положить это res - крч дальше расскажут как правильно сделать
