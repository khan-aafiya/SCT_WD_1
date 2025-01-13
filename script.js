// JavaScript to handle active link highlighting
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".link");

window.addEventListener("scroll", () => {
  let current = "";

  // Identify current section
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all links and add to the current one
  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Toggle menu visibility
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector('.nav');
const navCont = document.querySelector('.content');
const heading = document.querySelector('.heading');

menuBtn.addEventListener("click", () => {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
    nav.classList.add("show");
    menuBtn.style.display = "none";
  }
});


// Close menu on link click
navLinks.addEventListener("click", () => {
  if (window.innerWidth <= 845) {
    navLinks.style.display = "none";
    menuBtn.style.display = "block";
  }
});
heading.addEventListener("click", () => {
  if (window.innerWidth <= 845) {
    navLinks.style.display = "none";
    menuBtn.style.display = "block";
  }
});

window.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
      navLinks.classList.remove("show");
  }
});