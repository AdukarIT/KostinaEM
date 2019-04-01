/*
 * ФУНКЦИИ
 */


//variables
let number;

// recursion

// function recursivePower(base, exp) {
//     if(exp > 1) {
//         return base * recursivePower(base, exp-1);
//     } else {
//         return base;
//     }
// }
//
// console.log(recursivePower(2, 4));


// homework
//
// function isItTriangle(a, b, c) {
//     return (a*a + b*b === c*c);
// }
//
// let x = prompt('1 catet');
// let y = prompt('2 catet');
// let z = prompt('hupotenuse');
//
// if(isItTriangle(x, y, z)) {
//     console.log('thiangle exist');
// } else {
//     console.log('does not exist');
// }

//2
// Создайте функцию repeat(str, n), которая возвращает строку,
// состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.

function repeat(input, count=2) {
    let result = '';
    for(let i = 0; i < count; i++) {
        result += input;
    }
    return result;
}

// console.log(repeat('bla', 10));

//3
//Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт
// в кабинете. Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».

function checkDesks(studsCount, deskCount) {
    let maxStudCount = deskCount * 2;
    if(studsCount === maxStudCount) {
        return ('все на местах');
    } else if(studsCount > maxStudCount) {
        let needDesks = Math.ceil((studsCount - maxStudCount) / 2);
        return `need ${needDesks} desks`;
    } else {
        let freeDesks = Math.ceil((maxStudCount - studsCount) / 2);
        return `there are ${freeDesks} free desks`;
    }
}

// console.log(checkDesks(7, 6));

//4
//Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. Для ошибочных
// аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание:

function grading(grade) {
    switch (grade) {
        case 10:
            return `Brilliant`;
            break;
        case 9:
            return `Excellent`;
            break;
        case 8:
            return `Almost excellent`;
            break;
        case 7:
            return `Very good`;
            break;
        case 6:
            return `Good`;
            break;
        case 5:
            return `Almost good`;
            break;
        case 4:
        case 3:
            return `Satisfactory`;
            break;
        case 2:
        case 1:
            return `Unsatisfactory`;
            break;
        default:
            return `something wrong with grade`;
    }
}

// console.log(grading(10));

//5
//Используя цикл do..while, создайте функцию, которая принимает
// числа через prompt(), пока не будет введено число 0.

function getNull() {
    let num;
    do {
        num = parseInt(prompt("введите 0"));
    } while (num !== 0);

}

// console.log(getNull());

//6
//Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся
// меньше 100, выводила эту сумму в консоль, а возвращала количество введённых чисел.

function getNum() {
    let sum = 0;
    let quantity = 0;
    do {
        sum += parseInt(prompt("введите число"));
        quantity++;
    } while (sum < 100);
    console.log(sum);
    return quantity;
}

// console.log(getNum());

//7
//Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.

// let userNumber = parseInt(prompt("enter the number"));
function isSimple(arg){
    if(arg < 2) return false;
    for(let j = 2; j < arg; j++){
        if(arg % j === 0){
            return false;
        }
    }
    return true;
}

// console.log(isSimple(userNumber));

//8
//Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее
// порядковому номеру месяца. Если месяц с таким номером существует, функция возвращает
// имя сезона (лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.

let monthNumber;
function partOfTheYear(monthNumber) {
    do {
        monthNumber = Math.ceil(parseInt(prompt("Введите число от 1 до 12")));
    } while ((monthNumber < 1) || (monthNumber > 12));
    if((monthNumber >= 3) && (monthNumber <= 5)) {
        return `Весна!`;
    } else if((monthNumber >= 6) && (monthNumber <= 8)) {
        return `Лето!`;
    } else if((monthNumber >= 9) && (monthNumber <= 11)) {
        return `Осень!`;
    } else if((monthNumber >= 12) && (monthNumber <= 2)) {
        return `Зима!`;
    }
}

// console.log(partOfTheYear(monthNumber));

//9
//Создайте функцию, которая выводит в консоль числа от 10 до 99,
// заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).

let seven = () => {
    for(let s = 99; s >= 10; s--) {
        if((s % 10 === 7) || (s % 7 === 0) || (s === 7)) {
            console.log(s);
        }
    }
};

// seven();

//10
//Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.

function devideByTwo() {
    do {
        number = parseInt(prompt("введите число"));
    } while ((number < 2) || (number > 20));
    for(let i = 1; i > 0; i++) {
        if(i > number) {
            break;
        }
        if(number % i === 0) {
            console.log(i);
        }
    }
}

// devideByTwo();

//11
//Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.

function devideByTwo2(x, y) {
    do {
        number = parseInt(prompt("введите число"));
    } while ((number < x) || (number > y));
    for(let i = 1; i > 0; i++) {
        if(i > number) {
            break;
        }
        if(number % i === 0) {
            console.log(i);
        }
    }
}

// devideByTwo2(2, 29);

//12
//Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы
// измерения информации («Кб», «Мб», «Гб»), в size – количество таких единиц.
// Функция возвращает количество байт в size.

//1мб = 1024*1024
//1кб = 1024
//1гб = 1024*1024*1024

// console.log(1024*1024*1024*2);

function whatSize(unit=1, size) {
    let result;
    switch (unit) {
        case "Кб":
            result = 1024 * size;
            break;
        case "Мб":
            result = Math.pow(1024, 2) * size;
            break;
        case "Гб":
            result = Math.pow(1024, 3) * size;
            break;
        default:
            return `что-то не так`;
    }
    return `В ${size}${unit} ${result} байтов `;
}
// console.log(whatSize('Гб', 1));

//13
//Создайте функцию, которая ищет наибольший общий делитель двух чисел.


function NOD(x, y) {
    let nod = 1;
    let k;
    x > y ? k = x : k = y;
    for(let n = 1; n < k; n++) {
        if((x % n === 0) && (y % n === 0)) {
            nod = n;
        }
    }
    return `НОД есть ${nod}`;
}

// console.log(NOD(16, 32));

//14
//Решите задачу 13 через рекурсию.

function NOD2(x, y) {
    if(! y) {
        return x;
    }
    return NOD2(y, x % y);
}

// console.log(NOD2(5, 16));


//15
//Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n,
// будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).

function words() {
    number = parseInt(prompt("введите число"));
    if((number === 1) || (number % 10 === 1)) {
        return `${number} карандаш`;
    } else if((number % 10 >= 2) && (number % 10 <= 4)) {
        return `${number} карандаша`;
    } else {
        return `${number} карандашей`;
    }
}

// console.log(words());

//16
//Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.


function math() {
    number = parseInt(prompt("enter your number"));
    for(let i = 0; i < number; i++) {
        for(let j = 0; j < number; j++) {
            if(number === Math.pow(i, 2) + Math.pow(j, 2)) {
                return true;
            }
        }
    }
    return false;
}
// console.log(math());























