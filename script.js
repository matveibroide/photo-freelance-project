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



function changePageMobile() {
    if (window.matchMedia("(max-width: 1000px)").matches) {
        
        $('.dot-container').hide();
        const imgContainer = document.createElement('div'),
                imgs = document.querySelectorAll('.slides');

        document.querySelector('.hero-section').append(imgContainer);

        document.querySelector('.link').style.display = 'none';

        imgContainer.classList.add('img-container'); 

        imgs.forEach((img,i)=>{

        imgContainer.append(img);

    
        
        const newLink = document.createElement('div');
        newLink.classList.add('new-link');
        img.append(newLink);
            
        const changeInnerContent = (num)=>{

        
        
        switch (num) {
            case 0: 
        newLink.innerHTML = '<a href="https://www.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_9440478.htm#query=portraits&position=0&from_view=search&track=sph">Image by wayhomestudio</a> on Freepik';
            break;
            case 1:
        newLink.innerHTML ='<a href="https://www.freepik.com/free-photo/wedding-couple-france_1612423.htm#query=wedding%20photo&position=2&from_view=search&track=sph">Image by senivpetro</a> on Freepik';
            break;
            case 2:
        newLink.innerHTML = 'Image by <a href="https://www.freepik.com/free-photo/father-son-spending-time-together_19865456.htm?query=family%20photo?query=family%20photo?query=family%20photo&collectionId=372&&position=1&from_view=collections">Freepik</a>';
            break;
            case 3:
        newLink.innerHTML = '<a href="https://www.freepik.com/free-photo/two-happy-men-working-together-new-business-project_7337520.htm#query=work&position=0&from_view=search&track=sph">Image by drobotdean</a> on Freepik';
            }
        };
            changeInnerContent(i);
            img.style.width ='100%';
        });
        
    
    }

}

changePageMobile();


function addMargin() {
    if (window.innerHeight<500) {
    
        document.querySelectorAll('.section').forEach(section=>{
            section.style.marginBottom = '20%'; 
        });

    }
}

addMargin();




