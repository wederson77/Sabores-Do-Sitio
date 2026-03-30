export function createProductCard(template, product) {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".main-title").textContent = product.title;
  clone.querySelector(".preco-atacado").textContent = product.price;
  clone.querySelector(".description").textContent = product.description;
  clone.querySelector(".card-header-image").src = product.image;

  const benefitsList = clone.querySelector(".benefits-list");
  benefitsList.innerHTML = "";

  product.benefits.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    benefitsList.appendChild(li);
  });

  return clone;
}