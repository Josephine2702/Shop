
import { container, cardContainer } from "../DOM.js"

class UI {
    
    createUI(data) {
        data.forEach(element => {
            container.innerHTML +=
        `
        <div data-item-id="${element.id}" class="item">
        <div class="item-title"><h4>${element.title}</h4></div>
        <div class="item-image"><img src="${element.image}" alt="${element.title}"></div>
        <div class="item-bottom"><div class="item-price">${element.price}$</div> 
        <img class="item-add"src="./assets/icon/plus.svg" alt=""> 
        </div>
        `
        });
    }

   createCardUI(data){
         cardContainer.innerHTML =
    `
    <div class="item-title"><h4>${data.title}</h4></div>
    <div class="item-image"><img src="${data.image}" alt="${data.title}"></div>
    <div class="item-price"><p>${data.description}$</p></div>
    <div class="item-price"><p>${data.price}$</p></div>
    `
}
}

export let createUI = new UI();
