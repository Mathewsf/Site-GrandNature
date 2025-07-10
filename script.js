// -------- SLIDESHOW DO BACKGROUND --------
const slideshow = document.querySelector('.background-slideshow');

const imagens = [
  'imgs/img01bck.jpg',
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


const images = [
    "imgs/img1bck.jpeg",
    "imgs/img3bck.jpeg",
    "imgs/galeria5.jpeg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("sliderImage");

  function showImage(index) {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentIndex = index;
    imgElement.src = images[currentIndex];
  }

  function nextImage() {
    showImage(currentIndex + 1);
  }

  function prevImage() {
    showImage(currentIndex - 1);
  }

  // opcional: troca automática a cada 5 segundos
  setInterval(nextImage, 5000);

// Quando chegar no final ou início, reseta posição para parecer infinito




