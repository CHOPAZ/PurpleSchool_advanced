'use strict';

/*
  Сделать запрос на  https://dummyjson.com/products/categories,
  получить список категорий и отобразить <select> выбора категорий.
*/

function createSelect(arr) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select> 
    ${arr.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}  
  </select>`
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then((response) => response.json())
    .then((data) => createSelect(data))
    .catch(error => console.error(`Ошибка: ${error}`))
}

getCategories()