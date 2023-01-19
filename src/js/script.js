$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
  });

  $(".star").starRating({
    totalStars: 5,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });
});
