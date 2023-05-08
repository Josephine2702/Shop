import { products } from "./components/Products.js";
import { createUI } from "./components/UI.js";
import { select } from "./DOM.js";
import { categories } from "./components/Category.js";
import { sortByCategory } from "./components/ProductsBy.js";

document.addEventListener('DOMContentLoaded', async () => {
    let productsData = await products.getProducts();
    createUI.createUI(productsData);
    categories.setCategories();
    
})

select.addEventListener('change', () => {
    if(select.value === 'all'){
        categories.setCategory()
    }else{
        sortByCategory.getProductsByCategory()
    }
});


