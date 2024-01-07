'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);
// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
// floating button action->js
var mainDiv = document.getElementById('main-button');

// Remove 'open' class initially
mainDiv.classList.remove('open');

mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-comments');
  this.children.item(0).classList.toggle('fa-comments');
  this.classList.toggle('open');
});


// using jQuery
// var mainDiv =  $('#main-button');
// mainDiv.on('click', function(){
//   $(this).find('i').toggleClass('fa-times');
//   $(this).toggleClass('open');
// });
// Slider

function callConsultation() {
  window.location.href = 'tel:+918383920977';
}
function downloadItinerary() {
 
  var pdfPath = "./assets/Pdfs/4_dham_ite.pdf";

 
  var link = document.createElement('a');


  link.href = pdfPath;


  link.download = "Sarogya_Travels_Itinerary.pdf";


  document.body.appendChild(link);


  link.click();
  document.body.removeChild(link);
}