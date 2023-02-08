// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var nav = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//--------------------------------------------------------------------------------------------------//
// Get the menu links and sections
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("body section");

// Handle the scroll event
const handleScroll = () => {
  // Get the current scroll position
  const scrollTop = window.pageYOffset;

  // Loop through the sections
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // Get the section bounds
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    // Check if the section is in view
    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
      // Highlight the corresponding menu link
      links[i].classList.add("active");
    } else {
      // Remove the highlight from the menu link
      links[i].classList.remove("active");
    }
  }
};

// Listen for the scroll event
window.addEventListener("scroll", handleScroll);
