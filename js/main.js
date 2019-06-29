// ScrollTop Btn
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ScrollTop Btn

// Mobile Menu
function openNav() {
    var x = window.matchMedia("(max-width:800px)");

    if (x.matches) {
        document.getElementById("mySidepanel").style.width = "80%";
    } else {
        document.getElementById("mySidepanel").style.width = "35%";
    }
};
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};
//End Mobile menu

// Collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
//End Collapse

// MainSlider
$(document).ready(function(){
    $('.mainSlider').owlCarousel({
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dotsContainer: '.mainSliderCustomDots',
        autoplay: true,
        autoplayTimeout: 10000,
        center: true,
        margin: 10,
        dots: true,
        responsive: {
            0:{
                items:1
            },
            500:{
                items:1
            },
            900:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    var mainSliderDots = $('.mainSlider');
        mainSliderDots.owlCarousel();

        $('.owl-dot').click(function () {
            mainSliderDots.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
});
// End MainSlider

//Brands Slider
$(document).ready(function(){
    $('.brandsSlider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            900:{
                items:3
            },
            1200:{
                items:6
            }
        }
    });
});
//End Brands Slider
