
const params = new URLSearchParams(window.location.search)
console.log(params.get('pid'))
const id = params.get('pid')
const pcategory = params.get('pcategory')
console.log(params.get('pcategory'))
const fetchProductData = () => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err))
}
fetchProductData()
function displayData(data) {
    const leftDiv = document.getElementById('leftDiv')
    const product_image = document.createElement('img')
    product_image.src = data.thumbnail
    product_image.alt = data.title
    leftDiv.appendChild(product_image)

    const rightDiv = document.getElementById('rightDiv')

    const product_title = document.createElement('h2')
    product_title.textContent = data.title
    product_title.classList.add('fs-2')

    const product_description = document.createElement('p')
    product_description.textContent = data.description

    const rating_reviwesSection = document.createElement('div')
    rating_reviwesSection.classList.add('d-flex')

    const product_rating = document.createElement('b')
    product_rating.classList.add('bg-success', 'text-white', 'p-1')
    product_rating.style.borderRadius = "3px"
    product_rating.style.fontSize = "13px"

    const product_icon = document.createElement('i')
    product_icon.classList.add('fa-solid', 'fa-star')
    product_icon.style.color = "white";
    product_icon.style.fontSize = "10px"
    product_rating.append(document.createTextNode(data.rating + ' '), product_icon);

    function getReviews(min = 1000, max = 2000) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const reviews = getReviews();
    console.log(reviews);

    // Rating function
    function getRating(min = 15000, max = 25000) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const rating = getRating();
    console.log(rating);

    const rating_tag = document.createElement('b')
    rating_tag.style.color = "rgb(137,137,136)"
    rating_tag.style.fontSize = "15px"
    rating_tag.textContent = " " + rating + " Ratings & "

    const reviews_tag = document.createElement('b')
    reviews_tag.style.color = "rgb(137,137,136)"
    reviews_tag.style.fontSize = "15px"
    reviews_tag.textContent = reviews + " Reviews"
    rating_reviwesSection.append(product_rating, rating_tag, reviews_tag)
    const br = document.createElement('br')

    const product_price = document.createElement('b')
    product_price.classList.add('fs-3', 'mx-1')
    product_price.textContent = "₹" + data.price

    const space = document.createTextNode(' ');

    const product_actual_price = document.createElement('b');
    product_actual_price.classList.add('fs-5', 'mx-2')
    product_actual_price.style.color = "rgb(135,135,135)"
    product_actual_price.style.textDecoration = "line-through"
    product_actual_price.textContent = "₹" + Math.round((100 * data.price) / (100 - data.discountPercentage));

    const discountPercentage = document.createElement('b')
    discountPercentage.classList.add("fs-5")
    discountPercentage.style.color = "green";
    // discountPercentage.style.fontSize="20px"
    discountPercentage.textContent = data.discountPercentage + "% off";

    const offers_div = document.createElement('div')
    offers_div.classList.add('offers_div')

    const available_offers = document.createElement('p')
    available_offers.classList.add('available_offers')
    available_offers.style.fontWeight = "bold"
    available_offers.style.fontSize = "18px";
    available_offers.textContent = "Available offers"


    const offer1 = document.createElement('p')
    const offer1_bank_offer = document.createElement('b')
    offer1_bank_offer.textContent = "Bank Offer"

    const offer1_description = document.createElement('span')
    offer1_description.textContent = " 5% Unlimited Cashback on Flipkart Axis Bank Credit Card";


    const offer1_term_condition = document.createElement('a')
    offer1_term_condition.href = "#"
    offer1_term_condition.textContent = " T&C"
    offer1_term_condition.style.fontWeight = "bold";
    offer1_term_condition.style.textDecoration = "none"

    offer1.append(offer1_bank_offer, offer1_description, offer1_term_condition)

    const offer2 = document.createElement('p')
    const offer2_bank_offer = document.createElement('b')
    offer2_bank_offer.textContent = "Bank Offer"

    const offer2_description = document.createElement('span')
    offer2_description.textContent = " 10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above";


    const offer2_term_condition = document.createElement('a')
    offer2_term_condition.href = "#"
    // offer2_term_condition.classList.add('t_and_c_button')
    offer2_term_condition.textContent = " T&C"
    offer2_term_condition.style.fontWeight = "bold";
    offer2_term_condition.style.textDecoration = "none"

    offer2.append(offer2_bank_offer, offer2_description, offer2_term_condition)

    const offer3 = document.createElement('p')
    const offer3_bank_offer = document.createElement('b')
    offer3_bank_offer.textContent = "Bank Offer"

    const offer3_description = document.createElement('span')
    offer3_description.textContent = " Bank Offer10% off up to ₹1500 on Flipkart Axis Bank Credit Card EMI Txns, on orders of ₹5,000 and above"


    const offer3_term_condition = document.createElement('a')
    offer3_term_condition.href = "#"
    offer3_term_condition.textContent = " T&C"
    offer3_term_condition.style.fontWeight = "bold";
    offer3_term_condition.style.textDecoration = "none"

    offer3.append(offer3_bank_offer, offer3_description, offer3_term_condition)

    offers_div.append(available_offers, offer1, offer2, offer3)

    rightDiv.append(product_title, product_description, rating_reviwesSection, br, product_price, space, product_actual_price, space, discountPercentage, offers_div)

}

async function fetchSmillarProduct(catagory) {
    const res = await fetch(`https://dummyjson.com/products/category/${catagory}?limit=4`)
    const data = await res.json()
    console.log(data.products);
    displayProduct(data.products);
}
fetchSmillarProduct(pcategory)

function displayProduct(data) {
    data.forEach((v, i) => {
        const productDiv = document.createElement('div')
        productDiv.classList.add("product")
        productDiv.classList.add('flex-item', 'p-2', 'text-center');


        const product_img = document.createElement('img')
        product_img.classList.add("py-4")

        product_img.src = v.thumbnail
        product_img.alt = v.title

        const product_title = document.createElement('h2')
        const product_link = document.createElement('a')
        product_link.href = (`./product.html?pid=${v.id}&pcategory=${v.category}`)
        product_link.target = "_blank"
        product_title.textContent = v.title
        product_title.style.color = "rgb(78,78,78)"
        product_link.style.textDecoration = "none"

        product_link.addEventListener('mouseover', function () {
            product_title.style.color = "blue"
            product_link.style.textDecoration = "underline"
        })

        product_link.addEventListener('mouseout', function () {
            product_title.style.color = "rgb(78,78,78)"
            product_link.style.textDecoration = "none"
        })


        const product_price = document.createElement('b')
        product_price.textContent = "Price :₹" + v.price

        const addcartButton = document.createElement('button')
        addcartButton.classList.add("my-2")
        addcartButton.textContent = "Add To Cart"
        addcartButton.classList.add("btn", "btn-success")
        addcartButton.style.fontSize = "13px"
        addcartButton.addEventListener('click', () => {
            console.log("no it move to")
            addtoCart(v);
        })
        product_link.appendChild(product_title)

        productDiv.append(product_img, product_link, product_price, addcartButton)
        document.getElementById('smillarprducts').append(productDiv)
    })

}

const fetchItems = [
    ['beauty', 'topBeauty'],
    ['smartphones', 'topSmartphone'],
    ['fragrances', 'topfragrances'],
    ['furniture', 'topfurniture'],
    ['groceries', 'topgroceries'],
    ['home-decoration', 'tophome-decoration'],
    ['kitchen-accessories', 'topkitchen-accessories'],
    ['laptops', 'toplaptops'],
    ['mens-shirts', 'topmens-shirts'],
    ['mens-shoes', 'topmens-shoes'],
    ['mens-watches', 'topmens-watches'],
    ['sports-accessories', 'topsports-accessories'],
    ['sunglasses', 'topsunglasses'],
    ['tops', 'toptops'],
    ['womens-bags', 'topwomens-bags'],
    ['womens-dresses', 'topwomens-dresses'],
    ['womens-watches', 'topwomens-watches'],
    ['womens-shoes', 'topwomens-shoes']
];


function fetchRandomThree() {
    const usedIndexes = new Set()
    while (usedIndexes.size < 3) {
        const randomIndex = Math.floor(Math.random() * fetchItems.length);
        if (!usedIndexes.has(randomIndex)) {
            usedIndexes.add(randomIndex);
            const [category, id] = fetchItems[randomIndex];
            fetchRandomData(category, id);
        }
    }
}
fetchRandomThree()

async function fetchRandomData(catagory, id) {
    const res = await fetch(`https://dummyjson.com/products/category/${catagory}?limit=4`)
    const data = await res.json()
    console.log(data.products);
    displayRandomData(data.products, id);
}

function displayRandomData(data, id) {

    const randomDataDiv = document.createElement("div");
    randomDataDiv.classList.add("d-flex", "flex-wrap", "justify-content-between", "gap-2", "mx-1", "randamDataDiv");

    data.forEach((v, i) => {
        const productDiv = document.createElement('div')
        productDiv.classList.add("product", "my-4")
        productDiv.classList.add('flex-item', 'p-2', 'text-center');


        const product_img = document.createElement('img')
        product_img.classList.add("py-4")
        product_img.classList.add("img-fluid"); // Makes image responsive

        product_img.src = v.thumbnail
        product_img.alt = v.title

        const product_title = document.createElement('h2')
        const product_link = document.createElement('a')
        product_link.href = (`./product.html?pid=${v.id}&pcategory=${v.category}`)
        product_link.target = "_blank"
        // above statement is use when we click on the perticular product link that product id value goes to according to the url mention in the script.js . Here in my project the id is goes to this link is(./pages/product.html) link by using the link ./pages/product.html?pid={vid}
        product_title.textContent = v.title
        // product_title.style.fontSize = "16px"
        product_title.style.color = "rgb(78,78,78)"
        product_link.style.textDecoration = "none"

        product_link.addEventListener('mouseover', function () {
            product_title.style.color = "blue"
            product_link.style.textDecoration = "underline"
        })

        product_link.addEventListener('mouseout', function () {
            product_title.style.color = "rgb(78,78,78)"
            product_link.style.textDecoration = "none"
        })


        const product_price = document.createElement('b')
        product_price.textContent = "Price :₹" + v.price

        const addcartButton = document.createElement('button')
        addcartButton.classList.add("my-2")
        addcartButton.textContent = "Add To Cart"
        addcartButton.classList.add("btn", "btn-success")
        addcartButton.style.fontSize = "13px"
        addcartButton.addEventListener('click', () => {
            console.log("no it move to")
            addtoCart(v);
        })
        product_link.appendChild(product_title)

        productDiv.append(product_img, product_link, product_price, addcartButton)
        randomDataDiv.appendChild(productDiv)

    })
    document.getElementById("randomeData").append(randomDataDiv);
}
