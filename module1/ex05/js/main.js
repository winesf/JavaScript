"use strict";

let startBtn = document.getElementById('start'),

    budget = document.getElementsByClassName("budget"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudget = document.getElementsByClassName("daybudget"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level"),
    levelValue = document.getElementsByClassName("level-value")[0],
    expenses = document.getElementsByClassName("expenses"),
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpenses = document.getElementsByClassName("optionalexpenses"),
    optionalExpensesValue = document.getElementsByClassName("optionalExpenses-value")[0],
    income = document.getElementsByClassName("income"),
    incomeValue = document.getElementsByClassName("income-value")[0],
    mouthSavings = document.getElementsByClassName("mouthsavings"),
    mouthSavingsValue = document.getElementsByClassName("mouthsavings-value")[0],
    yearSavings = document.getElementsByClassName("yearsavings"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
J
let money, time;

function start(){
    money = +prompt('Ваш бюджет на месяц?' , '1000');
    time = prompt('Введите дату в формате YYYY-MM-DD' , '2000-21-21');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Введи нормально свой бюджет:' , '1000');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for(let i=0; i < 2; i++) {
            let a = prompt('Введите добязательную статью расходов в этом месяце', 'Почилить'),
                b = prompt('Во сколько обойдется?', '100');

            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("cancel");
                i--;
            }
        };
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel :  function (){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка")
        }
    },
    checkSavings: function (){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.mouthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.mouthIncome)
        }
    },
    chooseOptExpenses: function (){
        for (let i = 1; i <= 3; i++){
            let question = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = question;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет доп. доход? (Перечислите через запятую", "Проституция" );
        if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != ""  ) {
            appData.income = items.split(',');
            appData.income.push(prompt('Может что то еще?'));
            appData.income.sort();
        } else {
            appData.chooseIncome();
        }

        // appData.income.forEach(function (value, key,arr){
        //     console.log("Способы доп. заработка: " + value);
        // });
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
    }
}
for (let key in appData){
    console.log("Наша программа включает в себя данные: "+ key +  " - " + appData[key]);
}
