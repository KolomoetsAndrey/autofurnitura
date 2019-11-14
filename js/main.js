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
            768:{
                items:2
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

//Product Slider
$(document).ready(function(){
    $('.prodSlider').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:1
            },
            768:{
                items:2
            },
            900:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
});
// End Product Slider

// Searching
$(document).ready(function() {
    $(".searching button").click(function() {
        $(".searching input[type='text']").toggleClass(" search_onclick");
        $(".hamburger").toggleClass(" no_hamburger");
        $(".searching").toggleClass(" search_open")
    });
});
//End Searching

//Liked
$(function() {
    $( "i" ).click(function() {
      $( "i" ).toggleClass( "press", 1000 );
    });
});
//End Liked

// Tabs
$("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});
  
$(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});
// End Tabs

// PlusMinus
$(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});
//End PlusMinus

// Titles Height
$(document).ready(function(){
    var autoHeight = $(".history_title").height();
    $(".payments_title").height(autoHeight);
    $(".delivery_title").height(autoHeight);
});
