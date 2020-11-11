// MENU SHOW

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  }
}
showMenu("nav-toggle", "nav-menu");

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show")
}
navLink.forEach(link => link.addEventListener("click", linkAction))

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active")
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active")
    }
  })
}
// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false
})

// SCROLL HOME 
// sr.reveal(".home__title", {})
// sr.reveal(".home__scroll", {})
// sr.reveal(".home__img", {})

// SCROLL ABOUT 
sr.reveal(".about__subtitle", {})
sr.reveal(".about__img", { delay: 200 })
sr.reveal(".about__profession", { delay: 300 })
sr.reveal(".about__text", { delay: 400 })
sr.reveal(".about__social-icon", { delay: 450, interval: 200 })

// SCROLL SKILLS 
sr.reveal(".skills__subtitle", {})
sr.reveal(".skills__name", { distance: "20px", delay: 50, interval: 100 })
sr.reveal(".skills__img", { delay: 300 })

// SCROLL PORTFOLIO
sr.reveal(".portfolio__img", { interval: 200 })

// SCROLL CONTACT 
sr.reveal(".contact__subtitle", {})
sr.reveal(".contact__text", { interval: 100 })
sr.reveal(".contact__input", { delay: 200 })
sr.reveal(".contact__button", { delay: 300 })



