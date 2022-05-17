const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  mobileMenu.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "block";
  mobileMenu.style.display = "none";
});
