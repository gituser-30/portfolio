const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const skillSection = document.querySelector(".skills");
const skillBars = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.offsetTop;
  const scrollPos = window.scrollY + window.innerHeight;

  if (scrollPos > sectionTop + 100) {
    skillBars.forEach(bar => bar.style.animationPlayState = "running");
  }
});
