var $ = require( "jquery" );
import slider from "./modules/slider";








slider({
    selector:'.slider',
    innerWrapperSelector:'.slider-inner-wrapper',
    sliderContainer:'.slides-container',
    slidesSel:'.slides',
    arrowLeftSel:'#left',
    arrowRightSel:'#right'
    
});

    // ----------------------observer-navigation---------------------------------

const options = {
    root:null,
    threshold: 0.50, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%
    rootMargin: "0px"
};

const observerText = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{

        if (!entry.isIntersecting) {

        document.querySelectorAll('.offers').forEach(el=>{

        el.classList.remove('offers-active');
        }); }

        else {
        
        document.querySelectorAll('.offers').forEach(el=>{

        el.classList.add('offers-active');
        });
       
        
        }
        
    });

}, options);




const section = document.querySelector('.section-offers');


observerText.observe(section);

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


