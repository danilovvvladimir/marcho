$(function () {
  $(".blog-page__slider").slick({
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path " d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path  d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
  });

  const tabs = document.querySelectorAll(".product-tabs__top-item");
  const tabsContent = document.querySelectorAll(".product-tabs__content-item");
  tabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      tabs.forEach((item) =>
        item.classList.remove("product-tabs__top-item--active")
      );
      tabsContent.forEach((item) =>
        item.classList.remove("product-tabs__content-item--active")
      );
      item.classList.add("product-tabs__top-item--active");
      tabsContent[index].classList.add("product-tabs__content-item--active");
    });
  });

  $(".product-slide__thumb").slick({
    asNavFor: ".product-slide__big",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });
  $(".product-slide__big").slick({
    asNavFor: ".product-slide__thumb",
    draggable: false,
    arrows: false,
    fade: true,
  });

  $(".shop-content__filter-btn").on("click", function () {
    $(".shop-content__filter-btn").removeClass(
      "shop-content__filter-btn--active"
    );
    $(this).addClass("shop-content__filter-btn--active");
  });

  $(".btn-list").on("click", function () {
    $(".product-item").addClass("product-item--list");
  });
  $(".btn-grid").on("click", function () {
    $(".product-item").removeClass("product-item--list");
  });

  const colorCheckboxes = document.querySelectorAll(".filter-color__input");
  const sizeCheckboxes = document.querySelectorAll(".filter-size__input");
  const colorText = document.querySelectorAll(".filter-color__text");
  const sizeText = document.querySelectorAll(".filter-size__label");

  if (colorCheckboxes !== undefined) {
    colorCheckboxes.forEach((item, index) => {
      item.addEventListener("click", () => {
        colorText[index].classList.toggle("filter-color__text--active");
      });
    });
  }

  $(".select-style, .product-one__num").styler();

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

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

  // $(".comments-form__star").starRating({
  //   totalStars: 5,
  //   useFullStars: true,
  //   starShape: "rounded",
  //   starSize: 20,
  //   emptyColor: "#ccccce",
  //   activeColor: "#ffc35b",
  //   useGradient: false,
  //   readOnly: false,
  // });
  $(".comments-form__star--1").starRating({
    totalStars: 1,
    useFullStars: true,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });
  $(".comments-form__star--2").starRating({
    totalStars: 2,
    useFullStars: true,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });
  $(".comments-form__star--3").starRating({
    totalStars: 3,
    useFullStars: true,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });
  $(".comments-form__star--4").starRating({
    totalStars: 4,
    useFullStars: true,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });
  $(".comments-form__star--5").starRating({
    totalStars: 5,
    useFullStars: true,
    starShape: "rounded",
    starSize: 20,
    emptyColor: "#ccccce",
    activeColor: "#ffc35b",
    useGradient: false,
    readOnly: true,
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function initializeClock(selector, endtime) {
    const clock = document.querySelector(selector);
    const daysSpan = clock.querySelector(".promo__days");
    const hoursSpan = clock.querySelector(".promo__hours");
    const minutesSpan = clock.querySelector(".promo__minutes");
    const secondsSpan = clock.querySelector(".promo__seconds");

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $(".promo__clock").attr("data-time");
  initializeClock(".promo__clock", deadline);
});
