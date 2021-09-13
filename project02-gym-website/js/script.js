/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 21/08/2021
# Upload date: 11/09/2021
# Version: 1.2
*/

const header = document.querySelector("header")
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const scrollLine = document.querySelector(".scroll-line-div")
const cardSection = document.querySelector(".section-one")

if (window.scrollY > 0) {
  header.classList.toggle('sticky')
  scrollLine.classList.toggle('animate')
} else
if (window.scrollY >= 306) { cardSection.classList.add('anim-card') }

window.addEventListener("scroll", function(){
  header.classList.toggle('sticky', window.scrollY > 0);
  scrollLine.classList.toggle('animate', window.scrollY > 0);
  cardSection.classList.add('anim-card', window.scrollY >= 306)
});

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

$(document).ready(function() { 
  $('.section-tree').slick({
  dots: true,
  infinite: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
})