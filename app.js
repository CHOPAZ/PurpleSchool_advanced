'use strict';

/*
  Обработка reject - ошибки
*/

fetch('https://dummyjson.com/productsS')
  .then(
    (response) => {
      console.log(response);
      return response.json();
    },
    (error) => console.log(error) // еще один аргумент для обработки ошибок. отработает если первый промис не разрезолвится ( когда ошибка в пути /dummyjsonS)
  )
  .then(
    ({ products }) => {
      console.log(products);
      return fetch('https://dummyjson.com/products/' + products[0].id); // послали второй запрос на продукт 1
    },
    (error) => console.log(error) // отработает если первый промис не разрезолвится ( когда ошибка в пути /productsS)
  )
  .then((response) => response.json()) // обрабатываем его
  .then((data) => {
    console.log(data);
  });

/* Таким образом можем обрабатывать ошибки.
  Если мы обработали одну ошибку, то мы проваливаемся в следующий then, что не очень бы и хотелось.

  Чаще на практике будет применятся обработка глобальная всех цепочек ошибок: через catch - общий обработчик ошибок, в который будет проваливаться при любой ошибки из цепочки промисов
*/

fetch('https://dummyjson.com/products')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id); // послали второй запрос на продукт 1
  })
  .then((response) => response.json()) // обрабатываем его
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
