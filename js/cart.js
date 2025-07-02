let allCartItems = JSON.parse(localStorage.getItem('cartItems')) ?? [];
function displayAddtoCartProduct() {

    allCartItems.forEach((v, i) => {

        const productDiv = document.createElement('div')
        productDiv.classList.add("product")
        productDiv.classList.add('p-2', 'text-center', 'd-flex', 'justify-content-center', 'flex-row', 'my-2', 'py-5');

        const product_img = document.createElement('img')
        product_img.classList.add("py-4", "cartImage", 'mx-5')

        product_img.src = v.thumbnail
        product_img.alt = v.title

        const product_title = document.createElement('h2')
        product_title.classList.add('cart__product_name')
        product_title.textContent = v.title
        product_title.style.width = "180px"

        let quantityKey = `quantity_${v.id}`
        let quantity = localStorage.getItem(quantityKey) ? parseInt(localStorage.getItem(quantityKey)) : 1;

        let product_price = document.createElement('b')
        product_price.classList.add('mx-1','price')
        product_price.textContent = "₹" + (Math.round(v.price) * quantity)

        localStorage.getItem('productPriceStorePermanently') ?? product_price

        const quantityDiv = document.createElement('div')
        quantityDiv.classList.add('quntityDiv', 'px-3', 'py-2', 'd-flex')
        quantityDiv.style.color = "rgb(229,223,218)"

        const minus = document.createElement('button')
        minus.classList.add('circle-button')
        minus.textContent = "-"

        minus.addEventListener('click', () => {
            decrement()
        })
        function decrement() {
            if (quantity <= 1) {
                QuantityNumber.textContent = "1"
            }
            else {
                quantity = quantity - 1
                localStorage.setItem(quantityKey, quantity);
                QuantityNumber.textContent = quantity
                product_price.textContent = "₹" + (Math.round(v.price) * quantity)
                updateTotalPrice()
            }
        }

        const QuantityNumber = document.createElement('p')
        QuantityNumber.classList.add('quantityNumber')
        QuantityNumber.textContent = quantity

        const plus = document.createElement('button')
        plus.classList.add('circle-button')
        plus.textContent = "+"
        plus.addEventListener('click', () => {
            console.log("+ button click")
            increment()
        })
        function increment() {
            console.log("inside the +()")
            quantity = quantity + 1
            localStorage.setItem(quantityKey, quantity);
            QuantityNumber.textContent = quantity
            product_price.textContent = "₹" + (Math.round(v.price) * quantity);
            updateTotalPrice()
        }


        quantityDiv.append(minus, QuantityNumber, plus)

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('py-2', 'px-3', 'delete-button')
        deleteButton.style.borderRadius = '6px';
        deleteButton.style.backgroundColor = "rgb(74,74,74)"
        deleteButton.style.border = "none"
        deleteButton.innerHTML = '<div class="d-flex justify-content-ccenter align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart-x-fill" viewBox="0 0 16 16" style="color:rgb(229,223,218)"><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708"/></svg><span class="remove-item" style="margin-left:5px;">Remove Item</span></div>'
        deleteButton.style.color = "rgb(229,223,218)"

        deleteButton.addEventListener('click', () => {
            console.log("click on the remove button")
            removeCart(i);
        })

        const except_image = document.createElement('div')
        except_image.classList.add('except_image')
        except_image.classList.add('d-flex', 'flex-sm-row', 'align-items-center', 'gap-4', 'flex-column',)
        except_image.append(product_title, product_price, quantityDiv, deleteButton)

        productDiv.append(product_img, except_image);
        document.getElementById('main').appendChild(productDiv)

    })


}
displayAddtoCartProduct();

let total = 0
allCartItems.forEach((v, i) => {
    let quantityKey = `quantity_${v.id}`
    let quantity = localStorage.getItem(quantityKey) ? parseInt(localStorage.getItem(quantityKey)) : 1;
    total = total + Math.round(v.price) * quantity
    document.getElementById('totalPrice').textContent = "Total Price: ₹" + total
    document.getElementById('totalPrice').classList.add('d-flex', 'justify-content-between', 'align-items-center', 'fs-5')
})

function updateTotalPrice() {
    let total = 0
    allCartItems.forEach((v, i) => {
        let quantityKey = `quantity_${v.id}`
        let quantity = localStorage.getItem(quantityKey) ? parseInt(localStorage.getItem(quantityKey)) : 1
        total = total + Math.round(v.price) * quantity
        document.getElementById('totalPrice').textContent = "Total Price: ₹" + total
    })
}
