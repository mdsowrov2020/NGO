//preloader js
// windo.on('load', function () {
//   $('.pre-main').delay(1000).fadeOut(1000);
//   $('.preloader').delay(1000).fadeOut('slow');
// });
//preloader js

//====================================count down  JS
//SETUP COUNTDOWN FUNCTION
function countdown(endDate) {
  //SET VARIABLES
  let days, hours, minutes, secondes;

  //DATE
  endDate = new Date(endDate).getTime();

  //RUN CALCTIME FUNCTION EACH SECOND
  setInterval(calcTime, 1000);

  //SETUP CALCTIME FUNCTION
  function calcTime() {
    //TODAY [ CURRENT DATE ]
    let today = new Date().getTime();

    //TIME REMAINING BETWEEN THE CURRENT DATE AND END DATE.
    let timeRemaining = parseInt((endDate - today) / 1000);

    if (timeRemaining >= 0) {
      //GET DAYS [ DAY = 86400 SECONDS ]
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      //GET HOURS [ HOUR = 3600 SECONDS ]
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      //GET MINUTES [ MIN = 60 SECONDS  ]
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      //GET SECONDS
      secondes = parseInt(timeRemaining);

      //SELECT ELEMENTS
      const countDays = document.querySelector('.countdown-days');
      const countHours = document.querySelector('.countdown-hours');
      const countMinutes = document.querySelector('.countdown-minutes');
      const countSeconds = document.querySelector('.countdown-seconds');

      //SELECT ELEMENTS Two
      // const countDaysTwo = document.querySelector('.countdown-days-two');
      // const countHoursTwo = document.querySelector('.countdown-hours-two');
      // const countMinutesTwo = document.querySelector('.countdown-minutes-two');
      // const countSecondsTwo = document.querySelector('.countdown-seconds-two');

      //SELECT ELEMENTS Three
      const countDaysThree = document.querySelector('.countdown-days-three');
      const countHoursThree = document.querySelector('.countdown-hours-three');
      const countMinutesThree = document.querySelector(
        '.countdown-minutes-three'
      );
      const countSecondsThree = document.querySelector(
        '.countdown-seconds-three'
      );

      //SELECT ELEMENTS Four
      const countDaysFour = document.querySelector('.countdown-days-four');
      const countHoursFour = document.querySelector('.countdown-hours-four');
      const countMinutesFour = document.querySelector(
        '.countdown-minutes-four'
      );
      const countSecondsFour = document.querySelector(
        '.countdown-seconds-four'
      );

      //SETUP ADDZERO FUNCTION
      function addZero(n) {
        return n < 10 ? '0' + n : n;
      }

      //RESULT
      countDays.textContent = addZero(days);
      countHours.textContent = addZero(hours);
      countMinutes.textContent = addZero(minutes);
      countSeconds.textContent = addZero(secondes);
      //RESULT Two
      // countDaysTwo.textContent = addZero(days);
      // countHoursTwo.textContent = addZero(hours);
      // countMinutesTwo.textContent = addZero(minutes);
      // countSecondsTwo.textContent = addZero(secondes);

      //RESULT Three
      countDaysThree.textContent = addZero(days);
      countHoursThree.textContent = addZero(hours);
      countMinutesThree.textContent = addZero(minutes);
      countSecondsThree.textContent = addZero(secondes);

      //RESULT Four
      countDaysFour.textContent = addZero(days);
      countHoursFour.textContent = addZero(hours);
      countMinutesFour.textContent = addZero(minutes);
      countSecondsFour.textContent = addZero(secondes);
    } else {
      clearInterval(calcTime);
    }
  }
}

//SET THE END DATE
countdown('2020/12/20 00:00:00');

// ========================== Count two
function countdownTwo(endDate) {
  //SET VARIABLES
  let days, hours, minutes, secondes;

  //DATE
  endDate = new Date(endDate).getTime();

  //RUN CALCTIME FUNCTION EACH SECOND
  setInterval(calcTime, 1000);

  //SETUP CALCTIME FUNCTION
  function calcTime() {
    //TODAY [ CURRENT DATE ]
    let today = new Date().getTime();

    //TIME REMAINING BETWEEN THE CURRENT DATE AND END DATE.
    let timeRemaining = parseInt((endDate - today) / 1000);

    if (timeRemaining >= 0) {
      //GET DAYS [ DAY = 86400 SECONDS ]
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      //GET HOURS [ HOUR = 3600 SECONDS ]
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      //GET MINUTES [ MIN = 60 SECONDS  ]
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      //GET SECONDS
      secondes = parseInt(timeRemaining);

      //SELECT ELEMENTS Two
      const countDaysTwo = document.querySelector('.countdown-days-two');
      const countHoursTwo = document.querySelector('.countdown-hours-two');
      const countMinutesTwo = document.querySelector('.countdown-minutes-two');
      const countSecondsTwo = document.querySelector('.countdown-seconds-two');

      //SETUP ADDZERO FUNCTION
      function addZero(n) {
        return n < 10 ? '0' + n : n;
      }

      //RESULT Two
      countDaysTwo.textContent = addZero(days);
      countHoursTwo.textContent = addZero(hours);
      countMinutesTwo.textContent = addZero(minutes);
      countSecondsTwo.textContent = addZero(secondes);
    } else {
      clearInterval(calcTime);
    }
  }
}

//SET THE END DATE
countdownTwo('2021/08/10 00:00:00');

// Latest Slider
$('.latest_slider').slick({
  infinite: true,
  slidesToShow: 4,
  prevArrow:
    '<span class="prev_arrow_latest"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="next_arrow_latest"><i class="fas fa-arrow-right"></i></span>',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.counter').counterUp({
  delay: 50,
  time: 2000,
});

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
