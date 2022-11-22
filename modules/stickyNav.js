var $ = require( "jquery" );

function stickyNav() {
// ---------------------------nav-bar--------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction();};

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


}

export default stickyNav;