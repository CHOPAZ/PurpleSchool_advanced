'use strict';

/*
  Всплытие событий.
  Как работают нажатия, собыития

  Click (захват) ---------------------------->
  Document -> Html -> Body -> Div -> P -> Button (отработка событий)
  Всплытие <----------------------------------
  
  1. Фаза захвата
  2. Всплытие. После отработки события, событие начинает всплывать в обратном порядке

  По умолчанию обработчики реагируют на всплытие по каждому родительскому элементу
  
  Всплытием можно управлять: останавливать, отработка собыия в фазе захвата
*/

const btn = document.querySelector('.button');
const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', function (event) {
  console.log('button');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.background = 'purple';
});
inner.addEventListener('click', function (event) {
  console.log('inner');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.background = 'blue';
  event.stopPropagation(); // остановит всплытие
});
wrapper.addEventListener('click', function (event) {
  console.log('wrapper');
  console.log(event.target);
  console.log(event.currentTarget);
  this.style.background = 'green';

}, true); // Фаза захвата. true - работа в рамке погружении

/* При нажатии на кнопку все покрасится в свой цвет ^
  В консоле выведится сначала button, inner, wrapper - работа всплытия

  event.target выведет в трех случаях button
  event.target - то на что изначально было произведено нажатие

  event.currentTarget - выведется button, inner, wrapper
  event.currentTarget - текущий таргет
*/

/* 
event.stopPropagation() - остановит всплытие 
 */

/* Получение фазы захвата - редко
  true
  Теперь в консоле выведется wrapper button inner
*/
