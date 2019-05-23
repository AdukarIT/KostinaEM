
window.addEventListener('DOMContentLoaded', () => {
// 1
// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.


    let parent = document.getElementsByClassName('clone-input')[0];
    let targetInput = document.querySelector('input.clone');
    let cloneButton = document.querySelector('.clone-button');
    cloneButton.addEventListener('click', () => {
        let newElement = targetInput.cloneNode(true);
        parent.appendChild(newElement);
    });


//2
// Добавьте на страницу таблицу в стандартном оформлении. При клике
// на таблице добавьте ей класс bordered, при втором клике удалите класс
// bordered и добавьте класс striped, при третьем клике удалите класс striped
// и добавьте класс highlight.


    let table = document.getElementById('decoratedTable');
    console.dir(table);
    let counter = 0;
    table.addEventListener('click', () => {
        counter++;
        if (counter === 1)
            table.classList.add('bordered');
        
        if(counter === 2) {

        }

    });

//3
// Модифицируйте задачу 7. Добавьте три radiobutton. При выборе первого
// включается класс bordered, при выборе второго отключается bordered и
// включается striped, при выборе третьего включается highlight и отключается striped.

//4
// Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите
// содержащийся в тегах кнопки текст. Вывод осуществлять с помощью alert.
// Создайте кнопку отключающую события на предыдущей кнопке.

let main = document.getElementsByTagName('body')[0];
let button = document.createElement('button');
button.innerHTML = 'hello, i am button!';
main.appendChild(button);

button.onclick = function() {
    alert(this.innerHTML);
};

let resetBtn = document.createElement('button');
resetBtn.innerHTML = 'reset previous btn';
main.appendChild(resetBtn);

resetBtn.onclick = function() {
    button.onclick = function(e) {
        e.stopPropagation();
    };
};

//5
// Создайте элементы div, p, button, a. Используя target по клику выводите
// информацию о типе элемента по которому произошел клик.

function creation(arr) {
    for(let i = 0; i < arr.length; i++) {
        let elem = document.createElement(arr[i]);
        elem.dataset.type = arr[i];
        document.body.appendChild(elem);
        let br = document.createElement('br');
        document.body.appendChild(br);
        let inner = document.createElement('span');
        inner.innerHTML = 'click me';
        elem.appendChild(inner);
    }
}
creation(['div', 'p', 'button', 'a']);

let nodeList = {
    //' Всевозможные значения nodeType
    '1': "ELEMENT_NODE",
    '2': 'ATTRIBUTE_NODE',
    '3': 'TEXT_NODE',
    '4': 'CDATA_SECTION_NODE',
    '5': 'ENTITY_REFERENCE_NODE',
    '6': 'ENTITY_NODE',
    '7': 'PROCESSING_INSTRUCTION_NODE',
    '8': 'COMMENT_NODE',
    '9': 'DOCUMENT_NODE',
    '10': 'DOCUMENT_TYPE_NODE',
    '11': 'DOCUMENT_FRAGMENT_NODE',
    '12': 'NOTATION_NODE'
};

//6
// Добавьте в html код изображение. Добавьте скрипт, который будет выполнять
// следующие действия: при наведении мыши на картинку, изображение будет
// заменяться другим изображением. При выходе мыши за пределы изображения,
// будет восстанавливаться первоначальное изображение.


let pic = main.querySelector('.picture');
pic.onmouseover = function(event) {
    if (event.target === this) {
        pic.setAttribute('src', 'img/day.jpg')
    }
};
pic.onmouseout = function(event) {
    if (event.target === this) {
        pic.setAttribute('src', 'img/night.jpg')
    }
};

//7
// Используя событие onclick реализовать аналог fancybox. При клике – картинка
// увеличивается в размерах и всплывает над контентом. Остальной контент затемняется.
// Для «всплывания» изображения используйте position:absolute.

});