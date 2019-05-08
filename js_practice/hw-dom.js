
//1
// Дан элемент #elem. Добавьте ему класс "www".

let elem = document.getElementById('elem');
let elemWithClass = elem.classList.add("www");
console.log(elem);

// 2
// Дан элемент #elem. Проверьте наличие у него класса "www",
// если есть - удалите класс

if(elem.classList.contains('www')) {
    elem.classList.remove('www');
}
console.log(elem);

// 3
// Напишите функцию поиска recursiveSearchTags, которая принимает
// на вход document и имя тега, а возвращает массив из всех элементов
// соответствующих этому тегу. Поиск идет в теге body

function recursiveSearchTags(document, tag) {
    let arr = [];
    function innerFunction(arr, target, tag) {
        for (let i = 0; i < target.children.length; i++) {
            let el = target.children[i];
            if (arr.indexOf(el) !== -1)
                break;
            if (el.tagName === tag.toUpperCase())
                arr.push(el);
            if (el.hasChildNodes())
                innerFunction(arr, el, tag);
        }
    }
   for (let i = 0; i < document.body.children.length; i++)
        innerFunction(arr, document.body, tag);
   return arr;
}
console.log(recursiveSearchTags(document, 'input'));

// 4
// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные
// позиции имели красный фон.

let elementsArr = ['a', 'span', 'p'];
let needUl = document.getElementsByClassName('dom-list')[0];

function addElements(list, arr) {
    for(let i = 0; i < arr.length; i++) {
        let wrapperLi = document.createElement('li');
        list.appendChild(wrapperLi);
        let innerElem = document.createElement(arr[i]);
        innerElem.innerHTML = "i am new " + arr[i];
        wrapperLi.appendChild(innerElem);
    }
    let even = list.querySelectorAll('li:nth-child(2n)');
    for(let j = 0; j < even.length; j++) {
        even[j].style.backgroundColor = "red";
    }
}
console.log(addElements(needUl, elementsArr));

// 5
// Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let previos = elem.previousElementSibling;
let text = document.createTextNode('!');
previos.appendChild(text);

// 6
// Реализуйте функцию wrapInParagraph, которая находит текст
// (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

let divElems = document.getElementsByTagName('div');
for(let i = 0; i < divElems.length; i++) {
    let node = divElems[i].childNodes;
    for(let j = 0; j < node.length; j++) {
        if((node[j].nodeType === 3) && (node[j].data.match(/\S/g))) {
            let parag = document.createElement('p');
            let newAdd = divElems[i].appendChild(parag);
            newAdd.appendChild(node[j]);
        }
    }
}

// 7
// Реализуйте функцию normalizeClassNames, которая нормализует имена классов
// для всех элементов на странице. В данном случае это означает что происходит
// преобразование всех классов написанных используя kebab нотацию в camelCase
// нотацию: text-center => textCenter

let children = document.body.getElementsByTagName('*');
let classes = [].filter.call(children, (item) => {
    return item.hasAttribute('class');
});
    classes.forEach(item => {
    let kebabClass = item.getAttribute('class');
    if(kebabClass.indexOf('-') !== -1) {
        let arr = kebabClass.split('-');
        for(let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].split('');
            arr[i][0] = arr[i][0].toUpperCase();
            arr[i] = arr[i].join('');
        }
        let camel = arr.join('');
        let camelClass = item.setAttribute('class', camel);
    }
});
