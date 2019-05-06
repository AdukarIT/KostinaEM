

//1
// Напишите функцию, которая принимает в качестве параметра номер
// символа в таблице Unicode. Подсчитайте количество таких символов
// во всех элементах массива, как в задаче 3 из первой части практики.

let str = 'Nulla facilisi. Mauris bibendum eros sapien, ut fringilla' +
    ' lectus lobortis placerat. Sed eu urna consectetur, maximus elit ' +
    'dapibus, pellentesque mauris. Suspendisse potenti.';

function arrMaker(str) {
    let arr = str.split(' ');
    let arr2 = [];
    arr.forEach(item => {
        item = item.split("");
        if((item[item.length - 1] === ".") || (item[item.length - 1] === ",")) {
            item.pop();
        }
        item = item.join("");
        arr2.push(item);
    });
    return arr2;
}
function uniCounter(uni) {
    function arrMake(arr) {
        arr.reduce((sum, item) => {
            let cur = item.split("");
            cur.forEach(elem => {
                if(String.fromCharCode(uni) === elem) {
                    sum++;
                }
            });
            return sum;
        }, 0);
    }
    return arrMake;
}
// console.log(uniCounter('108', ["dad", "rod", "doctor"]));

//2
// Напишите функцию, которая будет возвращать частичную функцию
// от функции из задачи 1, фиксируя искомый символ. Например:
// let countOfD = letterCounter(100);	// 100 = 'd' в Unicode
// console.log(countOfD(["dad", "rod", "doctor"])); // 4

let countOfD = uniCounter(100);
// console.log(countOfD(["dad", "rod", "doctor"]));


// Для решения задач 3-6 используйте файл uscities.js.
//3
// Отфильтруйте массив городов так, чтобы в нём остались только
// города из штата Калифорния, которые с 2000 по 2013 выросли в населении.

function citiesWithGrowth(arr) {
    let arrOfCities = arr.filter(item => {
        return (item.state === "California") && (parseInt(item.growth_from_2000_to_2013) > 0)
    });
    return arrOfCities;
}
// console.log(citiesWithGrowth(data));

//4
// Подсчитайте, сколько миллионов населения живёт во всех городах
// на широте от 25 до 30 градусов.

function howManyPeople(arr) {
    let sum = 0;
    arr.forEach(item => {
        if((parseInt(item.latitude) > 25) && (parseInt(item.latitude) < 30)) {
            sum = sum + parseInt(item.population);
        }
    });
    return `В городах живет примерно ${Math.round(sum/1000000)} миллионов людей`;
}
// console.log(howManyPeople(data));

//5
// Создайте массив только из тех городов, которые начинаются на букву D,
// при этом отсортируйте элементы этого массива по названию города.


function dCities(arr) {
    let sortedCities = arr.filter(item => {
        return item.city[0] === 'D';
    }).sort(function(a, b) {
        if (a.city > b.city) {
            return 1;
        }
        if (a.city < b.city) {
            return -1;
        }
        return 0;
    });
    return sortedCities;
}
console.log(dCities(data));

//6
// Преобразуйте представленный массив "Города" в объект "Штаты":
// -для каждого штата – отдельное свойство объекта (ключ = название штата);
// -значение каждого свойства – массив городов;
// -каждый элемент массива – название города, население и место в общем рейтинге (rank).

//????