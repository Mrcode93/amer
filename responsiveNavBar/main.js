const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
            }
        });

        burger.classList.toggle("toggle");
    });
    // if (nav.classList.toggle("nav-active") == "active") {
    //     console.log("hi");
    // }
};
navSlide();
setInterval(function() {
    const show = document.querySelector("span[data-show]");
    const next =
        show.nextElementSibling || document.querySelector("span:first-child");
    const up = document.querySelector("span[data-up]");

    if (up) {
        up.removeAttribute("data-up");
    }
    show.removeAttribute("data-show");
    show.setAttribute("data-up", "");

    next.setAttribute("data-show", "");
}, 2500);
let section = document.querySelector(".two");
let spans = document.querySelectorAll(".progress span");
let stick = document.querySelector(".top");
let progress = document.querySelector(".progress");

window.onscroll = function() {
    if (scrollY >= 700) {
        stick.style.display = "flex";
    } else {
        stick.style.display = "none";
    }
    if (scrollY >= section.offsetTop - 200) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    if (scrollY >= section.offsetTop - 100) {
        anime({
            targets: ".progress",
            translateX: [
                { value: 200, duration: 300 },
                { value: 0, duration: 300 },
            ],
            delay: anime.stagger(100, { direction: "reverse" }),
        });
    } else {
        return false;
    }
};
stick.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});