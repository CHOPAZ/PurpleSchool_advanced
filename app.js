'use strict';

/*
  Finally - 3 случай, независимо от ошибки или выполнения запроса необходимо выполнить какое либо действие.
  Например отобразить плашку что запрос выполнен, независимо от исхода запроса.
  Например отправить доп. запрос на бэк для формирования метрики пользователя, например о том что он совершал этот запрос 
*/

fetch('https://dummyjson.com/products')
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log('Finnaly');
  })
