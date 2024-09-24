"use strict";

const imgOn = new Image();
const imgOff = new Image();
imgOn.src = "../img/on.svg";
imgOff.src = "../img/off.svg";

function foo(e) {
  console.log(e.getAttribute("data-activ"));
  if (e.getAttribute("data-activ")) {
    e.innerHTML = `<img src="${imgOn.src}">`;
    e.setAttribute("data-activ", "");
  } else {
    e.innerHTML = `<img src="${imgOff.src}">`;
    e.setAttribute("data-activ", "true");
  }
}
