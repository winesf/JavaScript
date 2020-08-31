'use strict';

// alert('hello');

var money = prompt('Ваш бюджет на месяц?' , '0'),
    time = prompt('Введите дату в формате YYYY-MM-DD' , '2000-21-21');



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incoome: [],
    savings: false,
}
 let answer1 = prompt('Введите обязательную статью расходов в этом месяце', 'Почилить'),
     answer2 = prompt('Во сколько обойдется?', '100');

    appData.expenses[answer1] = answer2;

alert(appData.budget / 30);

/*
1. Вопрос: Сколько типов данных существует в JS?
Всего 8 типов данных
    number для любых чисел
    bigint для целых чисел произвольной длины
    string для строк
    boolean для true/false.
    null для неизвестных значений
    undefined для неприсвоенных значений
    object для более сложных структур данных.
    symbol для уникальных идентификаторов.

2.  Как вывести информацию в консоль?
В консоль можно вывести информацию с помощью функций:
 console.log();

3. Какая функция операторов || и &&?
   Эти операторы нужны для сравнения "ИЛИ" и "И"
*/