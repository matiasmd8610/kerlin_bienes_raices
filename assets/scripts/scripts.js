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
document.querySelectorAll('.gallery-container').forEach((element, index) => {
  lightGallery(document.getElementById(element.getAttribute('id')), {
    plugins: [lgZoom, lgThumbnail],
    //licenseKey: 'your_license_key',
    speed: 1000,
    download: false,
    allowMediaOverlap: true,
    mobileSettings: {
      controls: false,
      showCloseIcon: true
    }
    // ... other settings
  });
});



/* lightGallery(document.getElementById('animated-thumbnails-gallery-02'), {
  plugins: [lgZoom, lgThumbnail],
  //licenseKey: 'your_license_key',
  speed: 500,
  // ... other settings
}); */