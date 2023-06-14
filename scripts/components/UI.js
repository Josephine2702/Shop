
import { container, cardContainer } from "../DOM.js"

class UI {
 
    createUI(data) {
        data.forEach(element => {
            container.innerHTML +=
        `
        <div data-item-id="${element.id}" class="item">
        <h4 class="item-title">${data.title}</h4>
        <div class="item-image"><img src="${element.image}" alt="${element.title}"></div>
        <div class="item-bottom">
        <div class="item-price">${element.price}$</div> 
        </div>
        <i class="ph ph-plus-square plus-icon"></i> 
        `
        });
    }

   createCardUI(data){
         cardContainer.innerHTML =
    `
    <h4 class="item-title">${data.title}</h4>
    <div class="item-image"><img src="${data.image}" alt="${data.title}"></div>
    <p class="item-description">${data.description}</p>
    <div class="item-bottom">
    <div class="item-price">${data.price}$</div> 
    </div>
    <i class="ph ph-plus-square plus-icon"></i>
    `
}

    createBascketList(data){
         container.innerHTML = `
         `
    }
}

export let createUI = new UI();
