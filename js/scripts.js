const hb = document.querySelector(`#hamburgerBtn`);


hb.addEventListener(`click`, () => {
  document.querySelector(`#primaryNav`).classList.toggle(`open`);
})



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 3000, 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Enable autoplay 
  autoplay: {
    delay: 6000, 
  },

});