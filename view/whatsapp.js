document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".js-whatsapp");

  function enviarWhats(produto = '') {
    let numero = "7799106666"; // Substitua pelo número de telefone desejado
    
    let mensagem = produto 
      ? `Olá! Gostaria de pedir ${produto}.`
      : "Olá! Gostaria de fazer um pedido.";

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhats();
    });
  });
});