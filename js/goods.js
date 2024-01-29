const img = document.querySelector(".image")
const explain = document.querySelector(".caption")

console.log(img)
console.log(explain)

img.addEventListener("mouseover", function() {
  explain.style.display = "block";
});

img.addEventListener("mouseout", function() {
  explain.style.display = "none";
});

const product = document.querySelector(".product");
const pics = [`../images/jh/carousel/captin.jpg`, "../images/jh/carousel/doctor_strange.jpg", "../images/jh/carousel/groot.jpg", "../images/jh/carousel/ironman.jpg", "../images/jh/carousel/thor.jpg"];

product.style.backgroundImage = `url(../images/jh/carousel${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    console.log(e)
    if(e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }      
    }
    else if (e.target.id == "right") {
      i++;
      if ( i >= pics.length ) {
        i = 0;
      }
    }
    product.style.backgroundImage = `url(../images/jh/carousel${pics[i]})`;
  });
});