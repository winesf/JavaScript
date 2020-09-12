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
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    income = document.getElementsByClassName("income"),
    incomeValue = document.getElementsByClassName("income-value")[0],
    mouthSavings = document.getElementsByClassName("mouthsavings"),
    mouthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
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

let money, time;

startBtn.addEventListener("click", function (){

    time = prompt('Введите дату в формате YYYY-MM-DD' , '2000-10-21');
    money = +prompt('Ваш бюджет на месяц?' , '1000');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Введи нормально свой бюджет:', '1000');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function (){
    let sum = 0;
    for(let i=0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("cancel");
            i--;
        }
    };
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function (){
    for (let i = 0; i <= optionalExpensesItem.length; i++){
        let question = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function (){

    if (appData.budget != undefined){
        if (expensesValue.textContent == ''){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
        }else{
            appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/30).toFixed();
        }
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent ="Минимальный уровень достатка" ;
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent ="Средний уровень достатка";
        } else if(appData.moneyPerDay > 2000) {
            levelValue.textContent ="Высокий уровень достатка";
        } else {
            levelValue.textContent ="Ошибка" ;
        }
    } else {
        dayBudgetValue.textContent = "Error";
    }

});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != ""  ) {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener("click", () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});


sumValue.addEventListener('input', function (){
    if (appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.mouthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mouthSavingsValue.textContent = appData.mouthIncome.toFixed(1        );
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function (){
    if (appData.savings == true){
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.mouthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            mouthSavingsValue.textContent = appData.mouthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}
for (let key in appData){
    console.log("Наша программа включает в себя данные: "+ key +  " - " + appData[key]);
}
if (appData.budget == undefined){
    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBtn.disabled = true;
}
