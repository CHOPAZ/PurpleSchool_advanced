'use strict';

/*
  метод POST
*/

/* В рамках функции залогинимся у dummyjsons.com */

async  function main() {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR'
    })
  })
  const data = await res.json()
  console.log(data);
}

main()

/* Минус fetch - дополнительная конвертация json (20 строчка), на бэке используют чаще axios */