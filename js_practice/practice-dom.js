
//1
// Все элементы label внутри таблицы. Должно быть 3 элемента.

let table = document.getElementsByTagName('table')[0];
let labels = table.getElementsByTagName('label');
// console.log(labels);

//2
// Первую ячейку таблицы (со словом "Возраст").

// let firstTr = table.getElementsByTagName('tr')[0].firstElementChild;
let firstTr = table.getElementsByTagName('td')[0];
// console.log(firstTr);

//3
// Вторую форму в документе.

let secondForm = document.getElementsByTagName('form')[1];
// console.log(secondForm);

//4
// Форму с именем search, без использования её позиции в документе.

let searchForm1 = document.getElementsByName('search');
for(let i = 0; i < searchForm1.length; i++) {
    if(searchForm1[i].nodeName === 'FORM') {
        console.log(searchForm1[i]);
        break;
    }
}
//еще вариант
let searchForm = document.querySelector('form[name="search"]')
// console.log(searchForm);

//5
// Элемент input в форме с именем search. Если их несколько, то нужен первый.
