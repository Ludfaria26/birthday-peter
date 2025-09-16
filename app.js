const flames = document.querySelectorAll(".flame");
const toggleBtn = document.getElementById("toggleBtn");

// Função para apagar as velas
function blowOutCandles() {
  flames.forEach(flame => {
    flame.style.animation = "none"; // para a animação
    flame.style.opacity = "0";      // some
  });
  toggleBtn.disabled = true; // botão fica inativo depois
  toggleBtn.innerText = "Velas Apagadas";

  // Confetti effect
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
}

// Evento no botão
toggleBtn.addEventListener("click", blowOutCandles);
