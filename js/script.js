// Get all the links in the navigation
const navLinks = document.querySelectorAll('header nav ul li a');

// Add an event listener to each link
navLinks.forEach(link => {
  // When the link is hovered over
    link.addEventListener('click', () => {
    // Remove the "active" class from the currently active link
        const activeLink = document.querySelector('header nav ul li a.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
    });
});