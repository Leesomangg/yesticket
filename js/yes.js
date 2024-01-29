window.onload = function () {
  // header swiper
  var swiper = new Swiper(".header-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".header-swiper-next-bt",
      prevEl: ".header-swiper-prev-bt",
    },
  });
};
