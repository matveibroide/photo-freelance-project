var $ = require( "jquery" );
import slider from "./modules/slider";
import modal from "./modules/modal";
import observerNav from "./modules/observers";
import {observerSlider} from "./modules/observers";




slider({
    selector:'.slider',
    innerWrapperSelector:'.slider-inner-wrapper',
    sliderContainer:'.slides-container',
    slidesSel:'.slides',
    arrowLeftSel:'#left',
    arrowRightSel:'#right'
    
});

modal('.modal','.contact-link','.btn');

observerNav('.section-offers','.offers','offers-active');
observerSlider('.hero-section','.slider');



// ------------------------------------observer-slider--------------------------

const optionsImg = {
    root:null,
    threshold: 0.65, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%
    rootMargin: "0px"
};



const observerImg = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{

        if (!entry.isIntersecting) {

        $('.slider').css('transform','translateX(100%)');
        }

        else {
            $('.slider').css('transform','translateX(0%)');
        }
        });

}, optionsImg);

const sectionHero = document.querySelector('.hero-section');


observerImg.observe(sectionHero);




// ---------------------------nav-bar--------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = $(".nav-bar");

// Get the offset position of the navbar
const sticky = navbar.offset();
console.log(sticky);
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset >= sticky.top -200) {
    navbar.css('opacity','1');
    navbar.addClass("sticky");
} else {
    navbar.removeClass("sticky");
    navbar.css('opacity','0');

}
}


