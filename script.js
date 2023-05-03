const container = document.querySelector('.container'),
    select = document.querySelector('.choose-category'),
    loader = document.querySelector('.loader');

const apiProductURL = 'https://fakestoreapi.com/products/';
const apiCategoryURL = 'https://fakestoreapi.com/products/categories';




const createUI = function(data) {
    data.forEach(element => {
        container.innerHTML +=
    `
    <div class="item">
    <div class="item-title"><h4>${element.title}</h4></div>
    <div class="item-image"><img src="${element.image}" alt="${element.title}"></div>
    <div class="item-price"><p>${element.price}$</p></div>
    </div>
    `
    })
    
}


const requestProducts = async function(url){
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        container.innerHTML = '';
        createUI(data);
    } catch(error){
        console.error(error);
    }
}

const requestCategories = async function(url){
    try {
        const response = await fetch(url);

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


const getCategory = async function(){
    const value = select.value;

    loader.classList.remove('hide');
    container.classList.add('fade');

    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${value}`);

        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        loader.classList.add('hide');
        container.classList.remove('fade');
        container.innerHTML = '';
        createUI(data);
    
    } catch(error){
        console.error(error);
    }
}




document.addEventListener('DOMContentLoaded', () => {
    requestCategories(apiCategoryURL);
    requestProducts(apiProductURL);
})


select.addEventListener('change', () => {

    if(select.value === 'all'){
        requestProducts(apiProductURL);
    } else {
        getCategory();
    }

});


