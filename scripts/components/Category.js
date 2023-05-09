import { BASE_URL } from "../api.js"
import { select } from "../DOM.js"
import { getJSON } from "./helper.js"

class Category{
async setCategories(){
    try {
        const data = await getJSON(`${BASE_URL}/categories`);
        data.forEach(element => {
            select.innerHTML +=
            `
            <option value="${element}">${element}</option>
            `
        });
    } catch(error){
        console.error(error);
    }
}
}

export let categories = new Category;

