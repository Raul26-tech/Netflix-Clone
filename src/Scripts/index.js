// Slic Slider
$(".vitrine-flex").slick({
  dots: false,
  arrows: false,
  infinite: false,
  centermode: false,
  speed: 1000,
  slideToShow: 6,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakponit: 758,
      settings: {
        slideToShow: 3,
      },
    },
  ],
});
