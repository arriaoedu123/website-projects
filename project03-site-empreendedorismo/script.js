/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 21/08/2021
# Version: 1.0
*/

window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

function closeMenu() {
  menu.classList.remove('active');
}

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  closeMenu();
});