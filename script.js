// -------- SLIDESHOW DO BACKGROUND --------
const slideshow = document.querySelector('.background-slideshow');

const imagens = [
  'imgs/img1bck.jpeg',
  'imgs/img2bck.jpeg',
  'imgs/img3bck.jpeg'
];

let index = 0;

function trocarImagem() {
  slideshow.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}

trocarImagem(); // exibir a primeira
setInterval(trocarImagem, 5000); // troca a cada 5 segundos

// -------- GALERIA COM SCROLL E LOOP INFINITO --------
const galeria = document.getElementById('galeria-container');

// Duplicar imagens para simular loop infinito
galeria.innerHTML += galeria.innerHTML;

function scrollGaleria(direcao) {
  const larguraImagem = window.innerWidth <= 480 ? 220 : (window.innerWidth <= 768 ? 270 : 320); // Ajuste responsivo
  galeria.scrollBy({
    left: direcao * larguraImagem,
    behavior: 'smooth'
  });
}

// Quando chegar no final ou início, reseta posição para parecer infinito

