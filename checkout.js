// checkout.js
document.addEventListener('DOMContentLoaded', () => {
    const checkoutContainer = document.querySelector('#checkout-items');
    const totalAmount = document.querySelector('#total-amount');

    function renderCheckout() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
        checkoutContainer.innerHTML = '';
        cart.forEach(item => {
            const checkoutItem = document.createElement('li');
            checkoutItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            checkoutContainer.appendChild(checkoutItem);
            total += item.price;
        });
        totalAmount.innerText = total.toFixed(2);
    }

    document.querySelector('#billing-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    renderCheckout();
});
