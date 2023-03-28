'use strict';

/*
  Визуальное положение элементов
*/

function generate(event) {
  console.log(`X offset ${window.pageXOffset}`);
  console.log(`Y offset ${window.pageYOffset}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeigth: ${document.documentElement.clientHeight}`);
  /* Где распологается конкретный элемент */
  console.log(event.target.getBoundingClientRect()); //выведет все параметры расположения элемента кнопки относительно нашего view-ort
  console.log(event.target);

  /* ИНфо о расположении элемента down */
  const el = document.querySelector('.down');
  const rectDown = el.getBoundingClientRect()


  /* Скролинг. При нажатии на кнопку генерации  доскролить до нужного элемента*/
  window.scrollTo({
    left: window.pageXOffset + rectDown.left,
    top: window.pageYOffset + rectDown.top,
    behavior: 'smooth' // плавный скрол до элемента
  })
}
