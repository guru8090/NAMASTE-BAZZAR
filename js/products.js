
async function fetchDataa(category, discount) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=1`);
    const data = await res.json();
    console.log(data);
    DisplayData(data.products[0], discount); // ✅ FIXED HERE
}

fetchDataa('laptops', "Get And Extra 50% of");
fetchDataa('beauty', "Get Up to 20% of")
fetchDataa('womens-watches', "Get And Extra 40% of")
fetchDataa('womens-shoes', "Get And Extra 30% of")

function DisplayData(data, discount) {
    const productDiv = document.createElement('div');
    productDiv.classList.add("product")
    productDiv.classList.add('flex-item', 'p-2', 'text-center', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-space-around');

    const product_img = document.createElement('img');
    product_img.classList.add("py-4");
    product_img.src = data.thumbnail;
    product_img.alt = data.title;
    product_img.style.paddingTop = "20px";
    product_img.style.paddingBottom = "20px";

    const discount_link = document.createElement("div")
    discount_link.classList.add('d-flex', 'flex-column', 'align-items-center', 'gap-lg-2', 'pt-5',)

    const discount_product = document.createElement('h2')
    discount_product.textContent = discount
    discount_product.style.color = "rgb(78,78,78)"

    const product_title = document.createElement('h2')
    const product_link = document.createElement('a')
    product_link.href = (`../pages/product.html?pid=${data.id}&pcategory=${data.category}`)
    product_link.target = "_blank"
    product_title.textContent = "Shop Now"
    product_title.style.color = "green"
    product_link.style.textDecoration = "none"
    product_link.style.height = "50px"

    product_link.addEventListener('mouseover', function () {
        product_link.style.textDecoration = "underline"
    })

    product_link.addEventListener('mouseout', function () {
        product_title.style.color = "rgb(78,78,78)"
        product_link.style.textDecoration = "none"
    })

    product_link.appendChild(product_title)
    discount_link.append(discount_product, product_link)

    productDiv.append(product_img, discount_link);
    document.getElementById('produts_html').appendChild(productDiv)
}

async function fetchData(catagory, id) {
    const res = await fetch(`https://dummyjson.com/products/category/${catagory}?limit=4`)
    const data = await res.json()
    displayDataa(data.products, id);
}
const displayDataa = (data, id) => {
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
        product_link.href = (`./pages/product.html?pid=${v.id}&pcategory=${v.category}`)
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
        addcartButton.classList.add("btn", "btn-success")
        addcartButton.innerHTML = '<div class="d-flex justify-content-ccenter align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg><span style="font-size:14px;margin-left:5px;">Add To Cart</span></div>'
        addcartButton.style.fontSize = "13px"
        addcartButton.addEventListener('click', function (event) {
            event.preventDefault();

            addcartButton.style.backgroundColor = 'rgb(74,74,74)';
        });
        addcartButton.addEventListener('click', () => {
            console.log("no it move to")
            addtoCart(v);
        })
        product_link.appendChild(product_title)

        productDiv.append(product_img, product_link, product_price, addcartButton)
        document.getElementById(id).append(productDiv)
    })
}
fetchData('beauty', 'topBeauty')
fetchData('smartphones', 'topSmartphone')
fetchData('fragrances', 'topfragrances')
fetchData('furniture', 'topfurniture')
fetchData('groceries', 'topgroceries')
fetchData('home-decoration', 'tophome-decoration')
fetchData('kitchen-accessories', 'topkitchen-accessories')
fetchData('laptops', 'toplaptops')
fetchData('mens-shirts', 'topmens-shirts')
fetchData('mens-shoes', 'topmens-shoes')
fetchData('mens-watches', 'topmens-watches')
fetchData('mobile-accessorie', 'topmobile-accessorie')
fetchData('motorcycle', 'topmotorcycle')
fetchData('skin-care', 'topskin-care')
fetchData('sports-accessories', 'topsports-accessories')
fetchData('sunglasses', 'topsunglasses')
fetchData('tablets', 'toptablets')
fetchData('tops', 'toptops')
fetchData('vehicle', 'topvehicle')
fetchData('womens-bags', 'topwomens-bags')
fetchData('womens-dresses', 'topwomens-dresses')
fetchData('womens-jewellery', 'topwomens-jewellery')
fetchData('womens-watches', 'topwomens-watches')
fetchData('womens-shoes', 'topwomens-shoes')





