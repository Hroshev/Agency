const accordions = document.querySelectorAll(".accordion__item");

if (accordions) {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");
    });
  });
}
