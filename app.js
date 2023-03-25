'use strict';

/*
  Упражнение создание fetch

  Сделать функцию myFetch, которая выполняет внутри XMLHttpRequest, которая возвращает из себя промис, и мы можем его обрабатывать через then()
*/

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.addEventListener('load', function () {
      if(this.status > 400) {
        reject(new Error(this.status))
      }
      resolve(this.responseText);
    });

    xhr.addEventListener('error', function () {
      reject(new Error(this.status));
    });

    xhr.addEventListener('timeout', function () {
      reject(new Error('Timiout'));
    });
  });
}

myFetch('https://dummyjson.com/products')
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
