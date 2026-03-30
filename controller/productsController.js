import { products } from "../model/products.js";
import { createProductCard } from "../view/productView.js";

export function renderProducts() {
  const container = document.getElementById("products-container");
  const template = document.getElementById("product-card-template");

  container.innerHTML = "";

  products.forEach(product => {
    const card = createProductCard(template, product);
    container.appendChild(card);
  });
}