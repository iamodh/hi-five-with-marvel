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

//PHJ JS
const carousel = document.querySelector("#carousel"); // 캐러셀 영역
const pics = [
  "doctorstrange2.jpg",
  "avengers_endgame.png",
  "spiderman.jpg",
  "marvles2.jpg",
]; // 이미지 배열

carousel.style.backgroundImage = `url(images/hj/${pics[0]})`; // 첫번째 이미지 기본으로 표시
console.log(carousel.style.backgroundImag);
const arrows = document.querySelectorAll(".arrow"); // 화살표
carousel.style.backgroundRepeat = "no-repeat";
carousel.style.backgroundSize = "contain";
let i = 0;

let isMoving = true;

carousel.addEventListener("mouseover", (e) => {
  isMoving = false;
});
carousel.addEventListener("mouseout", (e) => {
  isMoving = true;
});

setInterval(() => {
  //일정 시간마다 사진이 변함
  if (isMoving) {
    if (i >= pics.length) {
      i = 0; //사진이 끝까지 가면 처음으로
    }
    carousel.style.backgroundImage = `url(images/hj/${pics[i++]})`;
  }
}, 4000);

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      // 왼쪽 화살표 클릭
      i--; // 이전 이미지로 이동
      if (i < 0) {
        // 배열의 앞쪽끝
        i = pics.length - 1; // 맨 마지막 이미지로 이동
      }
    } else if (e.target.id == "right") {
      // 오른쪽 화살표 클릭
      i++; // 다음 이미지로 이동
      if (i >= pics.length) {
        //배열에 끝에 도달시
        i = 0; // 첫번째 이미지로 이동
      }
    }
    carousel.style.backgroundImage = `url(../../images/hj/${pics[i]})`; // 현재 이미지 표시
  });
});

/* 박주희 */
const colBox01 = document.querySelector(".collection-box01");
console.log(colBox01);

colBox01.addEventListener("mouseover", (e) => {
  colBox01.style.backgroundImage = 'url("../images/jh/index/background.png")';
  colBox01.style.backgroundSize = "cover";
  colBox01.style.backgroundPosition = "center";
  colBox01.style.backgroundRepeat = "no-repeat";
});

colBox01.addEventListener("mouseout", (e) => {
  colBox01.style.backgroundImage = "none";
});
// ------- //
const colBox02 = document.querySelector(".collection-box02");
console.log(colBox02);

colBox02.addEventListener("mouseover", (e) => {
  colBox02.style.backgroundImage = 'url("../images/jh/index/background.png")';
  colBox02.style.backgroundSize = "cover";
  colBox02.style.backgroundPosition = "center";
  colBox02.style.backgroundRepeat = "no-repeat";
});

colBox02.addEventListener("mouseout", (e) => {
  colBox02.style.backgroundImage = "none";
});
// ------- //
const colBox03 = document.querySelector(".collection-box03");
console.log(colBox03);

colBox03.addEventListener("mouseover", (e) => {
  colBox03.style.backgroundImage = 'url("../images/jh/index/background.png")';
  colBox03.style.backgroundSize = "cover";
  colBox03.style.backgroundPosition = "center";
  colBox03.style.backgroundRepeat = "no-repeat";
});

colBox03.addEventListener("mouseout", (e) => {
  colBox03.style.backgroundImage = "none";
});
// ------- //
const colBox04 = document.querySelector(".collection-box04");
console.log(colBox04);

colBox04.addEventListener("mouseover", (e) => {
  colBox04.style.backgroundImage = 'url("../images/jh/index/background.png")';
  colBox04.style.backgroundSize = "cover";
  colBox04.style.backgroundPosition = "center";
  colBox04.style.backgroundRepeat = "no-repeat";
});

colBox04.addEventListener("mouseout", (e) => {
  colBox04.style.backgroundImage = "none";
});
// ------- //
const colBox05 = document.querySelector(".collection-box05");
console.log(colBox05);

colBox05.addEventListener("mouseover", (e) => {
  colBox05.style.backgroundImage = 'url("./images/jh/index/background.png")';
  colBox05.style.backgroundSize = "cover";
  colBox05.style.backgroundPosition = "center";
  colBox05.style.backgroundRepeat = "no-repeat";
});

colBox05.addEventListener("mouseout", (e) => {
  colBox05.style.backgroundImage = "none";
});
