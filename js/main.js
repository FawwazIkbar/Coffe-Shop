// Toggle

// event click humber menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk menghilangkan humberger menu
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
