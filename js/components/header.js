const navBottomMid = document.querySelector(".nav-bottom-mid");

const lists = navBottomMid.querySelectorAll("li");

const focus = (event) => {
  lists.forEach((list) => {
    list.style.color = "rgba(150,150,150,0.8)";
  });
  event.target.style.color = "var(--color-white)";
};

lists.forEach((list) => {
  list.addEventListener("mouseover", focus);
});

const open = document.querySelector("#open");
const navMenu = document.querySelector(".nav-menu");
const close = document.querySelector("#close");
console.log(open);

const slideIn = () => {
  navMenu.classList.remove("inactive");
  navMenu.classList.add("active");
}
const slideOut = () => {
  navMenu.classList.add("inactive");
  navMenu.classList.remove("active");
}
close.addEventListener("click",slideOut)
open.addEventListener("click", slideIn)

// nav-menu2
const open2 = document.querySelectorAll(".menu-arrow");
const navMenu2 = document.querySelector(".nav-menu2");
const close2 = document.querySelector("#close2");

const slideIn2 = () => {
  navMenu2.classList.add("active2");
  navMenu2.classList.remove("inactive2");
}
const slideOut2 = () => {
  navMenu2.classList.add("inactive2");
  navMenu2.classList.remove("active2");
}
close2.addEventListener("click",slideOut2)

open2.forEach((arrow)=>{
  arrow.addEventListener("click",slideIn2);
})