/*Swiper initialize
**************************************/
const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    effect: "fade",
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


/*Update copy automatically
**************************************************/
document.querySelector(".year-copy").innerText = new Date().getFullYear();

/*Light Gallery
*********************************************/
lightGallery(document.getElementById('animated-thumbnails-gallery'), {
  plugins: [lgZoom, lgThumbnail],
  //licenseKey: 'your_license_key',
  speed: 500,
  // ... other settings
});