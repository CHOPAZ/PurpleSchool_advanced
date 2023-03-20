'use strict';

/*
  Проблемы callback

  Как правильно реализовывать последовательные запросы, и к чему они проведут в случае callback
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products/');
request.send();

/* Из практики с бэка приходит неполный список продуктов, только id. НУжно взять продукт с порядкомым новером в массие и его id и по нему уже сделать запрос, для того что бы получить о нем данных*/

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText);
  console.log(products);

  /* Запрос по продукту 0 в массиве id 1 */
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products/' + products[0].id);
  request.send();
  /* Подписываемся на него */
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    /* Запрос по продукту 1 в массиве id 2 */
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/' + products[1].id);
    request.send();
    /* Подписываемся на него */
    request.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
    });
  });
});

/* Появляется много кода икод начинает уезжать направо - это называется callbackHall - избежать этого позволяет async await и промисы */
