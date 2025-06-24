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
