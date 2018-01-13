var value = 0;

function Carousel(){
    var slides = document.getElementsByClassName('myslider');

    var index = 0;
    var numElements = slides.length;
    var curElement = slides[index];

    var next = function() {
        curElement.classList.remove("fadeIn")
        curElement.classList.add("fadeOut")
        if (index == numElements - 1){
            index = 0
        } else {
            index++

        }

        curElement = slides[index]
        curElement.classList.remove("fadeOut")
        curElement.classList.add("fadeIn")
    }

    var runCarousel = setInterval(next, 2000);
}


$(document).ready(function(){
    var $navElements=$(".nav_list-item--has-child")
    $navElements.on("click", function(e){
        $navElements.removeClass("nav_list-item--open")
        $(this).toggleClass("nav_list-item--open")

    }) 

    $("#slide").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    })


})

