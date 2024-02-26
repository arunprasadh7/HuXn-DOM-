// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Arun Web Dev");
};

// ----------- GREAT WAY-----------

const best = document.querySelector(".best");
const bestFun = () => console.log("BEst Way to add events ");

best.addEventListener("click", bestFun);

// ----------- Event (e) Object -----------
const p = document.querySelector(".para");
const eve = (event) => console.log(event);

p.addEventListener("click", eve);

// form data
const form = document.querySelector("form");
const input = document.querySelector("input");
const fevent = (event) => {
  event.preventDefault();
  console.log(input.value);
};

form.addEventListener("submit", fevent);
