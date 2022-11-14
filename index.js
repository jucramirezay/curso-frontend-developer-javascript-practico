const menuEmail = document.querySelector('.navbar-email'); // Elemento en HTML al cual se le da click
const desktopMenu = document.querySelector('.desktop-menu'); // Elemento que aparece o desaparece

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarroIcon.addEventListener('click', toggleCarroAside); 

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 220,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 300,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


// Cada vez que se de click quita o pone la clase inactive dependiendo si la tiene o no 
function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive'); // Valida si el aside esta cerrado

    if(!isAsideClose) { // aside abierto
        aside.classList.toggle('inactive'); // se inactiva el aside
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive'); // Valida si el aside esta cerrado

    if(!isAsideClose) { // aside abierto
        aside.classList.toggle('inactive');  // se inactiva el aside
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarroAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive'); // Valida si el menú esta cerrado
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive'); // Valida si el desktop menú esta cerrado

    // Cada vez que se de click al menú del carrito, se cierra el menú mobile
    if(!isMobileMenuClose) { // Mobile menu abierto
        mobileMenu.classList.toggle('inactive'); // se inactiva el mobileMenu
    }
    if(!isDesktopMenuClose) { // desktop menu abierto
        desktopMenu.classList.toggle('inactive'); // se inactiva el desktopMenu
    }

     aside.classList.toggle('inactive');
}

// ? Para cada uno de los productos que se tienen en la lista de productos se esta creando su respectiva etiqueta HTML
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div'); // Crea una etiqueta HTML
        productCard.classList.add('product-card'); // Añade la clase product card al div creado anteriormente
        
        const productImg = document.createElement('img'); // Crea una etiqueta de HTML
        productImg.setAttribute('src', product.image); // Añade la imagen que contiene el objeto como atributo de la etiqueta img de HTML
        
        const productInfo = document.createElement('div'); // Crea una etiqueta HTML
        productInfo.classList.add('product-info'); // Añade la clase product card al div creado anteriormente
    
        const productInfoDiv = document.createElement('div'); // Crea una etiqueta HTML
        const productInfoPrice = document.createElement('p'); // Crea una etiqueta HTML
        productInfoPrice.innerText = '$' + product.price; // Agrega un texto a la etiqueta p HTML
        const productInfoName = document.createElement('p'); // Crea una etiqueta HTML
        productInfoName.innerText = product.name; // Agrega un texto a la etiqueta p HTML
    
        const productInfoFigure = document.createElement('figure'); // Crea una etiqueta HTML
        const productImgCard = document.createElement('img'); // Crea una etiqueta HTML
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Ingreso de las etiquetas dentro de sus padres
        productInfoFigure.appendChild(productImgCard);
    
        // Ingreso de las etiquetas dentro de sus padres
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        // Ingreso de las etiquetas dentro de sus padres
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Ingreso de las etiquetas dentro de sus padres
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);