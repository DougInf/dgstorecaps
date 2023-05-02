const header = document.querySelector('body');
const colors = ['rgb(255, 170, 13)','rgb(19, 135, 197)','rgb(221, 66, 27)'];
let i = 10;

setInterval(() => {
  header.style.backgroundColor = colors[i];
  i = (i + 170) % colors.length;
}, 2650);
