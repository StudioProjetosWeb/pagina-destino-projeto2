document.addEventListener('DOMContentLoaded', function () {
  const mensagemElement = document.getElementById('mensagem');
  const contadorElement = document.getElementById('contador');
  const botaoAcessar = document.getElementById('botaoAcessar');
  const targetTime = localStorage.getItem('targetTime') || (new Date().getTime() + 20000);
  localStorage.setItem('targetTime', targetTime);

  function updateCounter() {
    const currentTime = new Date().getTime();
    const timeLeft = targetTime - currentTime;

    if (timeLeft > 0) {
      const seconds = Math.floor(timeLeft / 1000);
      contadorElement.textContent = '00:' + (seconds < 10 ? '0' : '') + seconds;
    } else {
      clearInterval(interval);
      mensagemElement.style.display = 'none';
      contadorElement.style.display = 'none';
      botaoAcessar.style.display = 'inline-block';
    }
  }

  let interval = setInterval(updateCounter, 1000);
  updateCounter();

  botaoAcessar.addEventListener('click', function() {
    window.location.href = 'game.html'; // Caminho para o jogo
    localStorage.setItem('visited', 'true');
  });

  if (localStorage.getItem('visited')) {
    window.location.href = 'game.html'; // Caminho para o jogo
  }
});
