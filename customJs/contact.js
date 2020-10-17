$('.key_personnel_slider').slick({
  infinite: true,
  slidesToShow: 1,
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
