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

/*Print json data
*******************************************/
fetch('assets/data/lotes.json') // Cambia 'ruta/al/archivo.json' por la URL o ruta del archivo JSON
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al obtener el JSON");
    }
    return response.json(); // Parsear el JSON
  })
  .then(data => {
    data.lotes.forEach(item => {
      let lotesStatus = document.querySelector(`#loteo-${item.id} .loteo__barrio--estado .state`);
      let lotesFinancing = document.querySelector(`#loteo-${item.id} .loteo__barrio--financiacion span`);
      let lotesHTML = document.getElementById(`prices-${item.id}`);
      let lotesArr = item.lotesItems;

      if (item.status == "En construcción") {
        lotesStatus.innerHTML = "<i class='fa-solid fa-person-digging'></i>" + item.status;
        lotesStatus.classList.add("in-progress");
      } else {
        lotesStatus.innerHTML = "<i class='fa-regular fa-circle-check'></i>" + item.status;
        lotesStatus.classList.add("available");
      }

      lotesFinancing.innerHTML = item.financing;
      
      if (item.id === "portal5") {
        var m2 = false;
      }

      lotesArr.forEach(i => { //Recorro el array de lotesItem de cada lote
        if (m2 == false) {
          lotesHTML.innerHTML += `<div><p class="lote"><i class="fa-solid fa-arrow-right"></i>${i.name} (${i.dimension})</p><p><b>U$$ ${i.price}</b></p></div>`;
        } else if (i.dimension == "") {
          lotesHTML.innerHTML += `<div><p class="lote"><i class="fa-solid fa-arrow-right"></i>${i.name}</p><p><b>U$$ ${i.price}</b></p></div>`;
        } else {
          lotesHTML.innerHTML += `<div><p class="lote"><i class="fa-solid fa-arrow-right"></i>${i.name} (${i.dimension} m<sup>2</sup>)</p><p><b>U$$ ${i.price}</b></p></div>`;
        }
      })

    });
  })
  .catch(error => {
    console.error("Error al consumir el JSON:", error);
  });