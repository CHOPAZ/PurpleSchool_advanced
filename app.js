'use strict'

/*
  Принципы ООП в классах

  Абстракция и инкапсуляция
*/

/* Примерные свойства фильма
  - Название
  - Режиссер
  - Рейтинг
  - Длительность
  - Страна производителя
  - Актеры
  - Трейлер
  ...

  В первую очередь нужно понять что из объекта будем использовать.

  В кажестве АБСТРАКЦИИ мы должны понять что объект, который мы будем проектировать, он будет отличаться от реального объекта.
*/

class Film {
  #name
  #author
  rating
  #length

  constructor(name, author, length) {
    this.#name = name
    this.#author = author
    this.#length = length
  }

  get name() {
    return this.#name
  }

  get author() {
    return this.#author
  }

  get length() {
    return this.#length
  }
}

/* Инкапсуляция - скрытие свойст, доступн снаруже запрещен */

const avatarFilm = new Film('Avatar', 'Cameron', 240)
console.log(avatarFilm)
