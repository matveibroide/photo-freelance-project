var $ = require( "jquery" );
import slider from "./modules/slider";
import modal from "./modules/modal";
import observerNav from "./modules/observers";
import {observerSlider} from "./modules/observers";
import stickyNav from "./modules/stickyNav";




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

stickyNav();



function hideDots() {
    if (window.matchMedia("(max-width: 1000px)").matches) $('.dot-container').hide();

}

hideDots();


function addMargin() {
    if (window.innerHeight<500) {
    
        document.querySelectorAll('.section').forEach(section=>{
            section.style.marginBottom = '20%'; 
        });

    }
}

addMargin();




