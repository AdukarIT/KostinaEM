
//1
// Сделайте так, чтобы по нажатию на кнопку выводился alert

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        alert("hello");
    })
});

//2
// Создайте кнопку с произвольным текстом, сделайте так, чтобы
// по нажатию текст изменялся на button

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        this.innerText = "button";
    })
});

//3
// Создайте форму с полем для ввода и двумя кнопками, сделайте так,
// чтобы по нажатию на кнопку disable, поле становилось неактивным,
// в случае с enable - наоборот

window.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('disableBtn')[0].addEventListener('click', () => {
        document.getElementById('last').getElementsByTagName('input')[0].setAttribute('disabled', true);
    });
    document.getElementsByClassName('enableBtn')[0].addEventListener('click', () => {
        document.getElementById('last').getElementsByTagName('input')[0].removeAttribute('disabled');
    });
});


//4
// Нужно создать документ с двумя полями ввода и объектом произвольной формы и цвета.
// Сделайте так, чтобы в поле ввода можно было вводить только числовые значения координат и двигать объект
// на эти значения, или двигать объект просто мышкой

window.addEventListener('DOMContentLoaded', () => {
    let box = document.getElementById('drag');
    box.onmousedown = function(e) {
        let coords = getCoords(box);
        let shiftX = e.pageX - coords.left;
        let shiftY = e.pageY - coords.top;
        box.style.position = 'absolute';
        document.body.appendChild(box);
        moveAt(e);
        box.style.zIndex = 1000; // над другими элементами
        function moveAt(e) {
            box.style.left = e.pageX - shiftX + 'px';
            box.style.top = e.pageY - shiftY + 'px'; }
        document.onmousemove = function(e) {
            moveAt(e);
        };
        box.onmouseup = function() {
            document.onmousemove = null;
            smile.onmouseup = null;
        };
    };
    box.ondragstart = function() { return false; };
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
});

//5
// Выведите координаты мыши относительно блока в момент движения курсора мыши
// внутри блока. Координаты выводить под блоком.

window.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('block-for-mouse')[0].addEventListener('mousemove', (event) => {
        document.getElementsByClassName('xCord')[0].innerHTML = event.offsetX;
        document.getElementsByClassName('yCord')[0].innerHTML = event.offsetY;
    });
});

//6
// Создайте блок div, в качестве изображения фона установите ему изображение
// закрытой папки. Добавьте событие, которое выполняется при двойном клике на
// блоке и заменяет фон блока на изображение открытой папки

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.folder-block').addEventListener('dblclick', (event) => {
        document.querySelector('.folder-block').style.background = 'url(img/opened-file.png) center no-repeat / cover';
    });
});

//7
// Добавьте в документ 300-400 блоков div квадратной формы с размерами сторон 30px,
// и цветом фона. Добавление элементов выполните с помощью цикла. Добавьте событие
// при наведении мыши, которое будет скруглять данные блоки с помощью border-radius
// до круга. Для замедления эффекта скругления в CSS можно добавить transition.

window.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementsByClassName('container-of-divs')[0];
    for(let i = 0; i < 400; i++) {
        let block = document.createElement('div');
        block.classList.add('square-circles');
        container.appendChild(block);
    }
    let currentElem = null;
    //событие mouseover - мышь проходит над элементом
    container.onmouseover = function(event) {
        if (currentElem) {
            return;
        }
        //event.target - элемент, на который пришла мышь, то есть на котором происходит событие
        let target = event.target;
        while (target !== this) {
            if (target.tagName === 'DIV') break;
            target = target.parentNode;
        }
        if (target === this) return;
        currentElem = target;
        target.style.borderRadius = '50px';
    };

    //событие mouseout - мышь уходит с элемента
    container.onmouseout = function(event) {
        if (!currentElem) return;

        let relatedTarget = event.relatedTarget;
        if (relatedTarget) {
            while (relatedTarget) {
                if (relatedTarget === currentElem) return;
                relatedTarget = relatedTarget.parentNode;
            }
        }
        currentElem.style.borderRadius = '';
        currentElem = null;
    };
});
