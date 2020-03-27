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

const navBar = document.getElementById("navbar__list");

/* Getting the sections */

const sectionList = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

 /* Creating menu links for each section and add it to the navbar */
 // build the nav
 // Scroll to anchor ID using scrollTO event
 // Scroll to section on link click
for (let i = 0; i < sectionList.length; i++) {
  const listElement = document.createElement("li");
  listElement.setAttribute("class", "menu__link");
  navBar.appendChild(listElement);

/* Creating the a tags and adding them as child elements to the above created list */
  const aTag = document.createElement("a");
  const containerId = "#" + sectionList[i].getAttribute("id");
  aTag.setAttribute("href", containerId);
  listElement.appendChild(aTag);

  const sectionTopic = sectionList[i].children[0].children[0].innerText;
  const linkName = document.createTextNode(sectionTopic);
  aTag.appendChild(linkName);
}

/**
 * End Helper Functions
 * Begin Main Functions (Where the code should start running (Fung))
 *
 */


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Add class 'active' to section when near top of viewport
// Intersection observer (used tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navObserver, options);

function navObserver(sectionList) {
  sectionList.forEach(section => {
    const className = section.target.className;
    console.log(className);
    const activeClass = document.querySelector(`[data-nav=${className}]`);
    console.log(activeClass);
  });
}

sectionList.forEach(section => {
  observer.observe(section)
});


// Set sections as active

// Function: creates a new section and append it to the bottom of the HTML body



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
