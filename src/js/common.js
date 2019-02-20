'use strict';

let check = document.getElementById('start'),

    budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpens = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    sure = document.getElementsByClassName('expenses-item'),

    approve = document.getElementsByTagName('button')[1],
    optionalApprove = document.getElementsByTagName('button')[2],
    count = document.getElementsByTagName('button')[3],

    nonSure = document.querySelectorAll('.data .optionalexpenses-item'),

    maybe = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'),
    summ = document.querySelector('#sum'),
    percentt = document.querySelector('#percent'),

    oneYear = document.querySelector('.year-value'),
    oneMonth = document.querySelector('.month-value'),
    oneDay = document.querySelector('.day-value');


let money, time;



check.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }

    appData.allCash = money;
    appData.timeData = time;
    budget.textContent = money.toFixed(1);

    oneYear.value = new Date(Date.parse(time)).getFullYear();
    oneMonth.value = new Date(Date.parse(time)).getMonth() + 1;
    oneDay.value = new Date(Date.parse(time)).getDate();
});

let sum;
approve.addEventListener('click', function() {
    if (appData.allCash != undefined) {
        sum = 0;

        for (let i = 0; i < sure.length; i++) {
            let a = sure[i].value,
                b = sure[++i].value;
        
            if ((typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b) != null ) && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log("Mistaked");
                alert("Заполните данные ещё раз! Будьте внимательны!")
                i--;
            }
        };
        expenses.textContent = sum;
    } else {
        alert('Сначала нажмите "Хочу приступить к расчету"')
    }
});

optionalApprove.addEventListener('click', function() {
    if (appData.allCash != undefined) {
        for (let i = 0; i < nonSure.length; i++) {
            let c = nonSure[i].value;
    
            appData.optionalExpenses[i] = c;
            optionalExpens.textContent += appData.optionalExpenses[i] + ' ';
        };
    } else {
        alert('Сначала нажмите "Хочу приступить к расчету"')
    }
});

count.addEventListener('click', function() {
    if (appData.allCash != undefined) {
            if (sum != undefined) {
                appData.moneyOneDay = ((appData.allCash - sum) / 30).toFixed(1);
            dayBudget.textContent = appData.moneyOneDay;

            if (appData.moneyOneDay < (9691 / 30)) {
                level.textContent = "Ниже прожиточного минимума на душу населения";
            } else if ((appData.moneyOneDay > (9691 / 30)) && (appData.moneyOneDay < (9691 / 10))) {
                level.textContent = "Выше прожиточного минимума на душу населения";
            } else if (appData.moneyOneDay > (9691 / 10)) {
                level.textContent = "Высокий уровень достатка, минимум в 3 раза выше прожиточного минимума";
            } else {
                console.log("Произошла ошибка")
            };
        } else {
            alert('Сначала расчитайте обязательные расходы"')
        }
    } else {
        alert('Сначала нажмите "Хочу приступить к расчету"')
    }
});

maybe.addEventListener('input', function() {
    if (appData.allCash != undefined) {
        let items = maybe.value;
        appData.income = items.split(',   ');
        income.textContent = appData.income;
    } else {
        alert('Сначала нажмите "Хочу приступить к расчету"')
    }
});

checkBox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summ.addEventListener('input', function() {
    if (appData.allCash != undefined) {
        if (appData.savings == true) {
            let sum = +summ.value,
                percent = +percentt.value;
    
            appData.monthIncome = sum/100/12 * percent;
            appData.yearIncome = sum/100 * percent;
            
            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

percentt.addEventListener('input', function() {
    if (appData.allCash != undefined) {
        if (appData.savings == true) {
            let sum = +summ.value,
                percent = +percentt.value;
    
            appData.monthIncome = sum/100/12 * percent;
            appData.yearIncome = sum/100 * percent;
            
            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

let appData = {
    allCash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};