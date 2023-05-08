import { BASE_URL } from "../api.js";
import { container } from "../DOM.js";

class Products {
    async getProducts(){
        try {
            const response = await fetch(BASE_URL);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            container.innerHTML = '';
            return data;
        } catch(error){
            console.error(error);
        }
    }
}
export let products = new Products();

