'use strict';

/*
  Ручное создание ошибок
*/

fetch('https://dummyjson.com/productss')
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
  .catch((error) => {
    const el = document.querySelector('.filter');
    el.innerHTML = error; //при таком выводе ошибки, пользователю будет не понятно что за ошибка
  });

/* Необходимо корректно выводить корректное сообщение об ошибке
  
  Мы можем сами тригерить определнные ошибки, для дальнейшей ее обработки
  throw - выкидывает ошибку, как только появляется throw, все остальное становится не принципиальным, выполнение прерывается
*/

fetch('https://dummyjson.com/productss')
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    return response.json();
  })
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Is error ${response.status}`);
    }
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    const el = document.querySelector('.filter');
    el.innerHTML = error.message;
  });

  /* Если мы каждый раз будет писать одинаковую обработку ошибок, нарушается принцип DRY - как этого избежать будет в следующем упражнении */