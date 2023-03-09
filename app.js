'use strict';

/*
    Напишите функцию, которая принимает 3 параметра:
    - Сумма
    - Валюта исходная
    - Валюта для конвертации
    И возвращает строку уже сконвертированной суммы с постфиксом валюты. Если не смог, то null
    Для примера 3 валюты.

*/

function conversionCurrencies(sum, initialCurrency, convertCurrency) {
    const allCurrencies = [
        {
            name: 'USD',
            mult: 1
        },
        {
            name: 'RUB',
            mult: 1 / 60
        },
        {
            name: 'EUR',
            mult: 1.1
        }
    ];
    const initial = allCurrencies.find(c => c.name === initialCurrency);
    if (!initial) {
        return null
    }

    const convert= allCurrencies.find(c => c.name === convertCurrency);
    if (!initial) {
        return null;
    }

    return  new Intl
        .NumberFormat('ru-RU', {style: 'currency', currency: convert.name})
        .format(sum * initial.mult / convert.mult)


}

console.log(conversionCurrencies(10000, 'RUB', 'USD'));//166,67 $
console.log(conversionCurrencies(10000, 'RUB', 'EUR'));//151,52 €
console.log(conversionCurrencies(10000, 'EUR', 'USD'));//11 000,00 $


