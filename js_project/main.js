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

    /*создание и добавление элементов затемнения фона, поп-апа, кнопки закрытия поп-апа*/
    let popBack = document.createElement('div');
    popBack.className = 'pop-up-wrapper close';
    main.appendChild(popBack);
    let pop = document.createElement('div');
    pop.className = 'pop-up-window close';
    main.appendChild(pop);
    let closeBtn = document.createElement('div');
    closeBtn.className = 'close-button';
    pop.appendChild(closeBtn);
    let detailPhoto = document.createElement('div');
    let detailDescription = document.createElement('div');
    let detailParagraph = document.createElement('p');

    /*событие клика по карточке товара - открытие поп-апа с детальной информацией*/
    document.addEventListener('click', (event) => {
        if(event.target.className === "item-photo") {
            popBack.classList.remove('close');
            pop.classList.remove('close');

            /*создание внутренних элементов поп-апа*/
            detailPhoto.className = 'item-photo';
            detailDescription.className = 'item-description';

            /*проверка на повторное открытие с одной и той же карточки товара*/
            if(pop.dataset.id == event.target.parentNode.dataset.id) {
                return;
            } else {
                /*изменение детального описания при открытии другого поп-апа*/
                pop.dataset.id = event.target.parentNode.dataset.id;
                if(pop.querySelector('.item-photo')) {
                    for(let i = 0; i < bdLocal.length; i++) {
                        if(bdLocal[i].id == pop.dataset.id) {
                            pop.querySelector('.item-photo').style.backgroundImage = bdLocal[i].photo;
                            pop.querySelector('[data-singer]').innerHTML = 'Исполнитель: ' + bdLocal[i].singer;
                            break;
                        }
                    }
                } else {
                    /*первое создание детального описания в поп-апе*/
                    for(let i = 0; i < bdLocal.length; i++) {
                        if(bdLocal[i].id == pop.dataset.id) {
                            detailPhoto.style.backgroundImage = bdLocal[i].photo;
                            pop.appendChild(detailPhoto);
                            pop.appendChild(detailDescription);
                            detailParagraph.dataset.singer = 'singer';
                            pop.querySelector('.item-description').appendChild(detailParagraph);
                            detailDescription.querySelector('[data-singer]').innerHTML = 'Исполнитель: ' + bdLocal[i].singer;
                            break;
                        }
                    }
                }
            }
        }
    });
    /*событие клика по кнопке закрытия поп-апа*/
    closeBtn.addEventListener('click', () => {
        popBack.classList.add('close');
        pop.classList.add('close');
    });

    let detailForm = document.createElement('form');
    let input = document.createElement('input');
    input.setAttribute('name', 'message');
    input.setAttribute('type', 'text');
    let inputBtn = document.createElement('input');
    inputBtn.className = 'write-button';
    inputBtn.innerHTML = 'write-button';
    inputBtn.setAttribute('type', 'submit');
    detailDescription.appendChild(detailForm);
    detailForm.appendChild(input);
    detailForm.appendChild(inputBtn);

    console.log(detailDescription.getElementsByTagName('form')[0]);

    detailDescription.getElementsByTagName('form')[0].onsubmit = function() {
        let message = detailForm.querySelector('input[name="message"]').value;

        // localStorage.setItem('', message);
        // console.log();
        return false;
    };

});