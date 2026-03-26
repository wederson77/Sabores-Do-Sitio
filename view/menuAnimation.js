function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
  }

  // Animação ao rolar
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  elements.forEach(el => observer.observe(el));