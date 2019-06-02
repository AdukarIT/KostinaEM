import {rusBd} from "./BD.js";

    export function createPop(bdLocal, main) {
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
        // let detailParagraph = document.createElement('p');

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
                                let list = pop.querySelectorAll('[data-key]');
                                for(let j = 0; j < list.length; j++) {
                                    for (let rusKey in rusBd) {
                                        if(list[j].dataset.key == 'songs') {




                                            for(let k = 0; k < bdLocal[i].songs.length; k++) {
                                                let songItem = document.createElement('span');
                                                if(bdLocal[i].songs[k].songLength.minutes != 0 && bdLocal[i].songs[k].songLength.seconds != 0) {
                                                    songItem.innerHTML = `${bdLocal[i].songs[k].name} - ${bdLocal[i].songs[k].songLength.minutes}:${bdLocal[i].songs[k].songLength.seconds}; `;
                                                } else {
                                                    songItem.innerHTML = `${bdLocal[i].songs[k].name}; `;
                                                }
                                                pop.querySelector('p[data-key="songs"]').appendChild(songItem);
                                            }
                                        } else if(list[j].dataset.key == rusKey) {
                                            list[j].innerHTML = `${rusBd[rusKey]}: ${bdLocal[i][list[j].dataset.key]}`;
                                        }
                                    }
                                }
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
                                for(let key in bdLocal[i]) {
                                    if(key == 'id' || key == 'photo') {
                                        continue;
                                    } else {
                                        let detailParagraph = document.createElement('p');
                                        detailParagraph.dataset.key = key;
                                        for(let rusKey in rusBd) {
                                            if(key == 'songs') {
                                                detailParagraph.className = 'song-container';
                                                detailParagraph.innerHTML = `${rusBd.songs}: `;
                                                for(let k = 0; k < bdLocal[i].songs.length; k++) {
                                                    let songItem = document.createElement('span');
                                                    if(bdLocal[i].songs[k].songLength.minutes != 0 && bdLocal[i].songs[k].songLength.seconds != 0) {
                                                        songItem.innerHTML = `${bdLocal[i].songs[k].name} - ${bdLocal[i].songs[k].songLength.minutes}:${bdLocal[i].songs[k].songLength.seconds}; `;
                                                    } else {
                                                        songItem.innerHTML = `${bdLocal[i].songs[k].name}; `;
                                                    }
                                                    detailParagraph.appendChild(songItem);
                                                }
                                            } else if(detailParagraph.dataset.key == rusKey) {
                                                detailParagraph.innerHTML = `${rusBd[rusKey]}: ${bdLocal[i][key]}`;
                                            }
                                        }
                                        pop.querySelector('.item-description').appendChild(detailParagraph);
                                    }
                                }
                                break;
                            }
                        }
                    }
                }
            }
        });

        /*создание детального описания в карточке*/
        /*событие клика по кнопке закрытия поп-апа*/
        closeBtn.addEventListener('click', () => {
            popBack.classList.add('close');
            pop.classList.add('close');
        });

        // let detailForm = document.createElement('form');
        // let input = document.createElement('input');
        // input.setAttribute('name', 'message');
        // input.setAttribute('type', 'text');
        // let inputBtn = document.createElement('input');
        // inputBtn.className = 'write-button';
        // inputBtn.innerHTML = 'write-button';
        // inputBtn.setAttribute('type', 'submit');
        // detailDescription.appendChild(detailForm);
        // detailForm.appendChild(input);
        // detailForm.appendChild(inputBtn);
        //
        // console.log(detailDescription.getElementsByTagName('form')[0]);
        //
        // detailDescription.getElementsByTagName('form')[0].onsubmit = function() {
        //     let message = detailForm.querySelector('input[name="message"]').value;
        //
        //     // localStorage.setItem('', message);
        //     // console.log();
        //     return false;
        // };
    }


