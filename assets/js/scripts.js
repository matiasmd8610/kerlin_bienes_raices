// Swiper initialize //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "fade" ,
    autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //End swiper//

  //Update copy automatically
document.querySelector(".year-copy").innerText = new Date().getFullYear();