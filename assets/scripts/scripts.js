/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

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


/*Header anchor links
*********************************************/
$(document).ready(function(){
  $('header li a[href^="#"]').on('click',function (e) {
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