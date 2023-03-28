'use strict';

/*
  Типы событий и обработчики
  Event. Подписка на event. Обработка event. Oтписываться от event

  Минусы.
  1. Поялвение JS внутри html.

  Плюсы:
  1. Наглядно видно в разметке что произойдет с кнопкой
*/

/* Добавление ручного события

  Плюсы:
  1. Добавление неограченное число слушателей на одно и тоже событие  
*/
const btn = document.querySelector('.activity__btn');
btn.addEventListener('click', (event) => {
  console.log('event 1');
});
btn.addEventListener('click', (event) => {
  console.log('event 2');
});

/* Добавление через HTML разметку */
function generate(event) {
  console.log(event);
}

/* Третий способ - редкий */
// btn.onclock = function () {};


/* Если обработчик не нужен, лучше его удалить, иначе будут утечки памяти */

/* Удаление эвента */

const eventHandler = function(event) {
  console.log('event 3');
  btn.removeEventListener('click', eventHandler)
}

btn.addEventListener('click', eventHandler)