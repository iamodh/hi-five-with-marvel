const heroContainers = document.querySelectorAll(".hero-info-container");
const heroImages = document.querySelectorAll(".hero-image");

const hasAnimationPlayed = new Array(heroContainers.length);
hasAnimationPlayed.fill(false);

window.onscroll = () => {
  for (let i = 0; i < heroContainers.length; i++) {
    console.log(`${i}: ${heroContainers[i].offsetTop - window.scrollY}`);
    if (heroContainers[i].offsetTop - window.scrollY < 256) {
      hasAnimationPlayed[i] = true;
    }
  }

  for (let i = 0; i < heroContainers.length; i++) {
    if (hasAnimationPlayed[i]) {
      heroImages[i].classList.remove("hidden");
    }
  }
};
