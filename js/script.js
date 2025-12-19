document.addEventListener("DOMContentLoaded", () => {
  // navbar
  const navbar = document.getElementById("navbarMbDeploy");
  const hambLink = document.getElementById('hambLink');
  const navWrapper = navbar.querySelector('ul');

  const toggleNavBar = (navbarElement, hambLink) => {
    hambLink.classList.toggle("active");
    navbarElement.classList.toggle("open");
  };

  hambLink.addEventListener('click', () => toggleNavBar(navbar, hambLink));

  navWrapper.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      toggleNavBar(navbar, hambLink);
    }
  });

  // auto-date
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // glightbox
  if (typeof GLightbox === 'function') {
    GLightbox({
      selector: '.glightbox'
    });
  }
});