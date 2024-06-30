// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('#cart-items');

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartContainer.appendChild(cartItem);
        });
    }

    document.querySelector('#checkout-button').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });

    renderCart();
});

