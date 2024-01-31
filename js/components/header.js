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
