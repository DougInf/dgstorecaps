const header = document.querySelector('body');
const colors = ['rgb(255, 170, 13)','rgb(19, 135, 197)','rgb(255, 205, 7)'];
let i = 3;

setInterval(() => {
  header.style.backgroundColor = colors[i];
  i = (i + 170) % colors.length;
}, 2550);