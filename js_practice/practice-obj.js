
//1
// Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите в консоль элемент
// с ключом 'c' двумя способами: через квадратные скобки и через точку.
// Затем выведите все свойства объекта через цикл for..in.

let obj = {
    a: 1,
    b: 2,
    c: 3
};

// for(let prop in obj) {
//     console.log(prop)
// }

// console.log(obj['c']);
// console.log(obj.c);

//2
// Создайте объект city, добавьте ему свойства name (название города, строка)
// и population (население, число).

let city = {
    name: 'Vitebsk',
    population: 377960
};

//3
// Создайте массив из шести объектов такого же вида, как city из задачи 2
// – по одному для каждого областного города Беларуси.

let cities = [
    {
        name: 'Minsk',
        population: 1982444
    },
    {
        name: 'Vitebsk',
        population: 377960
    },
    {
        name: 'Homel',
        population: 535963
    },
    {
        name: 'Mogilev',
        population: 381353
    },
    {
        name: 'Hrodna',
        population: 370919
    },
    {
        name: 'Brest',
        population: 347576
    }
];

//4
// Напишите функцию, которая принимает массив из задачи 3 в качестве
// параметра и выводит в консоль информацию о каждом городе.

function citiesArr(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// console.log(citiesArr(cities));

//4
// Создайте в объектах с городами из задачи 3 метод getInfo,
// который возвращает строку с информацией о городе (например,
// в таком формате: "Город Добруш, население – 18760 человек").

function citiesOfBelarus(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("Население города " + arr[i].name + " - " + arr[i].population + " человек")
    }
}
// console.log(citiesOfBelarus(cities));

//5
// Создайте объект с информацией о себе (имя, фамилия, любимое занятие).
// Добавьте в него метод, который выводит эту информацию в консоль в
// удобочитаемом формате.


let myself = {
    name: 'Kate',
    surname: 'Kostina',
    hobby: 'to annoy people',
    information: function () {
        return `${this.name} ${this.surname} likes ${this.hobby}`;
    }
};

console.log(myself.information());













