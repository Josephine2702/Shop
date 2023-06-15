
import { container, cardContainer, mainContainer } from "../DOM.js"

class UI {
 
    createUI(data) {
        data.forEach(element => {
            container.innerHTML +=
        `
        <div data-item-id="${element.id}" class="item">
        <h4 class="item-title">${element.title}</h4>
        <div class="item-image"><img src="${element.image}" alt="${element.title}"></div>
        <div class="item-bottom">
        <div class="item-price">${element.price}$</div> 
        <div class="icon-position"><i class="ph ph-magnifying-glass"></i></div> 
        </div>
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
    <div class="icon-position plus-icon"><i class="ph ph-plus-square"></i></div>
    </div>
    `
}

    createCartList(data){
         mainContainer.innerHTML += `
            <div class="cart-container">
                <ul class="cart-list">
                    <li class="cart-item">
                        <div class="img-container">
                        <img src="${data.image}" alt="${data.title}">
                        </div>
                        <div class="cart-content">
                            <h4 class="cart-item-title">${data.title}</h4>
                            <div class="cart-item-price">${data.price}$</div>
                        </div>
                            <i class="ph ph-trash cart-trash"></i>
                        </li>
                        <div class="cart-total">Total: 80$</div>
                    </ul>
                </div>
         `
    }
}

export let createUI = new UI();
