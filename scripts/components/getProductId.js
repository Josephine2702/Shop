export const getProductId = function(e, containerSelector, itemSelector, attribute) {
    let itemBox = e.target.closest(containerSelector);
    let productId;

    if (itemBox) {
        const plusIcon = itemBox.querySelector(itemSelector);

        if (plusIcon.contains(e.target)) {
           return  productId = itemBox.getAttribute(attribute);
        } 
    }
    return productId;
}