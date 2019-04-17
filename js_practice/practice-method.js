//1
// Напишите функцию, которая создаёт и возвращает массив длиной
// 20 элементов, каждый из которых – случайное число от 1 до 50.

function getRandomArray(){
    let arr = [];
    for(let i = 0; i < 20; i++){
        arr[i] = Math.ceil(Math.random() * 50);
    }
    return arr;
}
// console.log(getRandomArray());

//2
// Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента:
// длину нужного массива, минимальное и максимальное значения элементов.

function getRandomArray2(len, min, max){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    }
    return arr;
}
// console.log(getRandomArray2(20, 11, 60));

//3
// Напишите функцию, которая проверяет, начинается ли строка на https://
// и заканчивается ли она на .html. Если оба условия выполнены,
// функция возвращает true, в ином случае – false.

function checkString(str) {
    if((str.slice(0, 8) === 'https://') && (str.substr(-1, -5) === '.html')) {
        return true;
    }
    return false;
}
// console.log(checkString('https://njfvndkjfv.html'));
// console.log(checkString('https://njfvndkjfv.ht'));

//4
// Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.

function iterations(str, symbol) {
    let sum = 0;
    let symbols = str.split('');
    for(let i = 0; i < symbols.length; i++) {
        if(symbols[i] == symbol) {
            sum++;
        }
    }
    return sum;
}
// console.log(iterations('get a symbol in a string', 't'));

//5
//Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы
// одним и тем же символом (например, 'A' == 'a').

function differentSymbols(str, symbol) {
    let sum = 0;
    let symbols = str.split('');
    for(let i = 0; i < symbols.length; i++) {
        if((symbols[i] == symbol) || (symbols[i] == symbol.toUpperCase())) {
            sum++;
        }
    }
    return sum;
}
// console.log(differentSymbols('get a symbol In a string', 'i'));

//6
// Напишите функцию, которая выводит в консоль текущие дату, месяц и
// год в формате «24 января 2019».

function dateFunction() {
    let now = new Date();
    let arrOfMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября' , 'ноября', 'декабря'];
    let month = now.getMonth();
    for(let i = 0; i < arrOfMonth.length; i++) {
        if(i == month) {
            month = arrOfMonth[i];
        }
    }
    return `${now.getDate()} ${month} ${now.getFullYear()}`;
}
// console.log(dateFunction());

//7
// Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

function getTodaysSeconds() {
    let res = new Date();
    res.setHours(0);
    res.setMinutes(0);
    res.setSeconds(0);
    console.log(Math.floor((new Date() - Date.parse(res)) / 1000));
}

// console.log(getTodaysSeconds(21));

//8
// Напишите функцию, которая принимает от пользователя строку. Если эта строка не
// содержит буквы «ф», сгенерируйте собственную ошибку. Вызовите функцию так, чтобы
// при возникновении «поймать» ошибку в try/catch.

function checkUserString(str) {
    if(str.indexOf('ф') === -1) {
        throw new Error('some message');
    }
}

let input = prompt('enter f');

try {
    checkUserString(input);
} catch(e) {
    alert(e.message);
} finally {
    console.log('good');
}