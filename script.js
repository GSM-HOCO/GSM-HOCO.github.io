let allProducts = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(allProducts);
  });

function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p><strong>${p.price} MDL</strong></p>
        <a href="https://t.me/GSM_HOCO" target="_blank">Заказать</a>
      </div>
    `;
  });
}

function filterCategory(category) {
  if (category === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter(p => p.category === category);
    displayProducts(filtered);
  }
}
