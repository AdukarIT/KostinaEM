
//1
// Сделайте так, чтобы по нажатию на кнопку выводился alert

// window.addEventListener('DOMContentLoaded', function () {
//     document.getElementsByTagName('button')[0].addEventListener('click', function () {
//         alert("hello");
//     })
// });

//2
// Создайте кнопку с произвольным текстом, сделайте так, чтобы
// по нажатию текст изменялся на button

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        this.innerText = "button";
    })
});

//3
// Создайте форму с полем для ввода и двумя кнопками, сделайте так,
// чтобы по нажатию на кнопку disable, поле становилось неактивным,
// в случае с enable - наоборот

window.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('disableBtn')[0].addEventListener('click', () => {
        document.getElementById('last').getElementsByTagName('input')[0].setAttribute('disabled', true);
    });
    document.getElementsByClassName('enableBtn')[0].addEventListener('click', () => {
        document.getElementById('last').getElementsByTagName('input')[0].removeAttribute('disabled');
    });
});


//4
// Нужно создать документ с полем ввода, объектом произвольной формы и цвета.
// Сделайте так, чтобы в поле ввода можно было вводить только числовые значения,
// а объект можно было двигать и узнавать его координаты на странице

