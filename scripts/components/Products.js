import { BASE_URL } from "../api.js";
import { container } from "../DOM.js";
import { getJSON } from "./helper.js";
import { createUI } from "./UI.js"

class Products {
    async getProducts(){
        try {
            const data = await getJSON(`${BASE_URL}`);
            container.innerHTML = '';
            return createUI.createUI(data);
        } catch(error){
            console.error(error);
        }
    }
}
export let products = new Products();

