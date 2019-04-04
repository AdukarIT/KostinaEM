
//1
//Создайте функцию, которая получает в качестве аргументов три числа
// и возвращает наименьшее из них.

function threeNumb(a, b, c) {
    let min = a;
    if(a > b) {
        min = b;
    }
    if(b > c){
        min = c;
    }
    return min;
}
// console.log(threeNumb(25, 58, 20));

//2
//Создайте функцию, которая получает в качестве аргументов значения
//суток, часов и минут,а возвращает соответствующее им количество секунд.

function daysCount(days, hours, minutes) {
    return (minutes * 60) + (hours * 3600) + (days * 86400);
}
// console.log(daysCount(2, 0, 36));

//3
// Напишите рекурсивную функцию для подсчёта факториала числа.

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
// console.log(factorial(5));

//4
// Напишите рекурсивную функцию, которая разворачивает введённое
// число задом наперёд. Например, если на вход функция получает 1234,
// вернуть она должна 4321.

let concat = "";
function reverse(number) {
    let res;
    if(number > 0) {
        res = number % 10;
        concat += `${res}`;
        reverse((number / 10) | 0);
    }
     return +concat;
}
// console.log(reverse(5698));

//5
// Напишите функцию для решения квадратных уравнений. В качестве параметров
// она должна принимать коэффиценты a, b и c, возвращать – количество корней.
// Сами корни уравнения (или информацию о их отсутствии) функция должна выводить
// в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные
// не нужны! Примечание 2. Для получения квадратного корня используйте
// стандартную функцию JS: Math.sqrt().

function squareFunc(a, b, c) {
    let D = ((b*b) - 4*(a * c));

    if (D < 0) {
        console.log('нет корней');
        return `0`;
    }
    if (D === 0) {
        console.log('один корень');
        return (-b)/(2 * a);
    }
    if (D > 0) {
        console.log('два корня');
        let k = Math.sqrt(D);
        let first = (-b - k) / (2 * a);
        let second = (-b + k) / (2 * a);
        return `корни уравнения ${first} и ${(second.toFixed(1))}`;
    }
}
console.log(squareFunc(3, 4, 7));