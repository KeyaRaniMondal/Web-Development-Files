// Fetch all products
let allProducts = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        allProducts = data;
        displayProducts(data);
    })

// Fetch categories and create filter buttons
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const categoryContainer = document.getElementById("ProductCategory")
        
        //"All" button
        const allBtn = document.createElement("button")
        allBtn.className = "btn btn-primary rounded-full"
        allBtn.innerHTML = "All"
        allBtn.onclick = () => displayProducts(allProducts)
        categoryContainer.appendChild(allBtn)
        
        //category buttons
        data.forEach(category => {
            const btn = document.createElement("button")
            btn.className = "btn btn-neutral btn-outline rounded-full"
            btn.innerHTML = category
            btn.onclick = () => {
                fetch(`https://fakestoreapi.com/products/category/${category}`)
                    .then(res => res.json())
                    .then(data => displayProducts(data))
            }
            categoryContainer.appendChild(btn)
        })
    })

// Display products function
function displayProducts(products) {
    let productsContainer = document.getElementById("ProductsDisplay")
    if (!productsContainer) {
        productsContainer = document.createElement("div")
        productsContainer.id = "ProductsDisplay"
        productsContainer.className = "flex flex-wrap justify-center gap-6 mt-10 px-8 pb-20"
        document.querySelector(".text-3xl.font-bold.text-center").parentElement.appendChild(productsContainer)
    }
    
    productsContainer.innerHTML = ""
    
    products.forEach(product => {
        const card = document.createElement("div")
        card.className = "card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-72"
        card.innerHTML = `
            <figure class="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="${product.image}" alt="${product.title}" class="h-full w-full object-contain p-4"/>
            </figure>
            <div class="card-body p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="badge badge-warning text-xs font-semibold">${product.category}</span>
                    <div class="flex items-center gap-1">
                        <span class="text-yellow-400">★</span>
                        <span class="font-semibold text-sm">${product.rating.rate} (${product.rating.count})</span>
                    </div>
                </div>
                <h3 class="card-title text-lg font-bold line-clamp-2">${product.title}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-2xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                </div>
                <div class="card-actions gap-2 mt-4">
                    <button class="btn btn-ghost btn-sm flex-1" onclick="showProductDetails(${product.id})">Details</button>
                    <button class="btn btn-primary btn-sm flex-1">Add</button>
                </div>
            </div>
        `
        productsContainer.appendChild(card)
    })
}


// single product details

function showProductDetails(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            const modal = document.createElement('dialog')
            modal.className = 'modal'
            modal.innerHTML = `
                <div class="modal-box">
                    <h3 class="text-lg font-bold">${data.title}</h3>
                    <div class="py-4">
                        <figure class="mb-4 flex justify-center">
                            <img src="${data.image}" alt="${data.title}" class="h-48 object-contain"/>
                        </figure>
                        <p class="text-gray-600 mb-2">${data.description}</p>
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-yellow-400">★</span>
                            <span>${data.rating.rate} (${data.rating.count} reviews)</span>
                        </div>
                        <p class="text-2xl font-bold text-gray-900 mb-2">$${data.price.toFixed(2)}</p>
                        <p class="text-sm text-gray-500">Category: ${data.category}</p>
                    </div>
                    <div class="modal-action">
                        <form method="dialog">
                            <button class="btn">Close</button>
                        </form>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            `
            document.body.appendChild(modal)
            modal.showModal()
        })
}