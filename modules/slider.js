function slider({selector,innerWrapperSelector,sliderContainer,slidesSel,arrowLeftSel,arrowRightSel}) {


    // ---------------------slider-food---------------------------------
    
    function setDotsOpacity(){
        dots.forEach(dot=>dot.style.opacity = '0.5');
    }
    
    
    const slider = document.querySelector(selector),
            innerWrapper = slider.querySelector(innerWrapperSelector),
            slidesContainer = slider.querySelector(sliderContainer),
            slides = slider.querySelectorAll(slidesSel),
            width = getComputedStyle(innerWrapper).width.replace(/px/gi,''),
            height = getComputedStyle(innerWrapper).height.replace(/px/gi,''),
            arrowLeft = slider.querySelector(arrowLeftSel),
            arrowRight = slider.querySelector(arrowRightSel);
            
            const dots = [];
    
            
            
            slidesContainer.style.width = +width * slides.length + 'px';
            slidesContainer.style.height = +height + 'px';
    
            slides.forEach(slide=>{
                slide.style.width = +width + 'px';
                slide.style.height = +height + 'px'; 
            });
    
            let offset  = 0;
            let counter = 0;
    
          
    
            arrowLeft.addEventListener('click',()=>{
                if (counter <= 0) counter = slides.length;
    
                counter--;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
            if (offset <= 0) offset = +width * (slides.length-1);
    
                else {offset-= +width;}
                console.log(offset);
                slidesContainer.style.transform = `translateX(-${offset}px)`;
    
            });
            
            arrowRight.addEventListener('click',()=>{
                
                counter++;
                if (counter === slides.length) counter = 0;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
    
                if (offset === +width * (slides.length-1)) offset = 0;
        
                    else {offset+= +width;}
                    console.log(offset);
                    slidesContainer.style.transform = `translateX(-${offset}px)`;
        
                });
    
    
                
    
    
    // --------------------------------indicators-------------------------------------
    
    
    
    const dotContainer = document.createElement('div');
    
    dotContainer.style.cssText = `
    background-color:'red' !important;
    position:absolute;
    top: 10%;
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    height: 12%;
    z-index:20; `; 
    


    
    innerWrapper.append(dotContainer);
    
    
    for (let i = 0; i < slides.length; i++ ) {
        
        const dot = document.createElement('div');
        dot.style.cssText = `
        margin: 2%;
        width: 15%;
        height: 20%;
        opacity: 0.5;
        cursor: pointer;
        z-index:10;
        `;

        dot.style.backgroundColor ='var(--mainClr)';
        dots.push(dot);
        dotContainer.append(dot);
        dot.setAttribute('data-slide-to',`${i}`);
        dots[0].style.opacity = '1';
    }
    
    
    dotContainer.addEventListener('click',(e)=>{
    
        const target = e.target;
    
        switch (target.getAttribute('data-slide-to')){
    
            case '0':
                offset = 0;
                counter = 0;
                slidesContainer.style.transform = `translateX(-${offset}px)`;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
                break;
            case '1':
                offset = +width * 1;
                counter = 1;
                slidesContainer.style.transform = `translateX(-${offset}px)`;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
                break;
    
            case '2':
                offset = +width * 2;
                counter = 2;
                slidesContainer.style.transform = `translateX(-${offset}px)`;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
                break;
            case '3':
                offset = +width * 3;
                counter = 3;
                slidesContainer.style.transform = `translateX(-${offset}px)`;
                setDotsOpacity();
                dots[counter].style.opacity = '1';
        }
                 
    });
    
    }
    
    export default slider;
    