//1
// Напишите функцию counterFactory(start, step), которая при вызове
// возвращает другую функцию – счётчик tictoc(). start – стартовое
// значение счётчика, step – его шаг. При каждом вызове tictoc
// увеличивает значение счётчика на step.

function counterFactory(start, step) {
    let counter = start;
    let tictoc = function() {
        counter += step;
        return counter;
    };
    return tictoc;
}
let b = counterFactory(2, 5);
console.log(b());
console.log(b());
console.log(b());

//2
// Напишите функцию take(tictoc, x), которая вызывает функцию tictoc
// заданное число (x) раз и возвращает массив с результатами вызовов.

function tictoc(start = 0, step = 1) {
    let counter = start;
    return function() {
        counter += step;
        return counter;
    }
}

function take(tictoc, x) {
    let arr = [];
    for(let i = 0; i < x; i++) {
        arr.push(tictoc());
    }
    return arr;
}
console.log(take(tictoc(0, 2), 3));
console.log(take(tictoc(1, 5), 5));

//3
// Разбейте текст этой задачи на отдельные слова, удаляя по пути точки
// и запятые, а полученные слова сложите в массив. Напишите функцию,
// которая возвращает массив из тех же слов, но развёрнутых задом
// наперёд, причём массив должен быть отсортирован по количеству букв
// в слове. Напишите другую функцию, которая считает общее количество
// букв с во всех элементах массива.

let str = 'Разбейте текст этой задачи на отдельные слова,'
    + ' удаляя по пути точки' +
    ' и запятые, а полученные слова сложите в массив. Напишите функцию,' +
    ' которая возвращает массив из тех же слов, но развёрнутых задом' +
    ' наперёд, причём массив должен быть отсортирован по количеству букв' +
    ' в слове. Напишите другую функцию, которая считает общее количество' +
    ' букв с во всех элементах массива.';

function arrMaker(str) {
    let arr = str.split(' ');
    let arr2 = [];
    arr.forEach(item => {
        item = item.split("");
        if((item[item.length - 1] === ".") || (item[item.length - 1] === ",")) {
            item.pop();
        }
        item = item.join("");
        arr2.push(item);
    });
    return arr2;
}

function wordSorter(arr) {
    arr.forEach(item => {
        item.split("").reverse().join("");
    });
    arr.sort((a, b) => {
        return a.length - b.length;
    });
    return arr;
}
console.log(wordSorter(arrMaker(str)));

function cFinder(arr) {
    return arr.reduce((sum, item) => {
        let cur = item.split("");
        cur.forEach(elem => {
            if(elem === "с") {
                sum++;
            }
        });
        return sum;
    }, 0);
}
console.log(cFinder(arrMaker(str)));


//4
// Дан код:
//     let obj = { greeting: "Привет" };
// function func(surname, name) {
//     alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func();  // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call() так, чтобы на экран
// вывелось 'Привет, Иванов Иван'. Слово 'привет' возьмите из свойства
// объекта obj, а 'Иванов' и 'Иван' задайте как параметры функциями.

    let obj = {
    greeting: "Привет"
};
function func(surname, name) {
    console.log(this.greeting + ', ' + surname + ' ' + name);
}
func.call(obj, "Иванов", "Иван");

//5
// Перепишите задачу так, чтобы вместо call применялся apply.

function func(surname, name) {
    console.log(this.greeting + ', ' + surname + ' ' + name);
}
let arr = ["Иванов", "Иван"];
func.apply(obj, arr);
