// Este é apenas um esqueleto básico para o jogo Pong. Você precisará expandir este código para criar um jogo totalmente funcional.
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 400;

// Desenhar a bola
ctx.fillStyle = 'white';
ctx.fillRect(canvas.width / 2, canvas.height / 2, 10, 10);

// Adicionar mais lógica de jogo aqui
