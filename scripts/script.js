import { select, container, cart, cardContainer } from "./DOM.js"
import { products } from "./components/Products.js"
import { categories } from "./components/Category.js"
import { sortByCategory } from "./components/ProductsBy.js"
import { showCard } from "./components/Card.js"
import { createArrayOfId } from "./components/createArrayOfId"
import { getProductId } from "./components/getProductId"


document.addEventListener('DOMContentLoaded', async () => {
    await products.getProducts();
    categories.setCategories();
});

select.addEventListener('change', () => {
    if (select.value === 'all') {
        products.getProducts()
    } else {
        sortByCategory.getProductsByCategory()
    }
});

container.addEventListener('click', (e) => {
    let itemBox = e.target.closest('.item');
    const productId = itemBox.getAttribute('data-item-id');

    showCard.showDetailedProduct(productId);
});

window.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('main', 'header') || target.classList.contains('header') || e.key === 'Escape') {
        showCard.closeCard();
    }
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        showCard.closeCard();
    }
});



cardContainer.addEventListener('click', e => {
    const productId = getProductId(e, '.item-card', '.plus-icon', 'data-item-id');
    resultIdArr = createArrayOfId(productId)
    localStorage.setItem('id', JSON.stringify(resultIdArr));

})



cart.addEventListener('click', () => {
    let id = JSON.parse(localStorage.getItem('id'));
    showCard.showCartList(id);
});


