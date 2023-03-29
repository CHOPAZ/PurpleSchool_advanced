'use strict';

/*
  Делегирование событий.

  Польза от всплытия событий в рамках например работы с большими списками.

*/


// const btn = document.querySelector('.button');
// const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');


// btn.addEventListener('click', function (event) {
//   console.log('button');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.background = 'purple';
// });
// inner.addEventListener('click', function (event) {
//   console.log('inner');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.background = 'blue';
//   event.stopPropagation(); // остановит всплытие
// });
// wrapper.addEventListener('click', function (event) {
//   console.log('wrapper');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.background = 'green';

// });

/* Проблематика.

  Создание списка из 100 пользователей.
  Под капотом 100 строк и к ней создано 100 функций. Если 1000 - 1000.
  Все они лишние.

  Делегирование событий более верхнему родителю

*/
for (let i = 1; i <= 100; i++) {
  const el = document.createElement('div');
  el.innerHTML = `User id ${i}`;
  el.setAttribute('data-id', i)
  // el.addEventListener('click', () => {
  //   console.log(`Deleted user id ${i}`);
  // })
  wrapper.append(el);
}

/* Вместо обработчика событий на каждый элемент, сделать обработчик для wrapper

  Происходит обработка элемента в рамках wrapper, одной функцией. Нет функций на каждый элемент
*/
wrapper.addEventListener('click', (e)=> {
  const i = e.target.getAttribute('data-id')
  console.log(`Deleted user ${i}`);
})
