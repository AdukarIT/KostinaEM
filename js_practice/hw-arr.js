
//1
//Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len),
// которая возвращает массив случайных чисел длиной len.

let getRandomArray = function(len) {
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(Math.round((Math.random() * 1000)) / 1000);
    }
    return arr;
};
// console.log(getRandomArray(5));

// При решении задач 2-9 используйте массивы, созданные через getRandomArray.
// Решение каждой задачи должно быть оформлено как отдельная функция.
// 2
//Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

function arifm(arr) {
    let sum = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let mid = (sum / arr.length);
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] > mid) {
            newArr.push(arr[j]);
        }
    }
    console.log(newArr);
}
// arifm(getRandomArray(6));

//3
//Найдите два наименьших элемента массива.

function theSmallestItem(arr) {
    let smallest = arr[0];
    let second;
    console.log(arr);
    for(let i = 1; i < arr.length; i++){
        if(smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    // for(let j = 0; j < arr.length; j++) {
    //     if() {
    //
    //     }
    // }
    return `${smallest} & ${second}`;
}
// console.log(theSmallestItem(getRandomArray(6)));

//4
//Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд,
// а на освободившиеся места вставьте нули.

function zero(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0.3) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
// console.log(zero(getRandomArray(5)));

//5
//Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2,
// второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.

function sumArr(arr1, arr2) {
    let resultArr = [];
    for(let i = 0; i < arr1.length; i++) {
        resultArr.push(arr1[i] + arr2[arr2.length - i - 1]);
    }
    return resultArr;
}
// console.log(sumArr(getRandomArray(5), getRandomArray(5)));

//6
//Отсортируйте массив методом пузырька. О самом алгоритме можно почитать на википедии.
// А ещё можно посмотреть, как его танцуют в Венгрии.

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                let perm = arr[i];
                min = arr[j];
                arr[i] = min;
                arr[j] = perm;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(getRandomArray(5)));

//7
//(*) Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001).
// Если такая пара (или такие пары) есть, выведите их в консоль.

function pairs(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if((sum > 0.999) && (sum < 1.001)) {
                console.log(`${arr[i]} & ${arr[j]}`)
            }
        }
    }
}
// pairs(getRandomArray(5));

//8
//(*) Создайте массив той же длины, что исходный. На месте самого большого числа исходного массива
// в новом вставьте число 1, на месте второго по величине – 2 и так далее.

function doubleArray(arr) {
    let siblingArr = [];
    for(let i = 0; i < arr.length; i++) {
        siblingArr[i] = arr[i];
    }
    for(let i = 0; i < arr.length - 1; i++) {
        let max = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] > max) {
                let perm = arr[i];
                max = arr[j];
                arr[i] = max;
                arr[j] = perm;
            }
        }
    }
    for(let i = 0; i < siblingArr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(siblingArr[i] === arr[j]) {
                siblingArr[i] = j+1;
            }
        }
    }
    return siblingArr;
}
// console.log(doubleArray(getRandomArray(5)));

//9
//(*) Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента).
// Элементы, которые после сдвига "уходят" за пределы его длины, переместите на освободившиеся первые Х позиций.

// let arr1 = ['a1', 'a2', 'a3', 'a4', 'a5'];
function train(arr, x) {
    console.log(arr);
    arr = arr.concat(arr.splice(0, arr.length - x));
    return arr;
}
console.log(train(getRandomArray(6), 3));













