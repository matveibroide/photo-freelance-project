
var $ = require( "jquery" );

function observerNav(selectorSection,selectorChild,selectorClass) {


    const options = {
        root:null,
        threshold: 0.50, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%
        rootMargin: "0px 500px"
    };
    
    const observerText = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry=>{
    
            if (!entry.isIntersecting) {
    
            document.querySelectorAll(selectorChild).forEach(el=>{
    
            el.classList.remove(selectorClass);
            }); }
    
            else {
            
            document.querySelectorAll(selectorChild).forEach(el=>{
    
            el.classList.add(selectorClass);
            });
            
            
            }
            
        });
    
    }, options);
    
    
    
    
    const section = document.querySelector(selectorSection);
    
    
    observerText.observe(section);


}



function observerSlider(sectorSelector,childSelector) {

    const optionsImg = {
        root:null,
        threshold: 0.65, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%
        rootMargin: "0px"
    };
    
    
    
    const observerImg = new IntersectionObserver(function(entries,observer){
        entries.forEach(entry=>{
    
            if (!entry.isIntersecting) {
    
            $(childSelector).css('transform','translateX(100%)');
            }
    
            else {
                $(childSelector).css('transform','translateX(0%)');
            }
            });
    
    }, optionsImg);
    
    const sectionHero = document.querySelector(sectorSelector);
    
    
    observerImg.observe(sectionHero);
    


}


export default observerNav;
export {observerSlider};