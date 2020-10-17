// =====================Gallery part js start ====================
var typed = new Typed('.type', {
  strings: ['Photoes', 'and', 'videos'],
  typeSpeed: 85,
  backSpeed: 85,
  loop: true,
});

$('.photoes_slider').slick({
  infinite: true,
  speed: 500,
  prevArrow:
    '<span class="prev_arrow_photoes"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="next_arrow_photoes"><i class="fas fa-arrow-right"></i></span>',
  dots: false,
  autoplay: true,
  slidesToShow: 4,
  autoplaySpeed: 2000,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
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
  ],
});

$('.play_video').magnificPopup({
  type: 'iframe',
  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>',

    patterns: {
      youtube: {
        index: 'youtube.com/',

        src: 'https://www.youtube.com/embed/%id%?autoplay=1',
      },
      vimeo: {
        index: 'vimeo.com/',
        id: '/',
        src: '//player.vimeo.com/video/%id%?autoplay=1',
      },
      gmaps: {
        index: '//maps.google.',
        src: '%id%&output=embed',
      },
    },

    srcAction: 'iframe_src',
  },
});

// video

$('.image_gallery').magnificPopup({
  type: 'image',
  delegate: 'a',
  gallery: { enabled: true },
});

// =========================== Work part js start ========================
