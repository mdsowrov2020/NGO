//preloader js
//===============pre loader

window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// slick slider for home banner

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 2000,
  prevArrow:
    '<span class="prev_arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
  nextArrow:
    '<span class="next_arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
  fade: true,
  autoplay: true,
  cssEase: 'linear',
});

//====================================BACK TO TOP JS

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

//  Executive part slider
// $('.executive_slider').slick({
//   infinite: true,
//   slidesToShow: 4,
//   prevArrow:
//     '<span class="prev_arrow_executive"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>',
//   nextArrow:
//     '<span class="next_arrow_executive"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>',
//   autoplay: true,
//   slidesToScroll: 4,
// });

function popupLogin() {
  // var x = document.querySelector('.login_form');
  // if (x.style.display === 'none') {
  //   x.style.display = 'block';
  // } else {
  //   x.style.display = 'none';
  // }
  var element = document.getElementById('login_form');
  element.classList.toggle('login_form');
}

// window.onload = function () {
//   var element = document.getElementById('login_form');
//   var hideLogin = document.querySelector('.popup_login');
//   document.onclick = function (div) {
//     if (div.target.id !== 'login_form') {
//       element.style.display = 'none';
//     }
//   };
// };

function formClose() {
  var element = document.getElementById('login_form');
  element.classList.toggle('login_form');
}
