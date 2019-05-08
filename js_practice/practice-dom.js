
//1
// Все элементы label внутри таблицы. Должно быть 3 элемента.

let table = document.getElementsByTagName('table')[0];
let labels = table.getElementsByTagName('label');
console.log(labels);

//2
// Первую ячейку таблицы (со словом "Возраст").

// let firstTr = table.getElementsByTagName('tr')[0].firstElementChild;
let firstTr = table.getElementsByTagName('td')[0];
console.log(firstTr);

//3
// Вторую форму в документе.

let secondForm = document.getElementsByTagName('form')[1];
console.log(secondForm);

//4
// Форму с именем search, без использования её позиции в документе.

// let searchForm1 = document.getElementsByName('search');
// for(let i = 0; i < searchForm1.length; i++) {
//     if(searchForm1[i].nodeName === 'FORM') {
//         console.log(searchForm1[i]);
//         break;
//     }
// }
//еще вариант
let searchForm = document.querySelector('form[name="search"]');
console.log(searchForm);

//5
// Элемент input в форме с именем search. Если их несколько,
// то нужен первый.

let firstInput = searchForm.querySelector('input');
console.log(firstInput);

//6
// Элемент с именем info[0], без точного знания его позиции в документе.

let info = document.getElementsByName('info[0]')[0];
console.log(info);

//7
// Элемент с именем info[0], внутри формы с именем search-person.

let form = document.querySelector('form[name="search-person"]').elements;
let newArr = [].filter.call(form, (item) => {
    return item.name === 'info[0]';
});
console.log(newArr);

//8
// Нужно создать пустой html документ и заполнить его используя
// различные методы работы с документом. Тело документа должно
// содержать следующий код:
//     <ul>
// <li><a href="http://google.com">http://google.com</a></li>
// <li><a href="/tutorial">/tutorial.html</a></li>
//     <li><a href="local/path">local/path</a></li>
//     <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
// <li><a href="http://nodejs.org">http://nodejs.org</a></li>
// <li><a href="http://internal.com/test">http://internal.com/test</a></li>
// </ul>
// Сделайте красными все внешние ссылки (имеющие начало с http://),
// поменяйте местами два произвольных элемента списка

let list = document.getElementsByClassName('dom-list')[0];
let first = list.children[2];
let second = list.children[4];
list.insertBefore(second, first);

let elems = document.querySelectorAll('a[href^="http://"]');
for(let i = 0; i < elems.length; i++) {
    elems[i].style.color = 'red';
}
