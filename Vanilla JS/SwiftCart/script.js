fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const topProducts = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3)
        console.log(topProducts);
        const container = document.getElementById("trendingCard")
        topProducts.forEach(product => {
            const card = document.createElement("div")
            card.innerHTML = `
                <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
   <img src="${product.image}" alt="${product.title}" class="w-48 h-48 "/>
  </figure>
  <div class="card-body h-64">
  <div class="flex justify-between items-center">
  <button>${product.category}</button>
<h3 class="text-sm"><span class="material-symbols-outlined text-yellow-500">star_rate</span>${product.rating.rate}
(${product.rating.count})</h3>
</div>
  
    <h2 class="card-title">${product.title}</h2>
    <div class="product-price">$${product.price}</div>
    <div class="card-actions justify-end">
    <div class="bg-white p-6">
  <button class="btn btn-neutral btn-outline"><span class="material-symbols-outlined">
visibility
</span>Outline</button>
      <button class="btn btn-primary ml-5"><span class="material-symbols-outlined">
shopping_cart
</span>Buy Now</button>
</div>

    </div>
  </div>
</div>
                `
            container.appendChild(card)
        })
    })