'use strict';

/*
    Таймеры и EventLoop. Точность таймеров

*/

const mark1 = performance.now();

setTimeout(() => {
    const mark2 = performance.now()
    console.log(mark2 - mark1);
    console.log(mark2);
}, 1000)




