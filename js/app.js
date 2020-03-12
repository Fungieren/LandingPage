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

const landingContainer = document.querySelectorAll(".landing__container");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

for (let i = 0; i < landingContainer.length; i++) {
  buttons[i].addEventListener("click", createElement);
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

// Add new Section

function createElement() {
  let section_name = document.createElement();
  section_name.textContent = "";
  document.body.appendChild(section_name);
}
