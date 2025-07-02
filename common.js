// import { addtoCart } from './js/product.js';

const count = document.getElementById('count')
let cartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
// firat it const but i change to let because some reason
count.textContent = cartItems.length;
function addtoCart(item) {
    console.log(item);
    cartItems.push(item);
    count.textContent = cartItems.length
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
function removeCart(cartItemsIndex) {
    cartItems.splice(cartItemsIndex, 1);
    count.textContent = cartItems.length
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload()
    console.log(cartItems.length)

}