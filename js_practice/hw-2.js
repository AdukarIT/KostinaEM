//1
// В доме 5 подъездов по 20 квартир каждый. Получите от пользователя номер квартиры и
// взамен выдайте в консоль номер подъезда. Учитывайте, что пользователь может ввести
// число меньше 1 или больше 100.

// let flatNumber = parseInt(prompt("enter the number of flat"));

function home(flatNumber) {
    if((flatNumber < 1) || (flatNumber > 100)) {
        return `sorry, that flat does not exist`;
    }
    if(flatNumber <= 20) {
        return `1`
    } else if(flatNumber <= 40) {
        return `2`;
    } else if(flatNumber <= 60) {
        return `3`;
    } else if(flatNumber <= 80) {
        return`4`;
    } else {
        return`5`;
    }
}

// console.log(home(flatNumber));

//2
// Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case,
// которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в
// консоль введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США").
// Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".

// let autoMark = prompt("введите марку автомобиля: BMW, Audi, Ferrari, Jaguar, Opel, Dodge, Lada");

function yourCar(autoMark) {
    switch (autoMark) {
        case 'BMW':
            return `BMW - страна происхождения Германия`;
            break;
        case "Audi":
            return `Audi - страна происхождения Германия`;
            break;
        case "Ferrari":
            return `Ferrari - страна происхождения Италия`;
            break;
        case "Jaguar":
            return `Jaguar - страна происхождения Британия`;
            break;
        case "Opel":
            return `Opel - страна происхождения Германия`;
            break;
        case "Dodge":
            return `Dodge - страна происхождения США`;
            break;
        case "Lada":
            return `Lada - страна происхождения Россия`;
            break;
        default:
            return  `${autoMark} – страна происхождения неизвестна`
    }
}

// console.log(yourCar(autoMark));

//3
// Пользователь вводит год. Определите, является ли этот год високосным.

// let userYear = +prompt("введите год");

if((userYear % 4 === 0) && (userYear % 100 !== 0) || (userYear % 400 === 0)) {
 // console.log("високосный");
 } else {
 // console.log("обычный");
}

//4
// Пользователь вводит число от 1 до 20. Выведите в консоль таблицу умножения этого числа.
// Например, для числа 7: 7x1=7 7x2=14 ... 7x10=70

let number;

do {
 // number = +prompt("введите число от 1 до 20");
} while((number <= 1) || (number >= 20));

for(let i = 1; i < 11; i++) {
 let res = number * i;
 // console.log(`${number} x ${i} = ${res}`);
}

// 5
// Выведите в консоль сумму всех нечётных чисел от 1 до 50.
// Дополнительно: решите эту задачу, используя оператор continue.

let sum = 0;
// for(let i = 1; i < 51; i++) {
//  if(i % 2) {
//   sum += i;
//  }
// }

for(let i = 1; i < 51; i++) {
    if(i % 2 === 0) continue;
    sum += i;
}

// console.log(sum);

// 6
// Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.

let a = 1,
    b = 1;
    // console.log(a);
    // console.log(b);
for (let i = 3; i <= 15; i++) {
    let c = a + b;
    a = b;
    b = c;
    // console.log(b);
}

//7
//Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску"

let del = " #";
let hesh = "# ";

for(let i = 0; i < 8; i++){
 if(i % 2) {
  console.log(del + del + del + del);
 } else {
  console.log(hesh + hesh + hesh + hesh);
 }
}
















