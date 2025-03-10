// Hamburger Menu Toggle for Mobile Navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// To make the nav responsive in mobile
const navLinksMobile = document.querySelector("nav ul");
if (navLinksMobile) {
  navLinksMobile.classList.add("mobile");
  console.log("mobile");
}
function toggleMenu() {
  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.toggle("open");
  console.log("clicked2");
}
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: unobserve if you only want the animation once
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animateElements.forEach((el) => {
    observer.observe(el);
  });
});
