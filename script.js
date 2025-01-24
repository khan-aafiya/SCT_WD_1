const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll("#nav-links a");

// JavaScript to handle active link highlighting
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    // Identify the current section in the viewport
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });


    // Remove and add the 'active' class for nav links
    links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Toggle menu visibility on button click
menuBtn.addEventListener("click", () => {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
        navLinks.classList.toggle("show");
    }
    console.log("click");
});

// Hide navigation menu when any link is clicked
links.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 927) {
            navLinks.style.display = "none";
            menuBtn.style.display = "block";
        }
    });
});

