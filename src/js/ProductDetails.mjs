import { getProductById } from "./ProductData.mjs";

export default class ProductDetails {
  constructor(parentId, productId) {
    this.parentElement = document.getElementById(parentId);
    this.productId = productId;
  }

  async init() {
    const product = await getProductById(this.productId);

    if (product) {
      this.renderProduct(product);
    } else {
      this.parentElement.innerHTML = "<p>Product not found.</p>";
    }
  }

  renderProduct(product) {
    this.parentElement.innerHTML = `
      <h3>${product.brand}</h3>
      <h2 class="divider">${product.name}</h2>
      <img class="divider" src="${product.image}" alt="${product.name}" />
      <p class="product-card__price">$${product.price.toFixed(2)}</p>
      <p class="product__color">${product.color}</p>
      <p class="product__description">${product.description}</p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${product.id}">Add to Cart</button>
      </div>
    `;

    document
      .getElementById("addToCart")
      .addEventListener("click", () => this.addToCart(product.id));
  }

  addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("so-cart")) || [];
    cart.push({ id: productId, quantity: 1 });
    localStorage.setItem("so-cart", JSON.stringify(cart));
    alert("Added to cart!");
  }
}
