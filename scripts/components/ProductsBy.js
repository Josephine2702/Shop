import { container,loader, select } from "../DOM.js";
import { BASE_URL } from "../api.js";
import { createUI } from "./UI.js";

class ProductsByCategory {
    async getProductsByCategory(){
        const value = select.value;
        loader.classList.remove('hide');
        container.classList.add('fade');
        try {
            const response = await fetch(`${BASE_URL}/category/${value}`);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            loader.classList.add('hide');
            container.classList.remove('fade');
            container.innerHTML = '';
            createUI.createUI(data)
        
        } catch(error){
            console.error(error);
        }
    }
}

export let sortByCategory = new ProductsByCategory();