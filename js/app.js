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

for (let i = 0; i < sectionList.length; i++) {
  // navBar.addEventListener("click", createElement);
  const listElement = document.createElement("li");
  listElement.setAttribute("class", "menu__link");
  navBar.appendChild(listElement);

  const aTag = document.createElement("a");
  const containerId = "#" + sectionList[i].getAttribute("id");
  aTag.setAttribute("href", containerId);
  listElement.appendChild(aTag);

  const sectionTopic = sectionList[i].children[0].children[0].innerText;
  const linkName = document.createTextNode(sectionTopic);
  aTag.appendChild(linkName);
}

// Intersection observer
const callback = function() {};

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75
};

let observer = new IntersectionObserver(callback, options);

for (let i = 0; i < sectionList.length; i++) {
  observer.observe(sectionList[i]);
}

/**
 * End Helper Functions
 * Begin Main Functions (Where the code should start running (Fung))
 *
 */

// build the nav
const navBuilder = function() {
  const newList = document.createElement("li");
  newList.innerText = "Hallo";
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Function: creates a new section and append it to the bottom of the HTML body

function createElement() {
  let section_name = document.createElement();
  section_name.textContent = "";
  document.body.appendChild(section_name);
}
