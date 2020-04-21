/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

 /* Getting the navbar */
 const navBar = document.getElementById("navbar__list");

 /* Getting the each section section */
 const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav

for (let i = 0; i < sections.length; i++) {
  const listElement = document.createElement("li");
  const aTag = document.createElement("a");
  const containerId = "#" + sections[i].getAttribute("id");
  const sectionTopic = sections[i].children[0].children[0].innerText;
  const linkName = document.createTextNode(sectionTopic);

// Setting the class names for the list elements and adding them to the navbar
  listElement.setAttribute("class", "menu__link");
  navBar.appendChild(listElement);

// Creating the a tags and adding them as child elements to the above created list
  aTag.setAttribute("href", containerId);
  listElement.appendChild(aTag);
  aTag.appendChild(linkName);
}

//Checks if section is in view and adds active-class with moving background and color change
const options = {
  threshold: 1
};

let observer = new IntersectionObserver(navElement, options);

function navElement(elements) {
  elements.forEach(element => {
    const sectionId = element.target.id;
    console.log(sectionId);
    
    if (sectionId.isIntersecting) {
      sections[i].classList.add("your-active-class");
    } else {
      false;
    };
  });
}

sections.forEach(section => {
  observer.observe(section);
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Back-To-Top Button Used Tutorial here: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", function() {
  console.log("You clicked back to top");
});

// Set sections as active
