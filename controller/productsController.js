import { products } from "../model/products.js";

export function renderProducts() {
  const container = document.getElementById("products-container");
  const template = document.getElementById("product-card-template");

  // 🔥 limpa (evita duplicação quando recarregar)
  container.innerHTML = "";

  products.forEach(product => {
    const clone = template.content.cloneNode(true);

    // 🎯 Preenchendo dados
    clone.querySelector(".main-title").textContent = product.title;
    clone.querySelector(".preco-atacado").textContent = product.price;
    clone.querySelector(".description").textContent = product.description;
    clone.querySelector(".card-header-image").src = product.image;

    // 🔥 Lista de benefícios
    const benefitsList = clone.querySelector(".benefits-list");
    benefitsList.innerHTML = "";

    product.benefits.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      benefitsList.appendChild(li);
    });

    container.appendChild(clone);
  });
}