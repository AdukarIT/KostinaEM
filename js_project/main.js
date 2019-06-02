import {bd} from "./BD.js";
import {createPop} from "./popup.js";

window.addEventListener('DOMContentLoaded', () => {
    /*записываем исходные данные в localStorage*/
    localStorage.setItem('bd', JSON.stringify(bd));
    let bdLocal = JSON.parse(localStorage.getItem('bd'));
    let main = document.getElementsByTagName('main')[0];

    /*генерация карточек товара из базы*/
    (function getBD(basis) {
        basis.forEach(item => {
            let container = document.createElement('div');
            container.className = 'product-item';
            container.dataset.id = item.id;
            main.appendChild(container);

            let card = document.createElement('div');
            card.className = 'item-photo';
            card.style.backgroundImage = item.photo;
            container.appendChild(card);

            let cardName = document.createElement('h3');
            cardName.innerHTML = 'Исполнитель: ' + item.singer;
            container.appendChild(cardName);
        })
    })(bdLocal);

    createPop(bdLocal, main);

});