

//1
//Напишите функцию, которая получает три числа и возвращает их сумму.

function totalSum(a, b, c) {
    return a + b + c;
}
// console.log(totalSum(3, 5, 16));

//2
//Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.

function endedSum(x) {
    let sum = 0;
    for(let i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
}
// console.log(endedSum(10));

//3
//Напишите функцию, которая подсчитывает сумму цифр числа.
let sum = 0;
function numberSum(a) {
    if(a > 0) {
        sum += a % 10;
        numberSum((a / 10) | 0);
    }
        return sum;
}
// console.log(numberSum(236));

//4
//Напишите функцию, которая считает факториал числа.

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));