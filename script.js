/* SLIDE-IMAGE CAROUSEL */

        /* Setup Image, headline, and text arrays */
var imageLibrary = ["url('images/mobile-image-hero-1.jpg')","url('images/mobile-image-hero-2.jpg')", "url('images/mobile-image-hero-3.jpg')"];
var dkImageLibrary = ["url('images/desktop-image-hero-1.jpg')","url('images/desktop-image-hero-2.jpg')", "url('images/desktop-image-hero-3.jpg')"];
var asideHeadlineLibrary= ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
var asideTextLibrary= ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions&#x3F Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];


        /*  Access DOM Elements */
var rightButton = document.getElementById("right-button");
var leftButton = document.getElementById("left-button");
var headerImages = document.getElementsByClassName("header-container")[0];
var asideHeadline= document.getElementById("aside-headline");
var asideText=document.getElementById("aside-text");

        /* Establish loop if-else counter and media query variable */
var i =0;  //  Set counter to zero
var mediaQuery = window.matchMedia('(min-width: 1440px)');


        /* Define functions to advance, reverse slides */

var prevSlide = function () {  // Slideshow previous function
    if (i > 0) {  // Move to the previous slide in the image slide carousel if the current image displayed is not the first in the image library
        i--;  
        updateSlide();  //Run the updateSlide function to display the appropriate image (based on screensize), headline, and text 
    }
    else {
        i = (imageLibrary.length -1);  //  Move to the last slide in the image slide carousel if the current slide displayed is the first in the image library
        updateSlide();  //Run the updateSlide function to display the appropriate image (based on screensize), headline, and text 
    }
}

var nextSlide = function () {  // Slideshow advance function
    if (i >= imageLibrary.length - 1) {  // Move to first slide in image slide carousel if current image displayed is the last in the image library 
        i = 0;
        updateSlide();  //Run the updateSlide function to display the appropriate image (based on screensize), headline, and text 
    }
    else {   // Move forwad to the next image in the image slide carousel if current image displayed is NOT the last in the image library
      i++;
      updateSlide();  //Run the updateSlide function to display the appropriate image (based on screensize), headline, and text 
    }
}


        /* Define function to update images based on screensize */
var updateSlide = function () {
    if (mediaQuery.matches) {  // If the screensize is 1440px+
        headerImages.style.backgroundImage=dkImageLibrary[i];  // Display images from desktop image library
    } else {
        headerImages.style.backgroundImage=imageLibrary[i];  // If screensize is less than 1440 px, display images from mobile library
    }
    asideHeadline.innerHTML = asideHeadlineLibrary[i];  //  Display corresponding image headline 
    asideText.innerHTML = asideTextLibrary[i];  // Display corresponding text 
}


        /* Execute functions when events are initiated */
rightButton.addEventListener('click', nextSlide);  // Move forward in image slide carousel
leftButton.addEventListener('click', prevSlide);  // Move backward in image slide carousel
window.addEventListener('resize', updateSlide);  // Display proper Mobile or Desktop Images when screen is resized after initial load




/* UPDATE SLIDER BUTTONS FOR DESKTOP AND MOBILE VERSION*/
        
        /* Access DOM Elements */
var arrows = document.getElementById("arrows");

        /*Define function to move slideshow arrows based on screensize */
var moveSlider = function () {
    if (mediaQuery.matches) {  // If current screensize is 1440px+
        var newSlider = document.createElement("DIV");  // create a new div
        newSlider.appendChild(arrows); // add the content from the existing "arrows" id in the current HTML to the new div
        document.getElementById("shopAside").appendChild(newSlider);  //  add the new div to the end of the existing "shopAside" div within the current HTML
    } 
    else  {  // If current screensize is less than 1440px
        var newSlider = document.createElement("DIV");  // create a new div
        newSlider.appendChild(arrows); // add the content from the existing "arrows" id in the current HTML to the new div
        document.getElementById("hid").appendChild(newSlider);  // add the new div to the end of the existing "hid" div within the current HTML
    }
}
            /* Execute functions when events are initiated */
window.addEventListener('load', moveSlider);  // When the window loads, assign the appropriate slider layout
window.addEventListener('resize', moveSlider); // When the window is resized, assign the appropriate slider layout





/*  MOBILE HAMBURGER MENU TOGGLE */


        /* Access DOM Elements */
var navigation = document.getElementsByClassName("nav-container")[0];
var navContainer = document.getElementsByClassName("logo-nav-container")[0];
var logo = document.getElementsByClassName("logo")[0];
var menuIcon = document.getElementById("menu-icon"); // This is the nav icon that the user clicks on

        /* Establish variables for hamburger and close icons */
var closeIcon = "fas fa-times"; // This is the class value needed to display the close/'x' icon
var hamburgerIcon = "fas fa-bars";  // This is the class value needed to display the hamburger icon

        /* Define functions to open hamburger menu, close hamburger menu, check for, and set an initial hamburger menu icon */
var openHamburger = function () {  // Run to show pop-up white nav menu with x
    navigation.style.visibility = "visible";   // Make nav bar visible
    navContainer.style.backgroundColor="#FFFFFF";  // Set background to white
    navContainer.style.width = "100%";  // Set width of nav bar to 100% of parent container
    logo.style.display = "none"; // Do not display logo
    logo.style.width = "0%;" //  Set logo container width to 0%
    menuIcon.className=closeIcon;  // Update icon to close/'x'
    menuIcon.style.color = "#C6C6C6";  // set color of icon to light gray
    menuIcon.style.fontweight = 400;  //  Set font-weight of icon to regular
}

var closeHamburger = function () {  // Show hamburger menu no nav
    navigation.style.visibility = "hidden";  // Hide nav bar
    navContainer.style.backgroundColor="transparent";  // Set background of hidden nav bar to transparent
    navContainer.style.width="100%"; // Set width of nav bar to 0% of parent container
    logo.style.display="flex";  // Set display of logo to flex
    logo.style.width="70%"; // Set width of logo to 70% of parent container
    menuIcon.className=hamburgerIcon; // Update icon to hamburger icon
    menuIcon.style.color = "white";  // Set color of icon to white
    menuIcon.style.fontweight= 500; // Set font-weight of icon to bolder
}

var assignHamburgerIcon = function () {  // Run to assign hamburger icon
    menuIcon.className=hamburgerIcon;
}

var checkIcon = function () {   // Loads hamburger icon when there is no icon present
    if (menuIcon.className="na")
    assignHamburgerIcon();  // Execute to assign hamburger icon where none is present
}


        /* Execute functions to check for and load initial hamburger icon, open, and close hamburger menu */
checkIcon();  // Execute hamburger icon load if none present
menuIcon.addEventListener('mouseover', openHamburger);  // If hamburger icon is moused over, display navigation menu
menuIcon.addEventListener('click', closeHamburger);  //  If close/'x' icon is clicked, close navigation menu