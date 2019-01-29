'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    allCash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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



// USE THE WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     i++;

//     if ((typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b) != null ) && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//     }
// }



// USE THE DO

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     i++;

//     if ((typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b) != null ) && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//     }
// } while (i < 2);



appData.moneyOneDay = appData.allCash / 30;
alert("Eжедневный бюджет " + appData.moneyOneDay);

if (appData.moneyOneDay < (9691 / 30)) {
    console.log("Ниже прожиточного минимума на душу населения");
} else if ((appData.moneyOneDay > (9691 / 30)) && (appData.moneyOneDay < (9691 / 10))) {
    console.log("Выше прожиточного минимума на душу населения");
} else if (appData.moneyOneDay > (9691 / 10)) {
    console.log("Высокий уровень достатка, минимум в 3 раза выше прожиточного минимума");
} else {
    console.log("Произошла ошибка")
};

console.log(appData.moneyOneDay);
console.log(appData);
