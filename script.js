// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
// const skillSection = document.querySelector(".skills");
// const skillBars = document.querySelectorAll(".skill-fill");

// window.addEventListener("scroll", () => {
//   const sectionTop = skillSection.offsetTop;
//   const scrollPos = window.scrollY + window.innerHeight;

//   if (scrollPos > sectionTop + 100) {
//     skillBars.forEach(bar => bar.style.animationPlayState = "running");
//   }
// });


// Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// Future animations can go here
console.log("Portfolio Loaded Successfully");


const texts = ["Full Stack Developer", "MERN Stack Developer", "PHP Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 3000);
  }
  setTimeout(type, 100);
})();


(function () {
  emailjs.init("wLhnvp_ZogcI2wQ-d"); // 👈 replace
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.innerText = "Sending...";

  emailjs
    .sendForm(
      "service_nykh6z8",   // 👈 replace
      "template_7d46xzh",  // 👈 replace
      this
    )
    .then(
      () => {
        status.style.color = "#00ff99";
        status.innerText = "Message sent successfully ✅";
        this.reset();
      },
      (error) => {
        status.style.color = "red";
        status.innerText = "Failed to send message ❌";
        console.error(error);
      }
    );
});



// service_nykh6z8
