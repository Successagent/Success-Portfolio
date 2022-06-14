// Nav toggle functionality

let navBtn = document.querySelector(".nav-toggle");
let menu = document.querySelector(".list");

navBtn.addEventListener("click", openMenu);

function openMenu() {
  let visibility = menu.getAttribute("data-visible");
  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    navBtn.setAttribute("data-visible", true);
  } else {
    menu.setAttribute("data-visible", false);
    navBtn.setAttribute("data-visible", false);
  }
}

// Click and Show contents Functions

let contents = document.querySelectorAll(".projects");
let projects = document.querySelectorAll(".content");

contents.forEach((item) => item.addEventListener("click", showContents));

function showContents() {
  removeShow();
  let images = document.querySelector(`#${this.id}-content`);
  images.classList.add("show");
  console.log(images)
}

function removeShow() {
  projects.forEach((item) => item.classList.remove("show"));
}

// Bluring Functionality

// let body = document.querySelector("main");

// let num = 1;
// let timeEvent = setInterval(bluring, 30)
// function bluring() {
//     num++
//     if(num > 99) {
//         clearInterval(timeEvent)
//     }
//    body.style.filter = `blur(${scale(num, 100, 0, 0, 20)}px)`;
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }
