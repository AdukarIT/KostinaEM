//variables

//1
// Создайте массив и в цикле заполните его чётными числами от 2 до 20.

let firstArr = [];

for(let i = 2; i <= 20 ; i++) {
    if(!(i % 2)) {
        firstArr.push(i);
    }
}

// console.log(firstArr);

//2
//Преобразуйте массив из задачи 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5.

for(let i = 0; i <= 20 ; i++) {
    firstArr[i] = i * 5;
}

// console.log(firstArr);

//3
// Получите от пользователя три числа, создайте из них массив. Используя циклы, найдите наибольшее
// из чисел и разделите на него каждый элемент массива.

let userArr = [];
for(let i = 0; i < 3; i++) {
    // userArr.push(parseInt(prompt("enter the number")));
}
let bigOne = userArr[0];
for(let i = 0; i < userArr.length; i++) {
    if(bigOne < userArr[i]) {
        bigOne = userArr[i];
    }
}
for(let i = 0; i < userArr.length; i++) {
    userArr[i] = (userArr[i] / bigOne).toFixed(2);
}
// console.log(userArr);

//4
//Преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке.

let len = firstArr.length;
for(let i = 0; i < len / 2; i++) {
    let last = firstArr[len - i - 1];
    firstArr[len - i] = firstArr[i];
    firstArr[i] = last;
}
// console.log(firstArr);

//5
//Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их в конец массива.
// Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, на их место вставьте пять первых
// степеней двойки. Элементы с 26 по 30 замените на единицы. Элементы с 31 по 35 склейте в одну строку, разделяя
// пробелами, и замените на итоговую строку.

let arr = [];

function ArrPower(a) {

}
// console.log(ArrPower(arr));

//6
//Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.

function deletion(del) {
    let newArr = [];
    for(let i = 0; i < del.length; i++){
        if(del[i] !== del[i + 1]) {
            newArr.push(del[i]);
        }
    }
    return newArr;
}
// console.log(deletion([1, 1, 5, 6, 7, 8, 8]));

//7
//Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.

function deletion2(del) {
    let newArr = [];
    for(let i = 0; i < del.length; i++){
        if(!!del[i]) {
            newArr.push(del[i]);
        }
    }
    return newArr;
}
console.log(deletion2([1, -5, 6, 0, 8, '']));
