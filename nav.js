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
