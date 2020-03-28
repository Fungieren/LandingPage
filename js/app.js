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
 const sectionList = document.querySelectorAll("section");


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

for (let i = 0; i < sectionList.length; i++) {
  const listElement = document.createElement("li");
  const aTag = document.createElement("a");
  const containerId = "#" + sectionList[i].getAttribute("id");
  const sectionTopic = sectionList[i].children[0].children[0].innerText;
  const linkName = document.createTextNode(sectionTopic);
  listElement.setAttribute("class", "menu__link");
  navBar.appendChild(listElement);

/* Creating the a tags and adding them as child elements to the above created list */
 
  aTag.setAttribute("href", containerId);
  listElement.appendChild(aTag);

 
  aTag.appendChild(linkName);
}


// Add class 'active' to section when near top of viewport
// Intersection observer (used tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(activeNavItem, options);

function activeNavItem(entries) {
  entries.forEach(entry => {
    const idName = entry.target.idName;
    console.log(idName);
  });
}

sectionList.forEach(sectionList => {
  observer.observe(sectionList);
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

// Set sections as active


