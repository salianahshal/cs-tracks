const responsiveMenuButton = document.getElementById("responMenuToggleBtn");
const navBarLinks = document.querySelector(".navbar-links");

responsiveMenuButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("open");
  responsiveMenuButton.classList.toggle("open");
});

const allNavLinks = document.querySelector(".navbar-links");
