/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".navbar nav a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    navbar.style.background = "rgba(5,5,5,.92)";
  } else {
    navbar.style.background = "rgba(5,5,5,.45)";
  }

});


/* =========================
   PARALLAX BIG 16
========================= */

const bigNumber = document.querySelector(".big-number");

window.addEventListener("mousemove", e => {

  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;

  bigNumber.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* =========================
   REVEAL ANIMATION
========================= */

const elements = document.querySelectorAll(
  ".feature-card, .timeline-item, .stat, .achievement, .gallery-card"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("reveal");
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 100);

      }

    });

  },
  {
    threshold: .15
  }
);

elements.forEach(el => observer.observe(el));


/* =========================
   NUMBER COUNTER
========================= */

const counters = document.querySelectorAll("[data-value]");

let counterStarted = false;

const counterObserver = new IntersectionObserver(
  entries => {

    if (entries[0].isIntersecting && !counterStarted) {

      counterStarted = true;

      counters.forEach(counter => {

        const target = Number(counter.dataset.value);

        let current = 0;

        const update = () => {

          const increment = Math.max(1, Math.ceil(target / 40));

          current += increment;

          if (current >= target) {
            current = target;
          }

          counter.textContent = current;

          if (current < target) {
            requestAnimationFrame(update);
          }

        };

        update();

      });

    }

  },
  {
    threshold: .5
  }
);

if (counters.length) {
  counterObserver.observe(counters[0]);
}


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


/* =========================
   CURSOR EFFECT
========================= */

const cards = document.querySelectorAll(
  ".feature-card, .achievement, .gallery-card"
);

cards.forEach(card => {

  card.addEventListener("mousemove", e => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - .5) * -5;

    const rotateY =
      ((x / rect.width) - .5) * 5;

    card.style.transform =
      `perspective(700px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(700px) rotateX(0) rotateY(0)";

  });

});


/* =========================
   SMOOTH BUTTON
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});