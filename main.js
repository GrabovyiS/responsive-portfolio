const hamburgerButton = document.querySelector("#hamburger-button");
const navLinks = document.querySelector("header nav ul");

const hide = (e) => {
  if (!e.target.closest("header nav ul")) {
    navLinks.classList.remove("shown");
    navLinks.classList.add("hidden");

    window.removeEventListener("click", hide);
  }
};

hamburgerButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("shown");

    window.addEventListener("click", hide);
  } else {
    navLinks.classList.add("hidden");
    navLinks.classList.remove("shown");
  }
});
