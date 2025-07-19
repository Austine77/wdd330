import products from "./ProductData.mjs";

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <a href="product_pages/index.html?product=${product.id}">
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <p>${product.color}</p>
    </a>
  `;

  productList.appendChild(card);
});
