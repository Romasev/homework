'use strict';

let check = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yaearsavings-value')[0],

    sure = document.getElementsByClassName('expenses-item'),

    approve = document.getElementsByTagName('button')[0],
    optionalApprove = document.getElementsByTagName('button')[1],
    count = document.getElementsByTagName('button')[2],

    nonSure = document.querySelectorAll('.data .optionalexpenses-item'),

    maybe = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),

    oneYear = document.querySelector('.year-value'),
    oneMonth = document.querySelector('month-value'),
    oneDay = document.querySelector('day-value');


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};
start();

let appData = {
    allCash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ((typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b) != null ) && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("Mistaked");
                alert("Заполните данные ещё раз! Будьте внимательны!")
                i--;
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyOneDay = (appData.allCash / 30).toFixed(1);
        alert("Eжедневный бюджет составляет: " + appData.moneyOneDay);
    },
    detectLevel: function() {
        if (appData.moneyOneDay < (9691 / 30)) {
            console.log("Ниже прожиточного минимума на душу населения");
        } else if ((appData.moneyOneDay > (9691 / 30)) && (appData.moneyOneDay < (9691 / 10))) {
            console.log("Выше прожиточного минимума на душу населения");
        } else if (appData.moneyOneDay > (9691 / 10)) {
            console.log("Высокий уровень достатка, минимум в 3 раза выше прожиточного минимума");
        } else {
            console.log("Произошла ошибка")
        };
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма Ваших накоплений?", ''),
                percent = +prompt("Под какой процент?", '');
            
                appData.monthIncome = save/100/12 * percent;
                alert("Доход с накоплений (депозита) за месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let c = prompt("Введите необязательную статью расходов", '');
        
            if ((typeof(c)) === "string" && (typeof(c) != null ) && c != "" && c.length < 50) {
                console.log("optDone");
                appData.optionalExpenses[i+1] = c;
            } else {
                console.log("optMistaked");
                alert("Заполните данные ещё раз! Будьте внимательны!")
                i--;
            }
        };
    },
    chooseIncome: function () {
        let items = prompt("Что принесет Вам дополнительный доход? (Введите через запятую)", "");

        if ((typeof(items)) === "string" && (typeof(items) != null ) && items != "" && items.length < 50) {
            console.log("allRight");
            appData.income = items.split(', ');
            appData.income.sort();

            appData.income.forEach(function (item, i) {
                console.log("Способы доп. заработка: " + (i + 1) + "- " + item);
            });
        } else {
            console.log("allBad");
        }
    }
};
appData.chooseIncome();

function expensesFromData() {
    for (let key in appData) {
        console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
    }
}
expensesFromData();


// ВЫЗОВ ФУНКЦИЙ
// chooseExpenses();
// detectDayBudget();
// detectLevel();
// checkSavings();
// chooseOptExpenses();