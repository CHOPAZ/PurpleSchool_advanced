'use strict';

/*
 Перемещение по DOM

*/

const wrapper = document.querySelector('.wrapepr');
const inner = document.querySelector('.inner');
const button = document.querySelector('.button');
console.log(button);

/* Получение от Inner части элементов */

/* Получение дочерних элементов */
console.log(inner.childNodes); //NodeList из всех входящиъ элементов. Пробел обозначается как text

console.log(inner.children); //HtmlCollection - 3 кнопки
console.log([...inner.children]); // массив из кнопок

/* Получение родительских элементов (wrapper) */
console.log(inner.parentElement); // два метода идентичны, потому они являются элементом
console.log(inner.parentNode);

/* Найти элемент в дереве, но он не является потомком 
  closest - возвращает ближайшего родителя по определенному селектору
*/
console.log(button.closest('.wrapper')); // wrapper

/* Поиск элемента на одном уровне */
console.log(button.previousElementSibling); // null - ближайшего элемента вверх нет
console.log(button.previousSibling); //text - ближайший элемент к inner пробел
console.log(button.nextElementSibling); // button Second
console.log(button.nextSibling); // text - пробел

console.log(button.parentElement.children); // HtmlCollection - 3 кнопки

/* Поиск от определенного элемента */


