import { products } from "./components/Products.js"
import { select, container } from "./DOM.js"
import { categories } from "./components/Category.js"
import { sortByCategory } from "./components/ProductsBy.js"
import { showDetailedProduct } from "./components/Card.js"

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
        itemBox.querySelectorAll('.item > :not(.item-add)');
        const productId = itemBox.getAttribute('data-item-id');
        showDetailedProduct(productId);
    }
});




