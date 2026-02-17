fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const topProducts = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3)
        // console.log(topProducts);
        const container = document.getElementById("trendingCard")
        topProducts.forEach(product => {
        const card = document.createElement("div")
        card.className = "card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full sm:w-72 md:w-80 lg:w-72"
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
                <h3 class="card-title text-lg line-clamp-2">${product.title}</h3>
                <div class="flex items-center justify-between mt-4">
                    <span class="text-2xl font-bold text-gray-900">$${product.price.toFixed(2)}</span>
                </div>
                <div class="card-actions gap-2 mt-4">
                    <button class="btn btn-outline btn-sm flex-1"><span class="material-symbols-outlined">
visibility
</span>Details</button>
                    <button class="btn btn-primary btn-sm flex-1"><span class="material-symbols-outlined">
shopping_cart
</span>Add</button>
                </div>
            </div>
        `
        container.appendChild(card)
    })
    })