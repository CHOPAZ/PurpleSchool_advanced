'use strict';

/*
  Получение данных

  XMLHttpRequest
*/

const request = new XMLHttpRequest();

/* Создали объект, наполним и отправим */
request.open('GET', 'https://dummyjson.com/products/1');
/* Отправляем */
request.send();

/* Подпишемся на ответ сервера */
request.addEventListener('load', function () {
  console.log(this.responseText); //пока просто текс
  console.log(JSON.parse(this.responseText)); // теперь объект
});

console.log('end');

/* Запросы могут приходить не последовательно */
function req(id) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products/' + id);
  request.send();

  request.addEventListener('load', function () {
    console.log(JSON.parse(this.responseText));
  });
}

req(''); // займет больше времени чем один объект
req(1);
req(2);
req(3);

/* Если необходимо соблюсти последовательность запросов, и это важно, то необходимо вручную друг за другом вставить последовательно, и есть более современные способы например async await - будет дальше расмотрено.


*/
