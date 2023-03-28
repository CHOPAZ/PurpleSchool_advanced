'use strict';

/*
  Как работает DOM более детально
  JS - DOM API (Управление HTML документом) - Browser

  Рабоа с элементами
*/

console.log(document);
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const el = document.querySelector('.wrapper');
const el2 = document.querySelectorAll('meta');
console.log(el);
console.log(el2);

const el3 = document.getElementsByClassName('wrapper');
const el4 = document.getElementsByTagName('meta');
console.log(el3);
console.log(el4);

const btn = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
btn.innerHTML = 'BTN-Append';
btn2.innerHTML = 'BTN-Prepend';
btn3.innerHTML = 'BTN-Befor';
btn4.innerHTML = 'BTN-After';

/* Добавить вконец wrapepr */
el.append(btn);

/* Добавить вначало wrapper */
el.prepend(btn2);

/* Добавление перед wrapper */
el.before(btn3);

/* Добавление после wraper */
el.after(btn4);

/* Удаление элемента */

function generate() {
  el.remove();
}
