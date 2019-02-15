'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    body = document.getElementsByTagName('body'),
    title = document.getElementById('title'),
    promotion = document.getElementsByClassName('adv');


// Поменял пункты местами
menu.insertBefore(menuItem[2], menuItem[1]);
// Поменял фон
body[0].style.background = 'url(../img/apple_true.jpg)';
// Поменял заголовок
title.textContent = ' Мы продаем только подлинную технику Apple';
// Удалил рекламу
promotion[0].remove();
// Задал вопрос и записал ответ с проверкой!

for (let i = 0; i < 1; i++) {
    let answer = document.getElementById('prompt'),
    ask = prompt("Как вы относитесь к технике Apple");

    if ((typeof(ask) === "string") && (ask != "") && (typeof(ask) != null)) {
        answer.innerText = "К технике Apple я отношусь: " + ask;
    } else {
        i--;
    }
}




