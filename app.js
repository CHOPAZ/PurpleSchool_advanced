'use strict';

/*
  Упражнение - Генератор активностей

  Сделать генератор 3х идей от скуки
  https://www.boredapi.com/api/activity
	с отображением на странице
*/

/* Перенеся wrapper наверх, необходимо в index.html сделать скрипт defer - загрузит скрипт после готовности html*/
const wrapper = document.querySelector('.wrapper');

/* Получение карточек */
async function getActivity() {
  const responce = await fetch('https://www.boredapi.com/api/activity');
  return responce.json();
}

/* Генерация активности */
async function generate() {
  try {
    wrapper.innerHTML = '';
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
    for (const el of data) {
      const element = document.createElement('div');
      element.innerHTML = `${el.activity}`;
      wrapper.appendChild(element);
    }
  } catch (error) {
    console.error(error);
  }
}
