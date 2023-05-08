import { BASE_URL } from "../api.js";
import { select } from "../DOM.js";

class Category{
async setCategories(){
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
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

