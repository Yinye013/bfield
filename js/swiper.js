// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  // modules: [Navigation, Pagination],
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// TODO
// FIXME
// function to create an array from objects and return the new array and console log it
const array = () => {};
