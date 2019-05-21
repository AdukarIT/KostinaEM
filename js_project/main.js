window.addEventListener('DOMContentLoaded', () => {
    let main = document.getElementsByTagName('main')[0];

    (function getBD(basis) {
        basis.forEach(item => {
            let container = document.createElement('div');
            container.className = 'product-item';
            container.setAttribute('id', item.id);
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

    let pop = document.createElement('div');
    pop.className = 'pop-up-window close';
    main.appendChild(pop);

    document.addEventListener('click', (event) => {
        if(event.target.className === "item-photo") {
            pop.classList.remove('close');
            let activeId = event.target.parentNode.getAttribute('id');

            (function detailItem(basis) {
                basis.forEach(item => {
                    if(item.id == activeId) {
                        // console.log('entry');
                        let detailPhoto = document.createElement('div');
                        detailPhoto.className = 'item-photo';
                        detailPhoto.style.backgroundImage = item.photo;
                        pop.appendChild(detailPhoto);
                    }
                })
            })(bd);
        }
    });

});