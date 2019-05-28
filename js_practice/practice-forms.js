window.addEventListener('DOMContentLoaded', () => {
//Forms
//1
// Создайте селект с несколькими опциями, добавьте одну опцию используя Javascript,
// сделайте так, чтобы по выбору опции выводилось сообщение с данными этой опции

let select = document.querySelector('form[name="option-form"] > select');
let newOption = document.createElement('option');
newOption.innerHTML = 'Пункт 5';
select.appendChild(newOption);
select.addEventListener('change', () => {
    if(select.selectedIndex == 4) {
        alert(select.options[4].innerHTML)
    }
})

//2
//Создайте форму вычисления процентов по вкладу:



//RegExp
//1
// Создайте регулярное выражение для поиска трёх точек.

function isThreeDots(str) {
    return str.match(/\.{3}/g);
}
console.log(isThreeDots('создайте ...селект с нес...колькими. опциями, ... добавьте одну.. опцию... '));

//2
// Создайте regexp, который ищет все положительные числа, в том числе десятичные.

function isNumber(str) {
    return str.match(/\d[.,]\d+/g);
}
console.log(isNumber('соз0,8дайте 125селект с нес3коль-5кими. -2 опциями, 0.5 добавьте одну2 опц-0.11ию'));

//3
//Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd


//4
//Предложите строку, которая подойдет под выражение ^$


//5
//Создайте HTML-форму регистрации с email и паролем. По клику провести валидацию
// пароля и email, где пароль должен содержать хотя бы одну цифру, один спецсимвол
// и одну букву, а так же быть длиннее 6 знаков. При прохождении валидации
// выводить приветственное сообщение, в противном случае - ошибку.


});