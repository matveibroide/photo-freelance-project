/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modal(selectorModal,selectorTrigger,closeSelector) {\r\n\r\n    const modal = document.querySelector(selectorModal);\r\n\r\n    const triggerModal = document.querySelectorAll(selectorTrigger);\r\n    \r\n    triggerModal.forEach((trigger)=>{\r\n    \r\n        trigger.addEventListener('click',(e)=>{\r\n    \r\n            e.preventDefault();\r\n            modal.style.display = 'flex';\r\n            modal.showModal();\r\n        });\r\n    });\r\n\r\n    document.querySelector(closeSelector).addEventListener('click',()=>{\r\n\r\n        modal.style.display = 'none';\r\n\r\n    });\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/observers.js":
/*!******************************!*\
  !*** ./modules/observers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"observerSlider\": () => (/* binding */ observerSlider)\n/* harmony export */ });\n\r\n\r\n\r\nfunction observerNav(selectorSection,selectorChild,selectorClass) {\r\n\r\n\r\n    const options = {\r\n        root:null,\r\n        threshold: 0.50, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%\r\n        rootMargin: \"0px 500px\"\r\n    };\r\n    \r\n    const observerText = new IntersectionObserver(function(entries,observer){\r\n        entries.forEach(entry=>{\r\n    \r\n            if (!entry.isIntersecting) {\r\n    \r\n            document.querySelectorAll(selectorChild).forEach(el=>{\r\n    \r\n            el.classList.remove(selectorClass);\r\n            }); }\r\n    \r\n            else {\r\n            \r\n            document.querySelectorAll(selectorChild).forEach(el=>{\r\n    \r\n            el.classList.add(selectorClass);\r\n            });\r\n            \r\n            \r\n            }\r\n            \r\n        });\r\n    \r\n    }, options);\r\n    \r\n    \r\n    \r\n    \r\n    const section = document.querySelector(selectorSection);\r\n    \r\n    \r\n    observerText.observe(section);\r\n\r\n\r\n}\r\n\r\n\r\n\r\nfunction observerSlider(sectorSelector,childSelector) {\r\n\r\n    const optionsImg = {\r\n        root:null,\r\n        threshold: 0.65, // 0 every little part triggers obs-r, 1 - when whole section in, 0.25 - 25%\r\n        rootMargin: \"0px\"\r\n    };\r\n    \r\n    \r\n    \r\n    const observerImg = new IntersectionObserver(function(entries,observer){\r\n        entries.forEach(entry=>{\r\n    \r\n            if (!entry.isIntersecting) {\r\n    \r\n            document.querySelector(childSelector).style.transform = 'translateX(100%)';\r\n            }\r\n    \r\n            else {\r\n                document.querySelector(childSelector).style.transform ='translateX(0%)';\r\n            }\r\n            });\r\n    \r\n    }, optionsImg);\r\n    \r\n    const sectionHero = document.querySelector(sectorSelector);\r\n    \r\n    \r\n    observerImg.observe(sectionHero);\r\n    \r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observerNav);\r\n\n\n//# sourceURL=webpack:///./modules/observers.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider({selector,innerWrapperSelector,sliderContainer,slidesSel,arrowLeftSel,arrowRightSel}) {\r\n\r\n    \r\n    \r\n    \r\n    function setDotsOpacity(){\r\n        dots.forEach(dot=>dot.style.opacity = '0.5');\r\n    }\r\n    \r\n    \r\n    const slider = document.querySelector(selector),\r\n            innerWrapper = slider.querySelector(innerWrapperSelector),\r\n            slidesContainer = slider.querySelector(sliderContainer),\r\n            slides = slider.querySelectorAll(slidesSel),\r\n            width = getComputedStyle(innerWrapper).width.replace(/px/gi,''),\r\n            height = getComputedStyle(innerWrapper).height.replace(/px/gi,''),\r\n            arrowLeft = slider.querySelector(arrowLeftSel),\r\n            arrowRight = slider.querySelector(arrowRightSel);\r\n            \r\n            const dots = [];\r\n    \r\n            \r\n            \r\n            slidesContainer.style.width = +width * slides.length + 'px';\r\n            slidesContainer.style.height = +height + 'px';\r\n    \r\n            slides.forEach(slide=>{\r\n                slide.style.width = +width + 'px';\r\n                slide.style.height = +height + 'px'; \r\n            });\r\n    \r\n            let offset  = 0;\r\n            let counter = 0;\r\n\r\n            \r\n            \r\n            const link = document.querySelector('.link');\r\n            link.innerHTML = '<a href=\"https://www.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_9440478.htm#query=portraits&position=0&from_view=search&track=sph\">Image by wayhomestudio</a> on Freepik';\r\n            link.style.cssText = `\r\n            font-size:1rem;\r\n            margin:10ch 1ch;\r\n            `;\r\n    \r\n            function changeLink(num) {\r\n\r\n                switch (num) {\r\n                    case 0: \r\n                link.innerHTML = '<a href=\"https://www.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_9440478.htm#query=portraits&position=0&from_view=search&track=sph\">Image by wayhomestudio</a> on Freepik';\r\n                    break;\r\n                    case 1:\r\n                link.innerHTML ='<a href=\"https://www.freepik.com/free-photo/wedding-couple-france_1612423.htm#query=wedding%20photo&position=2&from_view=search&track=sph\">Image by senivpetro</a> on Freepik';\r\n                    break;\r\n                    case 2:\r\n                link.innerHTML = 'Image by <a href=\"https://www.freepik.com/free-photo/father-son-spending-time-together_19865456.htm?query=family%20photo?query=family%20photo?query=family%20photo&collectionId=372&&position=1&from_view=collections\">Freepik</a>';\r\n                    break;\r\n                    case 3:\r\n                link.innerHTML = '<a href=\"https://www.freepik.com/free-photo/two-happy-men-working-together-new-business-project_7337520.htm#query=work&position=0&from_view=search&track=sph\">Image by drobotdean</a> on Freepik';\r\n            }\r\n\r\n            }\r\n    \r\n            arrowLeft.addEventListener('click',()=>{\r\n\r\n                if (counter <= 0) counter = slides.length;\r\n    \r\n                counter--;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n            if (offset <= 0) offset = +width * (slides.length-1);\r\n    \r\n                else {offset-= +width;}\r\n                console.log(offset);\r\n                slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                changeLink(counter);\r\n    \r\n            });\r\n            \r\n            arrowRight.addEventListener('click',()=>{\r\n                \r\n                counter++;\r\n                if (counter === slides.length) counter = 0;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n    \r\n                if (offset === +width * (slides.length-1)) offset = 0;\r\n        \r\n                    else {offset+= +width;}\r\n                    console.log(offset);\r\n                    slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                    changeLink(counter);\r\n        \r\n                });\r\n    \r\n    \r\n                \r\n    \r\n    \r\n    // --------------------------------indicators-------------------------------------\r\n    \r\n    \r\n    \r\n    const dotContainer = document.createElement('div');\r\n    dotContainer.classList.add('dot-container');\r\n    \r\n    dotContainer.style.cssText = `\r\n    background-color:'red' !important;\r\n    position:absolute;\r\n    top: 10%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    height: 12%;\r\n    z-index:20; `; \r\n    \r\n\r\n\r\n    \r\n    innerWrapper.append(dotContainer);\r\n    \r\n    \r\n    for (let i = 0; i < slides.length; i++ ) {\r\n        \r\n        const dot = document.createElement('div');\r\n        dot.style.cssText = `\r\n        margin: 2%;\r\n        width: 15%;\r\n        height: 20%;\r\n        opacity: 0.5;\r\n        cursor: pointer;\r\n        z-index:10;\r\n        `;\r\n\r\n        dot.style.backgroundColor ='var(--mainClr)';\r\n        dots.push(dot);\r\n        dotContainer.append(dot);\r\n        dot.setAttribute('data-slide-to',`${i}`);\r\n        dots[0].style.opacity = '1';\r\n    }\r\n    \r\n    \r\n    dotContainer.addEventListener('click',(e)=>{\r\n    \r\n        const target = e.target;\r\n    \r\n        switch (target.getAttribute('data-slide-to')){\r\n    \r\n            case '0':\r\n                changeLink(counter);\r\n                offset = 0;\r\n                counter = 0;\r\n                slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n                break;\r\n            case '1':\r\n                changeLink(counter);\r\n                offset = +width * 1;\r\n                counter = 1;\r\n                slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n                break;\r\n    \r\n            case '2':\r\n                changeLink(counter);\r\n                offset = +width * 2;\r\n                counter = 2;\r\n                slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n                break;\r\n            case '3':\r\n                changeLink(counter);\r\n                offset = +width * 3;\r\n                counter = 3;\r\n                slidesContainer.style.transform = `translateX(-${offset}px)`;\r\n                setDotsOpacity();\r\n                dots[counter].style.opacity = '1';\r\n        }\r\n    \r\n    });\r\n    \r\n    }\r\n    \r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n    \r\n    \r\n    \r\n    \n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/stickyNav.js":
/*!******************************!*\
  !*** ./modules/stickyNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction stickyNav() {\r\n// ---------------------------nav-bar--------------------------------\r\n\r\n// When the user scrolls the page, execute myFunction\r\nwindow.onscroll = function() {myFunction();};\r\n\r\n// Get the navbar\r\nconst navbar = document.querySelector(\".nav-bar\");\r\n\r\n// Get the offset position of the navbar\r\nconst sticky = navbar.offsetTop;\r\nconsole.log(sticky);\r\n// Add the sticky class to the navbar when you reach its scroll position. Remove \"sticky\" when you leave the scroll position\r\nfunction myFunction() {\r\nif (window.pageYOffset >= sticky - 200) {\r\n    navbar.style.opacity ='1';\r\n    navbar.classList.add(\"sticky\");\r\n} else {\r\n    navbar.classList.remove(\"sticky\");\r\n    navbar.style.opacity ='0';\r\n\r\n}\r\n}\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyNav);\n\n//# sourceURL=webpack:///./modules/stickyNav.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/observers */ \"./modules/observers.js\");\n/* harmony import */ var _modules_stickyNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/stickyNav */ \"./modules/stickyNav.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    selector:'.slider',\r\n    innerWrapperSelector:'.slider-inner-wrapper',\r\n    sliderContainer:'.slides-container',\r\n    slidesSel:'.slides',\r\n    arrowLeftSel:'#left',\r\n    arrowRightSel:'#right'\r\n    \r\n});\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.modal','.contact-link','.btn');\r\n\r\n(0,_modules_observers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.section-offers','.offers','offers-active');\r\n(0,_modules_observers__WEBPACK_IMPORTED_MODULE_2__.observerSlider)('.hero-section','.slider');\r\n\r\n(0,_modules_stickyNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\r\n\r\nfunction changePageMobile() {\r\n    if (window.matchMedia(\"(max-width: 1000px)\").matches) {\r\n        \r\n        document.querySelector('.section-contact').style.marginTop = '150%';\r\n\r\n\r\n        document.querySelector('.dot-container').style.display = 'none';\r\n        const imgContainer = document.createElement('div'),\r\n        imgs = document.querySelectorAll('.slides');\r\n\r\n        document.querySelector('.hero-section').append(imgContainer);\r\n\r\n        document.querySelector('.link').style.display = 'none';\r\n\r\n        imgContainer.classList.add('img-container'); \r\n\r\n        imgs.forEach((img,i)=>{\r\n\r\n        imgContainer.append(img);\r\n\r\n        const newLink = document.createElement('div');\r\n        newLink.classList.add('new-link');\r\n        img.append(newLink); \r\n            \r\n        const changeInnerContent = (num)=>{\r\n\r\n        \r\n        \r\n        switch (num) {\r\n            case 0: \r\n        newLink.innerHTML = '<a href=\"https://www.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_9440478.htm#query=portraits&position=0&from_view=search&track=sph\">Image by wayhomestudio</a> on Freepik';\r\n            break;\r\n            case 1:\r\n        newLink.innerHTML ='<a href=\"https://www.freepik.com/free-photo/wedding-couple-france_1612423.htm#query=wedding%20photo&position=2&from_view=search&track=sph\">Image by senivpetro</a> on Freepik';\r\n            break;\r\n            case 2:\r\n        newLink.innerHTML = 'Image by <a href=\"https://www.freepik.com/free-photo/father-son-spending-time-together_19865456.htm?query=family%20photo?query=family%20photo?query=family%20photo&collectionId=372&&position=1&from_view=collections\">Freepik</a>';\r\n            break;\r\n            case 3:\r\n        newLink.innerHTML = '<a href=\"https://www.freepik.com/free-photo/two-happy-men-working-together-new-business-project_7337520.htm#query=work&position=0&from_view=search&track=sph\">Image by drobotdean</a> on Freepik';\r\n            }\r\n        };\r\n            changeInnerContent(i);\r\n            img.style.width ='100%';\r\n        });\r\n        \r\n    \r\n        \r\n    }\r\n\r\n    if (window.matchMedia(\"(max-width: 800px)\").matches) {\r\n\r\n        document.querySelector('.section-contact').style.marginTop = '170%';\r\n\r\n    }\r\n\r\n    if (window.matchMedia(\"(max-width: 650px)\").matches) { \r\n\r\n        document.querySelector('.section-contact').style.marginTop = '260%';\r\n\r\n    }\r\n\r\n\r\n    if (window.matchMedia(\"(max-width: 400px)\").matches) { \r\n\r\n        document.querySelector('.section-contact').style.marginTop = '340%';\r\n\r\n}\r\n\r\n}\r\n\r\nchangePageMobile();\r\n\r\n\r\nfunction addMargin() {\r\n    if (window.innerHeight<500) {\r\n\r\n        document.querySelectorAll('.section').forEach(section=>{\r\n            section.style.marginBottom = '20%'; \r\n        });\r\n\r\n    }\r\n}\r\n\r\naddMargin();\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;