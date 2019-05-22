window.addEventListener('DOMContentLoaded', () => {
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
    })(bd);

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

    /*событие клика по карточке товара - открытие поп-апа с детальной информацией*/
    document.addEventListener('click', (event) => {
        if(event.target.className === "item-photo") {
            popBack.classList.remove('close');
            pop.classList.remove('close');

            /*создание внутренних элементов поп-апа*/
            let detailPhoto = document.createElement('div');
            detailPhoto.className = 'item-photo';
            let detailDescription = document.createElement('div');
            detailDescription.className = 'item-description';
            let detailParagraph = document.createElement('p');


            /*проверка на повторное открытие с одной и той же карточки товара*/
            if(pop.dataset.id == event.target.parentNode.dataset.id) {
                return;
            } else {
                /*изменение детального описания при открытии другого поп-апа*/
                pop.dataset.id = event.target.parentNode.dataset.id;
                if(pop.querySelector('.item-photo')) {
                    for(let i = 0; i < bd.length; i++) {
                        if(bd[i].id == pop.dataset.id) {
                            pop.querySelector('.item-photo').style.backgroundImage = bd[i].photo;
                            pop.querySelector('[data-singer]').innerHTML = 'Исполнитель: ' + bd[i].singer;
                            break;
                        }
                    }
                } else {
                    /*первое создание детального описания в поп-апе*/
                    for(let i = 0; i < bd.length; i++) {
                        if(bd[i].id == pop.dataset.id) {
                            detailPhoto.style.backgroundImage = bd[i].photo;
                            pop.appendChild(detailPhoto);
                            pop.appendChild(detailDescription);
                            detailParagraph.dataset.singer = 'singer';
                            pop.querySelector('.item-description').appendChild(detailParagraph);
                            detailDescription.querySelector('[data-singer]').innerHTML = 'Исполнитель: ' + bd[i].singer;
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
    })

});