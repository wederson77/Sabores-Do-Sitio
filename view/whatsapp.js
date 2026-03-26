  function enviarWhats(produto = '') {
    let numero = "77 9999-0167"; // coloque seu número aqui
    let mensagem = produto 
      ? `Olá! Gostaria de pedir ${produto}.`
      : "Olá! Gostaria de fazer um pedido.";

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }