 'use strict';
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
}

function chooseExpenses(){
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
}
chooseExpenses();

 function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
 }

 detectDayBudget();

 function detectLevel(){
     if(appData.moneyPerDay < 100) {
         console.log("Минимальный уровень достатка");
     } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log("Средний уровень достатка");
     } else if(appData.moneyPerDay > 2000) {
         console.log("Высокий уровень достатка");
     } else {
         console.log("Ошибка")
     }
 }
// detectLevel();

 function chooseOptExpenses(){
     for (let i = 1; i <= 3; i++){
         let question = prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = question;
     }
 }
 // chooseOptExpenses();
function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.mouthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mouthIncome)
    }
}
checkSavings();

