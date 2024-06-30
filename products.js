// products.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.0 },
        { id: 2, name: 'Product 2', price: 15.0 },
        { id: 3, name: 'Product 3', price: 20.0 },
        { id: 4, name: 'Product 4', price: 25.0 },
        { id: 5, name: 'Product 5', price: 30.0 },
        { id: 6, name: 'Product 6', price: 35.0 }
    ];

    const productContainer = document.querySelector('.product-list');

    function renderProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productDiv);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }

    window.addToCart = addToCart;

    renderProducts();
});
