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


// bla

function repeat(input, count) {
    let result = '';
    for(let i = 0; i < count; i++) {
        result += input;
    }
    return result;
}

// console.log(repeat('ba', 3));

//3

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

function getNull() {
    let num;
    do {
        num = parseInt(prompt("введите 0"));
    } while (num !== 0);

}

// console.log(getNull());

//6

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

let seven = () => {
    for(let s = 99; s >= 10; s--) {
        if((s % 10 === 7) || (s % 7 === 0) || (s === 7)) {
            console.log(s);
        }
    }
};

// seven();

//10

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

function NOD2(x, y) {
    if(! y) {
        return x;
    }
    return NOD2(y, x % y);
}

// console.log(NOD2(5, 16));


//15

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























