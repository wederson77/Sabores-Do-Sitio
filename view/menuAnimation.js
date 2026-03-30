// view/menuAnimation.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  function toggleMenu() {
    menu.classList.toggle("active");
  }

  // Evento de clique
  menuToggle.addEventListener("click", toggleMenu);

  // =============================
  // Animação ao rolar (mantida)
  // =============================

  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  elements.forEach(el => observer.observe(el));
});