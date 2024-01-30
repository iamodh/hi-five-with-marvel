const box01 = document.querySelector("#box01")
// console.log(boxes)
box01.addEventListener("click", (e) => {
  window.location.href = "https://youtube.com/shorts/mUksoZNUzzc?feature=shared"
});

const box02 = document.querySelector("#box02")
// console.log(boxes)
box02.addEventListener("click", (e) => {
  window.location.href = "https://blog.naver.com/ohho52/222943274696"
});

const carouselContainer = document.querySelector(".product");
const screenshot = carouselContainer.querySelector("img");
const btnLeft = carouselContainer.querySelector(".left");
const btnRight = carouselContainer.querySelector(".right");

const screenshotUrl = [
  "../images/jh/pic01.jpg",
  "../images/jh/pic02.jpg",
  "../images/jh/pic03.jpg",
];

let currentIndex = 0;

const previousScreenshot = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = screenshotUrl.length - 1;
  }
  screenshot.src = screenshotUrl[currentIndex];
};

const nextScreenshot = () => {
  currentIndex++;
  if (currentIndex >= screenshotUrl.length) {
    currentIndex = 0;
  }
  screenshot.src = screenshotUrl[currentIndex];
};

btnLeft.addEventListener("click", previousScreenshot);

btnRight.addEventListener("click", nextScreenshot);