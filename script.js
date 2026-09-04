const year = document.getElementById("year");
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menu && nav) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(28px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 650,
          easing: "cubic-bezier(.2,.7,.2,1)",
          fill: "forwards"
        }
      );

      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  element.style.opacity = "0";
  revealObserver.observe(element);
});
