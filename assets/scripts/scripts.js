/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*Swiper initialize
**************************************/
if (document.querySelector('.swiper')) {
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
}


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


/*Header anchor links
*********************************************/
$(document).ready(function(){
  $('header li a[href^="#"], .swiper-slide .btn').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 70
      }, 500, 'swing');
  });
}); 

/*Progress Bar scroll
**********************************************/
var progressBar = document.querySelector("#progress-bar span");
var totalHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll", function() {
  var currentHeight = window.pageYOffset;
  var progress = currentHeight / totalHeight * 100;
  progressBar.style.width = progress + "%";
});

/*Hamburguer efect
****************************************************************/
let iconoHambur = document.querySelector(".navbar-toggler-icon");
  iconoHambur.addEventListener("click", function(){
    let S1 = document.querySelector("#S1");
    let S2 = document.querySelector("#S2");
    S1.classList.toggle("rotate1");
    S2.classList.toggle("rotate2");
});


/*AOS Init
*******************************************************/
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});