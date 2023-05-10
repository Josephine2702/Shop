import { products } from "./components/Products.js"
import { select, container } from "./DOM.js"
import { categories } from "./components/Category.js"
import { sortByCategory } from "./components/ProductsBy.js"
import { showDetailedProduct, closeCard } from "./components/Card.js"


document.addEventListener('DOMContentLoaded', async () => {
    await products.getProducts();
    categories.setCategories();
});

select.addEventListener('change', () => {
    if(select.value === 'all'){
    products.getProducts()
    }else{
    sortByCategory.getProductsByCategory()
    }
});

container.addEventListener('click', (e) => {
    let itemBox = e.target.closest('.item');
    if(container){
        const productId = itemBox.getAttribute('data-item-id');
        showDetailedProduct(productId);
    } 
});

window.addEventListener('click', e => {
    const target = e.target;
    if(target.classList.contains('main', 'header') || target.classList.contains('header') || e.key === 'Escape'){
        closeCard();
    }
});

window.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
        closeCard();
    }
});





