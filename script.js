// 1. Typing Effect
const roles = ["Web Developer", "Frontend Designer", "Future Software Engineer"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const roleElement = document.getElementById("role");
  if (!roleElement) return;
  const currentRole = roles[roleIndex];
  let displayText = currentRole.substring(0, charIndex);
  roleElement.innerHTML = displayText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}
window.onload = typeEffect;

// 2. Animate Skills
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress").forEach(skill => {
    let skillPos = skill.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
    if (skillPos < screenHeight - 50) {
      skill.style.width = skill.getAttribute("data-width");
    }
  });
});

// 3. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// 4. Back to Top
const btn = document.getElementById("backToTop");
if (btn) {
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) btn.style.display = "block";
    else btn.style.display = "none";
  };
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

// 5. Fade-in Animation
const faders = document.querySelectorAll(".fade-in");
function checkFade() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// 6. Dark/Light Mode
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    themeToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}
