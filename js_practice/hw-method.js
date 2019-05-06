
//1
// Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике)
// и создаёт на его основе новый. Элементы нового массива – объекты вида
// {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. initial –
// значение элемента исходного массива с тем же индексом, sqrt – корень квадратный
// из этого значения. Если округление sqrt по обычным математическим правилам
// сходится с его округлением через floor, то floor = true, а ceil = false. Если
// сходится с округлением через ceil - наоборот. Например, пусть у исходного массива
// arr[0] = 19, тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674,
// floor: true, ceil: false}.
//2
// Добавьте в каждый элемент массива из задачи 1 ещё одно свойство:
// значение sqrt, округлённое до сотых.

let getRandomArray = function(len) {
    let arr = [];
    for(let i = 0; i < len; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
};

function arrayOfObj(arr) {
    for(let i = 0; i < arr.length; i++) {
        let elemInArr = {};
        for(let j = 0; j < 4; j++) {
            elemInArr.initial = arr[i];
            elemInArr.sqrt = Math.sqrt(arr[i]);
            elemInArr.roundSqrt = (Math.round((elemInArr.sqrt) * 100) / 100);
            if(Math.round(elemInArr.sqrt) == Math.floor(elemInArr.sqrt)) {
                elemInArr.floor = true;
                elemInArr.ceil = false;
            } else if(Math.round(elemInArr.sqrt) == Math.ceil(elemInArr.sqrt)) {
                elemInArr.floor = false;
                elemInArr.ceil = true;
            }
        }
        arr[i] = elemInArr;
    }
    return arr;
}
// console.log(arrayOfObj(getRandomArray(5)));

//3
// Напишите функцию, которая определяет, является ли строка палиндромом.

function isPalindrom(str) {
    let newStr = str.split('').reverse().join('');
    if(newStr == str) {
        return `the string \"${str}\" is a palindrom`;
    } else {
        return `the string \"${str}\" is not a palindrom`;
    }
}
// console.log(isPalindrom('adfvljnlnfv'));
// console.log(isPalindrom('fkdmvivmdkf'));

//4
// Напишите функцию, которая принимает строку и возвращает символ, который
// встречается в ней чаще всего. Если таких символов несколько, функция должна
// возвращать строку из этих символов.

function commonChar(text) {
    let charMap = {};
    let maxCharValue = 0;
    let maxChar = '';
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char];
            maxChar = char
        }
    }
    return maxChar
}
// console.log(commonChar("Алиса сидела на берегу и скучала"));

//5
// Напишите функцию, которая получает в аргументы три строки – str, search, replace.
// Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на
// подстроку replace и возвращает результат.

function replaceFunc(str, search, replace) {
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes(search)) {
            arr[i] = arr[i].replace(search, replace);
        }
    }
    return arr.join(" ");
}
// console.log(replaceFunc("Алиса сидела со старшей сестрой на берегу и маялась: " +
//     "делать ей было совершенно нечего, а сидеть без дела, сами знаете, дело " +
//     "нелегкое; раз-другой она, правда, сунула нос в книгу, которую сестра читала, " +
//     "но там не оказалось ни картинок, ни стишков. 'Кому нужны книжки без картинок " +
//     "или хоть стишков, не понимаю!' - думала Алиса.", "Алиса", "Зина"));

//6
// Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.

function replacer(str) {
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }
    return arr.join(" ");
}
// console.log(replacer("Алиса сидела со старшей сестрой на берегу"));

//7
// Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки.
// Например, строка "я учусь программированию" должна преобразоваться
// в "я уч*сь прог*ам*и**в*н*ю".

function shagovita(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(newStr.includes(str[i])) {
            newStr = newStr.concat("*");
        } else {
            newStr = newStr.concat(str[i]);
        }
    }
    return newStr;
}
// console.log(shagovita("я учусь программированию"));

//8
// Напишите функцию, которая возвращает текущий день недели на русском языке.

let now = new Date();
function todayIs(date) {
    let week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return week[date.getDay()];
}
// console.log(todayIs(now));

//9
// Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и,
// используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.

function weekDay(userDate) {
    let dateNow = userDate.split('-').join('');
    let finalDate = new Date(dateNow.slice(4), dateNow.slice(2, 4) - 1, dateNow.slice(0, 2));
    return todayIs(finalDate)
}
// console.log(weekDay(userDate = prompt('введите дату в формате "ДД-ММ-ГГГГ"')));

//10
// Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию,
// которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите
// функцию, которая возвращает дату, в которую пользователь отметит ближайший
// 1000-дневный юбилей (например, 11000 дней).

function hbDay(date) {
    let newDate = new Date();
    let oneDay = 86400000; //количество милисекунд в одном дне
    let userDate = date.split('-').join('');

    let finalDate = new Date(newDate.getFullYear() + 1, userDate.slice(2, 4) - 1, userDate.slice(0, 2));
    let result = Math.round((finalDate - newDate) / oneDay);
    // console.log(`До следующего дня рождения осталось ${result} дней`);

    let user = new Date(userDate.slice(4), userDate.slice(2, 4) - 1, userDate.slice(0, 2));
    let smt = 1000 - result % 1000;
    console.log(smt);
    console.log(user);
    console.log(finalDate);
    console.log(user.getTime() / (oneDay * 1000));
}
hbDay('14-03-1991');
// console.log(hbDay(date = prompt('введите дату в формате "ДД-ММ-ГГГГ"')));

//11
// Напишите функцию, которая принимает число, проверяет, является ли оно квадратом
// целого числа. Если это так, функция возвращает квадратный корень исходного числа;
// в ином случае генерирует ошибку. Используя задачу 2 из практики, создайте массив
// целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки
// и выводя в консоль сообщения и о них, и об успешных результатах. Массив должен
// быть пройден до конца, несмотря на ошибки!

function getRandomArray2(len, min, max){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
    }
    return arr;
}

function isSquare(arr) {
    let a;
    arr.forEach((item, i, arr) => {
        a = Math.sqrt(arr[i]);
        try {
            if((a ^ 0) === a) {
                console.log(a);
            } else {
                throw new Error (`${a} не является целым корнем`);
            }
        } catch (e) {
            console.log(e);
        }

    });
}
// isSquare(getRandomArray2(10, 1, 20));




















