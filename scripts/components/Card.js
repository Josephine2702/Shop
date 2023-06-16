import { container, cardContainer, wrapper, select } from "../DOM.js"
import { createUI } from "./UI.js"
import { BASE_URL } from "../api.js"
import { getJSON } from "./helper.js"


const openCard = function () {
    container.classList.add('disabled');
    wrapper.classList.add('fade');
    cardContainer.classList.remove('hide');
    select.disabled = true;
}

const openCart = function () {
    container.classList.add('disabled');
    wrapper.classList.add('fade');
    select.disabled = true;
}

class Card {

    closeCard() {
        container.classList.remove('disabled');
        cardContainer.classList.add('hide');
        wrapper.classList.remove('fade');
        select.disabled = false;
        cardContainer.innerHTML = '';
    };

    async showDetailedProduct(id) {
        openCard();
        try {
            const data = await getJSON(`${BASE_URL}/${id}`);
            createUI.createCardUI(data);

        } catch (err) {
            console.error(err);
        }

    }

    async showCartList(idArr) {
        openCart();
        try {
            idArr.forEach(async id => {
                const data = await getJSON(`${BASE_URL}/${id}`);
                createUI.createCartList(data);
            });

        } catch (err) {
            console.error(err);
        }
    }

}

export let showCard = new Card();