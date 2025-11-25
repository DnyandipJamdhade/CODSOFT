// ===== YEAR IN FOOTER =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close nav when clicking a link (mobile)
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("show"));
  });
}

// ===== THEME TOGGLE (LIGHT / DARK) =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  root.setAttribute("data-theme", storedTheme);
  if (storedTheme === "dark" && themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
}

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all
  reveals.forEach((el) => el.classList.add("revealed"));
}
