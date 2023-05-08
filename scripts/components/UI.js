import { container } from "../DOM.js"

class UI {
    
createUI(data) {
    data.forEach(element => {
        container.innerHTML +=
    `
    <div class="item">
    <div class="item-title"><h4>${element.title}</h4></div>
    <div class="item-image"><img src="${element.image}" alt="${element.title}"></div>
    <div class="item-price"><p>${element.price}$</p></div>
    
    </div>
    `
    })
    
}

}

export let createUI = new UI();
