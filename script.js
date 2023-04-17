// Adicione o script abaixo para carregar os ícones da FontAwesome
// Certifique-se de adicionar o link para o arquivo CSS da FontAwesome no seu HTML
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

// Instancie os ícones
const icons = document.querySelectorAll('i');

// Adicione as classes para cada ícone
icons[0].classList.add('fab', 'fa-github');
icons[1].classList.add('fab', 'fa-whatsapp');
icons[2].classList.add('fab', 'fa-instagram');

const header = document.querySelector('header');
const colors = ['rgb(255, 170, 13)','rgb(19, 135, 197)','rgb(255, 205, 7)'];
let i = 3;

setInterval(() => {
  header.style.backgroundColor = colors[i];
  i = (i + 170) % colors.length;
}, 2550);

window.onscroll = function() {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
};

// Adiciona um evento de clique para cada link
let links = document.querySelectorAll(".link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        // Redireciona para o link correspondente
        window.location.href = links[i].querySelector("a").getAttribute("href");
    });
}
