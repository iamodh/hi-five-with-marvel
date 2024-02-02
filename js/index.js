/* ODH */
const herosContainer = document.querySelector(".heros-container.mobile");

const heroBoxes = herosContainer.querySelectorAll(".mobile .hero");
const slideBoxes = herosContainer.querySelectorAll(".mobile .slideBox");

const slideInRight = (event) => {
  event.target.children[0].classList.remove("animation-index-slideOut-right");
  event.target.children[0].classList.add("animation-index-slideIn-right");
};

const slideOutRight = (event) => {
  event.target.classList.remove("animation-index-slideIn-right");
  event.target.classList.add("animation-index-slideOut-right");
};

const slideInLeft = (event) => {
  event.target.children[0].classList.remove("animation-index-slideOut-left");
  event.target.children[0].classList.add("animation-index-slideIn-left");
};

const slideOutLeft = (event) => {
  event.target.classList.remove("animation-index-slideIn-left");
  event.target.classList.add("animation-index-slideOut-left");
};

heroBoxes[0].addEventListener("mouseover", slideInRight);
heroBoxes[1].addEventListener("mouseover", slideInLeft);
heroBoxes[2].addEventListener("mouseover", slideInRight);

slideBoxes[0].addEventListener("mouseout", slideOutRight);
slideBoxes[1].addEventListener("mouseout", slideOutLeft);
slideBoxes[2].addEventListener("mouseout", slideOutRight);

/* Desktop slide up animation */
const heroContainerDesktop = document.querySelector(".heros-container.desktop");
const heroBoxesDesktop =
  heroContainerDesktop.querySelectorAll(".desktop .hero");
const slideBoxesDesktop =
  heroContainerDesktop.querySelectorAll(".desktop .slideBox");

const slideUp = (event) => {
  event.target.children[0].classList.remove("animation-index-slideDown");
  event.target.children[0].classList.add("animation-index-slideUp");
};
const slideDown = (event) => {
  event.target.classList.remove("animation-index-slideUp");
  event.target.classList.add("animation-index-slideDown");
};

heroBoxesDesktop.forEach((box) => {
  box.addEventListener("mouseover", slideUp);
});

slideBoxesDesktop.forEach((slideBox) => {
  slideBox.addEventListener("mouseout", slideDown);
});
