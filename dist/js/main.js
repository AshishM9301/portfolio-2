document.addEventListener('DOMContentLoaded', function () {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM

    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctionForSticky);

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position

    function myFunctionForSticky() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("fixed-top");
        } else {
            navbar.classList.remove("fixed-top");
        }

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }

        if (window.pageYOffset >= sticky) {
            navbar.classList.add("bg-white");
        } else {
            navbar.classList.remove("bg-white");
        }
    }

    /*Toggle between adding and removing the "responsive" class to topnav
    when the user clicks on the icon*/
})