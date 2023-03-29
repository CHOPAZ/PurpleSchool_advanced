'use strict';

/*
  Жизненный цикл событий DOM

  */

/* 
 1. Загрузился контект документа
*/

/* DOMContentLoaded - отработает когда загрузится html страница и построится дом дерево. Не отработает когда есть дополнительные тяжелые загрузки ( например картинки) */
document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOMContentLoaded');
  console.log(e);
});

/* load - полностью загрузится документ и все что внутри  */
window.addEventListener('load', (e) => {
  console.log('load');
  console.log(e);
});

/* beforeunload - сработает перед выгрузкой страницы (закрытие, переход на другую)
  Используется для предупреждения пользователя (есть несохраненные данные, уверен ли пользователь что хочет выйти и тд)
*/
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});
