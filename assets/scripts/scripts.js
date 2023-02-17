// Swiper initialize //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "fade" ,
    autoplay: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //End swiper//

  //Update copy automatically
document.querySelector(".year-copy").innerText = new Date().getFullYear();