import { container, cardContainer, wrapper, select, item, mainContainer} from "../DOM.js"
import { createUI } from "./UI.js"
import { BASE_URL } from "../api.js"
import { getJSON } from "./helper.js"

const openCard = function () {
    container.classList.add('disabled');
    wrapper.classList.add('fade');
    cardContainer.classList.remove('hide');
    select.disabled = true;
}

const setCardPosition = function(){
const itemRect = item.getBoundingClientRect();
const itemTop = itemRect.top;
const itemLeft = itemRect.left;

cardContainer.style.position = 'fixed';
cardContainer.style.top = itemTop + 'px';
cardContainer.style.left = itemLeft + wrapper.clientWidth / 3 + 'px';
}
    


export const showDetailedProduct = async function(id) {
    setCardPosition();
    openCard();

    try{
    const data = await getJSON(`${BASE_URL}/${id}`);
    createUI.createCardUI(data);
    
   } catch (err){
    console.error(err);
   }
}

export const closeCard = function () {
    container.classList.remove('disabled');
    cardContainer.classList.add('hide');
    wrapper.classList.remove('fade');
    select.disabled = false;
}

