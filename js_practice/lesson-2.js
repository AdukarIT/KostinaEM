//1
//Получить два числа (через prompt), вывести в консоль большее из них.
let a = parseInt(prompt("first num"));
let b = parseInt(prompt("second num"));

if(a > b) {
    console.log(a);
} else {
    console.log(b);
}

//2
//Получить два числа, вывести в консоль знак их произведения.
console.log(a * b);

//3
//Получить три числа, вывести их в консоль в порядке возрастания.

let firstNum = parseInt(prompt("first num"));
let secondNum = parseInt(prompt("second num"));
let thirdNum = parseInt(prompt("third num"));

if((firstNum <= secondNum) && (firstNum <= thirdNum)) {
    console.log(firstNum);
    if(secondNum <= thirdNum) {
        console.log(secondNum);
        console.log(thirdNum);
    } else {
        console.log(thirdNum);
        console.log(secondNum);
    }
} else if((secondNum <= firstNum) && (secondNum <= thirdNum)) {
    console.log(secondNum);
    if(firstNum <= thirdNum) {
        console.log(firstNum);
        console.log(thirdNum);
    } else {
        console.log(thirdNum);
        console.log(firstNum);
    }
} else if((thirdNum <= firstNum) && (thirdNum <= secondNum)) {
    console.log(thirdNum);
    if(firstNum <= secondNum) {
        console.log(firstNum);
        console.log(secondNum);
    } else {
        console.log(secondNum);
        console.log(firstNum);
    }
}

//4
//Переписать задачу 1, заменив if на тернарный оператор.

a > b ? console.log(a) : console.log(b);

//5
/*Получить число.
  Используя switch, вывести в консоль сообщение: для чисел от 1 до 5 – разные, для остальных – одинаковое.*/

let userNum = parseInt(prompt("enter the number from 1 to 100"));

switch (userNum) {
    case 1:
        console.log("that is one");
        break;
    case 2:
        console.log("that is two");
        break;
    case 3:
        console.log("that is three");
        break;
    case 4:
        console.log("that is four");
        break;
    case 5:
        console.log("that is five");
        break;
    default:
        console.log("that is something else");
}

//Во всех задачах x – число, заданное пользователем.

let x = parseInt(prompt("enter your number"));
let k = x;
let i = 2;
//6
/*Вывести в консоль все простые числа от 2 до x.*/

/*Для всех i от 1 до 10 {
 проверить, делится ли число i на какое - либо из чисел до него
 если делится, то это i не подходит, берем следующее
 если не делится, то i - простое число
 }*/

startPoint:
    for( ; i <= x; i++) {

        for(let j = 2; j < i; j++) {
            if(i % j === 0) continue startPoint;
        }
        console.log(i);
    }

//7
//Вывести в консоль все чётные числа от x до 0 (в порядке убывания).

for( ; k >= 0; k--) {
    if(k % 2 === 0) {
        console.log(k);
    }
}

//8
/*Переписать задачу 1 или задачу 2, используя while вместо for (или наоборот, если использовали while).*/

while (k >= 0) {
    if(k % 2 === 0) {
        console.log(k);
    }
    k--;
}

////////////////////

let maxNum = 100;
let mainCounter = 2;
do {
    let isPrime = false;
    let counter = 2;
    do {
        if (mainCounter % counter === 0) break;
        counter++;
    } while (counter <= mainCounter);

    if (counter == mainCounter) {
        console.log(mainCounter);
    }
    mainCounter++;
} while (mainCounter <= maxNum);

///////////////


let j;

startAgain:
    while(i <= k) {
        j = 2;
        while(j < i) {
            if(i % j === 0) {
                i++;
                continue startAgain;
            }
            j++;
        }
        console.log(i);
        i++;
    }