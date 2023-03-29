'use strict';

/*
  Динамически создать N элементов с текстом и поле для поиска. При вводе в поле, выделять элементы, которые содержат введенный текс
  */

const wrapper = document.querySelector('.wrapper');

for (let i = 1; i <= 10; i++) {
  const el = document.createElement('div');
  el.innerHTML = i;
  wrapper.append(el);
}

function search(event) {
  const inputValue = event.target.value;
  for (const el of [...wrapper.children]) {
    if (el.innerHTML.includes(inputValue)) {
      el.classList.add('yellow');
      continue;
    }
    el.classList.remove('yellow')
  }
}
