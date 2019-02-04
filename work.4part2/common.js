'use strict';

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
    savings: true
};

function chooseExpenses(){
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
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyOneDay = (appData.allCash / 30).toFixed(1);
    alert("Eжедневный бюджет составляет: " + appData.moneyOneDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyOneDay < (9691 / 30)) {
        console.log("Ниже прожиточного минимума на душу населения");
    } else if ((appData.moneyOneDay > (9691 / 30)) && (appData.moneyOneDay < (9691 / 10))) {
        console.log("Выше прожиточного минимума на душу населения");
    } else if (appData.moneyOneDay > (9691 / 10)) {
        console.log("Высокий уровень достатка, минимум в 3 раза выше прожиточного минимума");
    } else {
        console.log("Произошла ошибка")
    };
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма Ваших накоплений?", ''),
            percent = +prompt("Под какой процент?", '');
        
            appData.monthIncome = save/100/12 * percent;
            alert("Доход с накоплений (депозита) за месяц: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
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
}
chooseOptExpenses();

console.log(appData.moneyOneDay);
console.log(appData);
