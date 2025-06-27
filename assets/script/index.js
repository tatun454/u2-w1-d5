window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > heroBottom - 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
