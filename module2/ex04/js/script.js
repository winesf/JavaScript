'use strict';

let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName("menu")[0],
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv"),
    promptQuestion = document.querySelector("#prompt");

menu.insertBefore(menuItem[2], menuItem[1]);


let     menuItemLi = document.createElement("li");

menuItemLi.classList.add("menu-item");
menuItemLi.innerHTML= "<a href='/'>HOME</a>";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

adv[0].remove();

let question = prompt("Ваше отношение к технике Apple?" , "Android лучше");

promptQuestion.textContent = question;
console.log(menu);


